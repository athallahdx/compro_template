<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Contact;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $contact = [
            'address' => 'PT Coco Sugar Indonesia Jalan Gerilya Timur 289B Purwokerto, Central Java 53147 Indonesia',
            'whatsapp' => '+6285775502733',
            'email' => 'athallahgamer4@gmail.com',
            'linkedin' => 'https://www.linkedin.com/company/pt-coco-sugar-indonesia',
            'facebook' => 'https://www.facebook.com/CocoSugarIndonesia',
            'instagram' => 'https://www.instagram.com/cocosugar',
        ];

        Contact::create($contact);
    }
}
