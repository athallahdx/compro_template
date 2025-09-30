<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\AboutUs;

class AboutUsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $aboutUs = [
            'image' => 'aboutus/about-cover.jpg',
            'description' => 'About Coco Sugar® Our company is located in Central Java region, the center of coconut sugar production in Indonesia where its use has been deeply ingrained in the culture and it can be traced back for thousands of years. The deep understanding about the people and culture in this region coupled with international organic certification standards position us as the leading supplier of organic coconut sugar and nectar',
        ];

        AboutUs::create($aboutUs);
    }
}
