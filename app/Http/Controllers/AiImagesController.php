<?php

namespace App\Http\Controllers;

use App\Helpers\AppHelper;
use App\Models\SavedCode;
use App\Models\SavedImage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\File;

class AiImagesController extends Controller
{
    public function index()
    {
        try {
            $user = auth()->user();
            $todaysImages = AppHelper::today_content('image');
            $images = SavedImage::where('user_id', $user->id)->get()->groupBy('generated_at');

            return Inertia::render('AiImages', compact('images', 'todaysImages'));
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }


    public function show(Request $request)
    {
        try {
            $page = 20;
            $user = auth()->user();
            if ($request->per_page) {
                $page = intval($request->per_page);
            }
            
            if ($user->role == 'admin') {
                $images = SavedImage::orderBy('created_at', 'desc')
                ->paginate($page);
            } else {
                $images = SavedImage::orderBy('created_at', 'desc')
                ->where('user_id', $user->id)
                ->paginate($page);
            }
            return Inertia::render('SavedDocuments/GeneratedImages/Show', compact('images'));
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }


    public function delete($id)
    {
        try {
            $image = SavedImage::where('id', $id)->first();
            File::delete($image->img_url);
            $image->delete();
            
            return back()->with('success', "Image successfully deleted.");
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }


    public function search(Request $request)
    {
        try {
            $page = 20;
            $user = auth()->user();
            $query = $request->value;
            if ($request->per_page) {
                $page = intval($request->per_page);
            }
            
            if ($user->role == 'admin') {
                $result = SavedImage::where('title', 'LIKE', '%'.$query.'%')
                ->paginate($page);
            } else {
                $result = SavedImage::where('user_id', $user->id)
                ->where('title', 'LIKE', '%'.$query.'%')
                ->paginate($page);
            }
            
            return $result;
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()]);
        }
    }
}
