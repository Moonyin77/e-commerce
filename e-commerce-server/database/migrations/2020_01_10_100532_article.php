<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Article extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Define your table with your options
        Schema::create('articles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->Integer('category_id');
            $table->string('name');
            $table->string('reference')->unique();
            $table->string('modele');
            $table->string('marque');
            $table->string('description');
            $table->float('prix');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
