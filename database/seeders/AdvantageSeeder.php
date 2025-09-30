<?php

namespace Database\Seeders;

use App\Models\Advantage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdvantageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $advantages = [
            [
                'icon' => 'advantages/ad1.png',
                'title' => 'Why Organic Coconut Sugar',
                'description' => 'We produce our organic coconut sugar in traditional ways, no preservatives added, comes in various taste that will suit your needs.',
            ],
            [
                'icon' => 'advantages/ad2.png',
                'title' => 'Benefits',
                'description' => 'Healthier lifestyle with this low glycemic index sweetener.',
            ],
            [
                'icon' => 'advantages/ad3.png',
                'title' => 'Nutrition Facts',
                'description' => 'Our Organic Coconut Sugar provides the energy and nutrient your body needs for a healthy lifestyle.',
            ],
            [
                'icon' => 'advantages/ad4.png',
                'title' => 'Fairer Trade',
                'description' => 'Means longer and more meaningful partnership. Fairer Trade is a different way of doing business, it’s all about decency and fairness for all parties involved in the supply chain..',
            ]
        ];

        foreach ($advantages as $advantage) {
            Advantage::create($advantage);
        }
    }
}
