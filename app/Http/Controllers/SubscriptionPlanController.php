<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Models\PaymentGateway;
use App\Models\Subscription;
use App\Models\User;
use Inertia\Inertia;


class SubscriptionPlanController extends Controller
{
    // Get subscription plan to update user current plan
    public function index()
    {
        try {
            $user = auth()->user();
            // dd($user->subscription_plan_id, $user->role == 'admin');
            if ($user->role == 'admin') {
                $plan = SubscriptionPlan::where('type', 'Free')->first();
            } else {
                $plan = SubscriptionPlan::where('id', $user->subscription_plan_id)->first();
            }
            
            return Inertia::render('UpdatePlan/Show', compact('plan'));
        } catch (\Throwable $th) {
            return back()->with('error', 'Internal server error!. Try again later.');
        }
    }


    // Get payment gateway page
    public function select(Request $request)
    {
        try {
            $plans = SubscriptionPlan::where('status', 'active')->get();
            return Inertia::render('UpdatePlan/Select', compact('plans'));
        } catch (\Throwable $th) {
            return back()->with('error', 'Internal server error!. Try again later.');
        }
    }
    

    // Get payment gateway page
    public function selected(Request $request, $id)
    {
        try {
            $type = $request->type;
            $plan = SubscriptionPlan::where('id', $id)->first();
            $methods = PaymentGateway::all();

            // return Inertia::render('UpdatePlan/Update', compact('plan', 'type', 'methods'));
            return view('pages.checkout', compact('plan', 'type', 'methods'));
        } catch (\Throwable $th) {
            return back()->with('error', 'Internal server error!. Try again later.');
        }
    }


    // Get all subscriber list on admin dashboard
    public function transaction(Request $request)
    {
        try {
            $page = 10;
            if ($request->per_page) {
                $page = intval($request->per_page);
            }
            $transactions = Subscription::orderBy('created_at', 'desc')->paginate($page);

            return Inertia::render('Admin/FinanceManagement/Transactions', compact('transactions'));
        } catch (\Throwable $th) {
            return back()->with('error', 'Internal server error!. Try again later.');
        }
    }

    public function search_transaction(Request $request)
    {
        try {
            $page = 10;
            $query = $request->value;

            if ($request->per_page) {
                $page = intval($request->per_page);
            }

            $result = Subscription::orderBy('created_at', 'desc')
                ->where('total_price', 'LIKE', '%'.$query.'%')
                ->orWhere('currency', 'LIKE', '%'.$query.'%')
                ->orWhere('method', 'LIKE', '%'.$query.'%')
                ->paginate($page);

            return $result;
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()]);
        }
    }


    // Get all subscriber list on admin dashboard
    public function subscription(Request $request)
    {
        try {
            $page = 10;
            if ($request->per_page) {
                $page = intval($request->per_page);
            }
            $subscriptions = User::orderBy('created_at', 'desc')
                ->whereNotNull('subscription_id')
                ->paginate($page);

            return Inertia::render('Admin/FinanceManagement/Subscriptions', compact('subscriptions'));
        } catch (\Throwable $th) {
            return back()->with('error', 'Internal server error!. Try again later.');
        }
    }

    public function search_subscription(Request $request)
    {
        try {
            $page = 10;
            $query = $request->value;

            if ($request->per_page) {
                $page = intval($request->per_page);
            }

            $result = User::orderBy('created_at', 'desc')
                ->whereNotNull('subscription_id')
                ->where('name', 'LIKE', '%'.$query.'%')
                ->orWhere('email', 'LIKE', '%'.$query.'%')
                ->paginate($page);

            return $result;
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()]);
        }
    }
}
