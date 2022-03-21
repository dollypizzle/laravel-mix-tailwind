let mix = require('laravel-mix')

class Tailwind {
    dependencies(){
        this.requiresReload = 'true';

        return['tailwindcss'];
    }
    
    register(ConfigPath = './tailwind.js'){
        this.ConfigPath = ConfigPath;
    }

    boot(){

        if (Mix.components.has('sass')){
            Config.processCssUrls = false;
        }

        let tailwindcss = require('tailwindcss');

        Config.postCss.push(tailwindcss(this.ConfigPath));

    }
}

mix.extend('tailwind', new Tailwind());