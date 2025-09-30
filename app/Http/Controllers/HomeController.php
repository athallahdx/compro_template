<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Advantage;
use App\Models\AboutUs;
use App\Models\Motto;
use App\Models\Contact;
use App\Models\Procedure;
use App\Models\Certification;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $advantages = Advantage::all();
        $aboutUs = AboutUs::first();
        $motto = Motto::first();
        $contact = Contact::first();
        $procedures = Procedure::orderBy('order')->get();
        $certifications = Certification::all();

        return Inertia::render('home/index', [
            'advantages' => $advantages,
            'aboutUs' => $aboutUs,
            'motto' => $motto,
            'contact' => $contact,
            'procedures' => $procedures,
            'certifications' => $certifications,
        ]);
    }
}
