<?php

use Illuminate\Database\Seeder;

class CategoriesFixtures extends Seeder
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
            DB::table('categories')->insert([
                'name' => Str::random(5),
                'created_at' => now(),
                'updated_at' => now(),
                ]);
        } 
    }
}
