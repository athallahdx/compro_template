<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Certification;

class CertificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $certifications = [
            [
                'logo' => 'certifications/fssc22000.png',
                'name' => 'FSSC 22000',
                'description' => 'The FSSC 22000 Food Safety System Certification provides a framework for effectively managing food safety responsibilities. FSSC 22000 is fully recognized by the Global Food Safety Initiative (GFSI). We are the first company in the world in our industry to get this certificate.',
            ],
            [
                'logo' => 'certifications/fairtrade.jpg',
                'name' => 'Fairtrade',
                'description' => 'Fairtrade is a global movement that aims to help producers in developing countries achieve better trading conditions and promote sustainability. We are proud to be a Fairtrade certified company, ensuring that our products meet rigorous social, economic, and environmental standards.',
            ],
            [
                'logo' => 'certifications/jasorganic.png',
                'name' => 'JAS Organic',
                'description' => 'JAS (Japanese Agricultural Standards) Organic certification is a mark of quality and safety for organic products in Japan. Our JAS Organic certification demonstrates our commitment to producing high-quality organic coconut sugar that meets the strict standards set by the Japanese government.',
            ],
            [
                'logo' => 'certifications/brazilorganic.png',
                'name' => 'Brazil Organic',
                'description' => 'Brazil Organic certification is a recognition of our commitment to organic farming practices and sustainability. This certification ensures that our coconut sugar is produced without the use of synthetic pesticides, fertilizers, or genetically modified organisms (GMOs), making it a healthier choice for consumers.',
            ],
            [
                'logo' => 'certifications/organicosagarpamexico.png',
                'name' => 'Organicos Agarpá Mexico',
                'description' => 'Organicos Agarpá Mexico certification is a testament to our dedication to organic agriculture and sustainable practices. This certification guarantees that our coconut sugar is produced in accordance with the highest organic standards, providing consumers with a natural and wholesome product.',
            ]
        ];

        foreach ($certifications as $certification) {
            Certification::create($certification);
        }
    }
}
