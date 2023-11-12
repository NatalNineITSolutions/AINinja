<?php

namespace App\Http\Controllers;

use App\Models\SavedDocument;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DocumentController extends Controller
{
    // getting saved document list
    function index(Request $request)
    {
        try {
            $page = 10;
            $user = auth()->user();
            if ($request->per_page) {
                $page = intval($request->per_page);
            }

            if ($user->role == 'admin') {
                $documents = SavedDocument::orderBy('created_at', 'desc')
                ->with('template')
                ->paginate($page);
            } else {
                $documents = SavedDocument::orderBy('created_at', 'desc')
                ->where('user_id', $user->id)
                ->with('template')
                ->paginate($page);
            }

            return Inertia::render('SavedDocuments/TemplateContents/Show', compact('documents'));
        } catch (\Throwable $th) {
            return back()->with('error', 'Internal server error!. Try again later.');
        }
    }

    // saved document update page
    function show($id)
    {
        try {
            $document = SavedDocument::where('id', $id)->first();
            return Inertia::render('SavedDocuments/TemplateContents/Update', compact('document'));
        } catch (\Throwable $th) {
            return back()->with('error', 'Internal server error!. Try again later.');
        }
    }

    
    // saved document update page
    function update(Request $request, $id): RedirectResponse
    {
        try {
            SavedDocument::where('id', $id)->update($request->all());
            return back()->with('success', 'Document successfully updated');
        } catch (\Throwable $th) {
            return back()->with('error', 'Internal server error!. Try again later.');
        }
    }

    // saved document delete
    function delete($id): RedirectResponse
    {
        try {
            SavedDocument::where('id', $id)->delete();
            return back()->with('success', 'Document successfully deleted');
        } catch (\Throwable $th) {
            return back()->with('error', 'Internal server error!. Try again later.');
        }
    }

    public function search(Request $request)
    {
        try {
            $page = 10;
            $user = auth()->user();
            $query = $request->value;
            if ($request->per_page) {
                $page = intval($request->per_page);
            }

            if ($user->role == 'admin') {
                $result = SavedDocument::where('document_name', 'LIKE', '%'.$query.'%')
                ->paginate($page);
            } else {
                $result = SavedDocument::where('user_id', $user->id)
                ->where('document_name', 'LIKE', '%'.$query.'%')
                ->paginate($page);
            }

            return $result;
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()]);
        }
    }
}
