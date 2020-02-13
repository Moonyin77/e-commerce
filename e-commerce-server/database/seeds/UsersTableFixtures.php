<?php

use Illuminate\Database\Seeder;

class UsersTableFixtures extends Seeder
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
            DB::table('users')->insert([
                'name' => Str::random(5),
                'role' => 'ROLE_USER',
                'email' => Str::random(5).'@gmail.com',
                'password' => bcrypt('password'),
                'created_at' => now(),
                'updated_at' => now()
                ]);
        } 

        // factory(App\User::class, $num)->create()->each(function ($user) {

        // });
    }
}
