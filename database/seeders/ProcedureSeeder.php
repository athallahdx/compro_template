<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Procedure;
class ProcedureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $procedures = [
            [
                'order' => 1,
                'image' => 'procedures/1-harvesting_nectar.png',
                'title' => 'HARVESTING THE NECTAR',
                'description' => 'Our organic coconut sugar comes from the certified coconut trees tapped by our farmers twice a day',
            ],
            [
                'order' => 2,
                'image' => 'procedures/2-granulation_process.png',
                'title' => 'GRANULATION PROCESS',
                'description' => 'The organic coconut nectar is then boiled in large woks until it thickens and crystallizes into granules',
            ],
            [
                'order' => 3,
                'image' => 'procedures/3-internal_control_system.png',
                'title' => 'INTERNAL CONTROL SYSTEM',
                'description' => 'We work directly and give our farmers training and support to ensure the highest quality standards are met',
            ],
            [
                'order' => 4,
                'image' => 'procedures/4-drying_and_packing.png',
                'title' => 'DRYING AND PACKAGING',
                'description' => 'The granulated coconut sugar is then dried and packed in our facility'
            ]
        ];

        foreach ($procedures as $procedure) {
            Procedure::create($procedure);
        }
    }
}
