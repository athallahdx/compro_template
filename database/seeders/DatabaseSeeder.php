<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Database\Seeders\AboutUsSeeder;
use Database\Seeders\ContactSeeder;
use Database\Seeders\CertificationSeeder;
use Database\Seeders\MottoSeeder;
use Database\Seeders\AdvantageSeeder;
use Database\Seeders\ProcedureSeeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'test@example.com'],
            [
                'name' => 'Admin Coco Sugar',
                'password' => Hash::make('qwerty123'),
                'email_verified_at' => now(),
            ]
        );
        
        $this->call([
            AboutUsSeeder::class,
            ContactSeeder::class,
            CertificationSeeder::class,
            MottoSeeder::class,
            ProcedureSeeder::class,
            AdvantageSeeder::class,
        ]);
    }


}
