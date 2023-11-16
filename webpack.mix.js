const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.setPublicPath('public')
//    .copy('resources/dashboard/src', 'public/dashboard/src')
//    .version()

 mix.js('resources/js/app.js', 'public/js')
 .react()
 .sourceMaps()
 .postCss('resources/css/app.css', 'public/css', [
     //
 ]);






//  if (mix.inProduction()) {
//     mix.version();
// }


// mix.webpackConfig({
//     devServer: {
//         hot: true, // Aktifkan HMR
//         host: 'localhost', // Ganti sesuai kebutuhan
//         port: 8000, // Port yang digunakan oleh server pengembangan
//     }
// });
