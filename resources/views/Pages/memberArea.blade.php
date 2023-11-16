<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width,
    initial-scale=1">

<meta http-equiv="X-UA-Compatible" content="ie=edge">

<meta name="description" content="">
<meta name="author" content="">
<!-- Favicon icon -->
<link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon.png">
<title>Member Area</title>
<!-- Custom CSS -->
<link href="{{ asset('dashboard/src/assets/extra-libs/c3/c3.min.css') }}" rel="stylesheet">
<link href="{{ asset('dashboard/src/assets/libs/chartist/dist/chartist.min.css') }}" rel="stylesheet">
<link href="{{ asset('dashboard/src/assets/extra-libs/jvector/jquery-jvectormap-2.0.2.css') }}" rel="stylesheet">

<script src="{{ asset('dashboard/src/assets/libs/jquery/dist/jquery.min.js') }}"></script>


<!-- Custom CSS -->
<link href="{{ asset('dashboard/src/dist/css/style.min.css') }}" rel="stylesheet">


<title>Member Area</title>
@laravelPWA
</head>



<body>

    <div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>

    <div id="memberArea"></div>



    <script src="{{ mix('js/app.js'). '?v=' . time() }}"></script>





    <script src="{{ asset('dashboard/src/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js') }}"></script>

    <script src="{{ asset('dashboard/src/dist/js/app-style-switcher.js') }}"></script>
    <script src="{{ asset('dashboard/src/dist/js/feather.min.js') }}"></script>

    <script src="{{ asset('dashboard/src/dist/js/sidebarmenu.js') }}"></script>
    <script src="{{ asset('dashboard/src/dist/js/custom.min.js') }}"></script>
    <script src="{{ asset('dashboard/src/dist/js/pages/dashboards/dashboard1.min.js') }}"></script>



    <script src="{{ asset('dashboard/src/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js') }}"></script>
    <script src="{{ asset('dashboard/src/assets/extra-libs/c3/d3.min.js') }}"></script>
    <script src="{{ asset('dashboard/src/assets/extra-libs/c3/c3.min.js') }}"></script>
    <script src="{{ asset('dashboard/src/assets/libs/chartist/dist/chartist.min.js') }}"></script>
    <script src="{{ asset('dashboard/src/assets/libs/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js') }}"></script>
    <script src="{{ asset('dashboard/src/assets/extra-libs/jvector/jquery-jvectormap-2.0.2.min.js') }}"></script>
    <script src="{{ asset('dashboard/src/assets/extra-libs/jvector/jquery-jvectormap-world-mill-en.js') }}"></script>





</body>

</html>
