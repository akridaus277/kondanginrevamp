<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    @laravelPWA
</head>
<style>
        body {
            /* display: flex; */
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* height: 100vh; */
            /* margin: 0; */
            /* Menambahkan gambar latar belakang yang menyesuaikan layar */
            background: url('../images/icons/tirai.jpg') center/cover no-repeat;
            backdrop-filter: blur(3px);

        }
</style>


<body>

    <div id="login"></div>

    <script src="{{ mix('js/app.js'). '?v=' . time() }}"></script>
</body>
</html>
