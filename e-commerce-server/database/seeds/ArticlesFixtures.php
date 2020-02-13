<?php

use Illuminate\Database\Seeder;

class ArticlesFixtures extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $num = 10;
        for($i = 0; $i <= $num; $i++) {
            DB::table('articles')->insert([
                'category_id' => '1',
                'name' => Str::random(5),
                'reference' => Str::random(6),
                'modele' => Str::random(5),
                'marque' => Str::random(5),
                'description' => Str::random(20),
                'prix' => random_int(0, 1000),
                'created_at' => now(),
                'updated_at' => now(),
                ]);
        } 
    }
}
