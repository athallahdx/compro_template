<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Motto;

class MottoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $motto = [
                'motto' => 'Nutrient Rich and Tastes Better',
                'image' => 'motto/motto_image.png',
                'description' => 'Made From 100% Pure Organic Unrefined Coconut Flower Blossom Nectar.',
            ];

      Motto::create($motto);
    }
}
