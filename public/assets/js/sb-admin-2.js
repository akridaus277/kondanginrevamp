(function ($) {
    "use strict"; // Start of use strict

    // function closeSidebarOnSmallScreen() {
    //   // Tentukan lebar maksimum untuk layar HP (misalnya, 768 piksel).
    //   const mobileScreenMaxWidth = 768;

    //   // Dapatkan lebar jendela saat ini.
    //   const windowWidth = $(window).width();

    //   // Periksa jika lebar jendela kurang dari atau sama dengan lebar maksimum untuk layar HP.
    //   if (windowWidth <= mobileScreenMaxWidth) {
    //     // Tutup sidebar (secara otomatis).
    //     $("body").toggleClass("sidebar-toggled");
    //     $(".sidebar").toggleClass("toggled");
    //     if ($(".sidebar").hasClass("toggled")) {
    //       $('.sidebar .collapse').collapse('hide');
    //     };
    //   }
    // }

    function closeSidebarOnSmallScreen() {
        // Tentukan lebar maksimum untuk layar HP (misalnya, 768 piksel).
        const mobileScreenMaxWidth = 768;

        // Dapatkan lebar jendela saat ini.
        const windowWidth = $(window).width();

        // Periksa jika lebar jendela kurang dari atau sama dengan lebar maksimum untuk layar HP.
        if (windowWidth <= mobileScreenMaxWidth) {
            // Tutup sidebar (secara otomatis).
            $("body").addClass("sidebar-toggled");
            $(".sidebar").addClass("toggled");
            //     if ($(".sidebar").hasClass("toggled")) {
            //       $('.sidebar .collapse').collapse('hide');
            //     };
            $(".sidebar .collapse").collapse("hide");

            // Tambahkan fungsi scroll pada sidebar
            // $(".sidebarku").css("overflow-y", "auto");
        } else {
            // Hapus kelas dan tampilkan kembali sidebar jika lebar jendela lebih besar dari batas HP.
            $("body").removeClass("sidebar-toggled");
            $(".sidebar").removeClass("toggled");
            // $(".sidebarku").css("overflow-y", "hidden");
        }
    }

    $(document).ready(function () {
        // Inisialisasi fungsi saat dokumen siap.
        closeSidebarOnSmallScreen();

        // Tambahkan event listener untuk mengubah ukuran jendela.
        $(window).resize(function () {
            closeSidebarOnSmallScreen();
        });
    });

    // Panggil fungsi untuk menutup sidebar saat halaman dimuat.
    // $(document).ready(function() {

    //   closeSidebarOnSmallScreen();
    // });

    // Event handler untuk mengatur klik pada elemen <Link>.
    $(document).on("click", "#tutup", function (e) {
     
        closeSidebarOnSmallScreen(); // Panggil fungsi saat pengguna mengklik elemen <Link>.
      
    });

    // // Panggil kembali fungsi saat jendela diubah ukurannya.
    // $(window).resize(function() {

    //   closeSidebarOnSmallScreen();
    // });

    // Event handler untuk mengatur klik pada tombol sidebarToggle.
    $(document).on("click", "#sidebarToggle, #sidebarToggleTop", function (e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $(".sidebar .collapse").collapse("hide");
        }


    });

    // Toggle the side navigation
    // $(document).on('click', '#sidebarToggle, #sidebarToggleTop', function(e) {
    //   $("body").toggleClass("sidebar-toggled");
    //   $(".sidebar").toggleClass("toggled");
    //   if ($(".sidebar").hasClass("toggled")) {
    //     $('.sidebar .collapse').collapse('hide');
    //   };
    // });

    // Close any open menu accordions when window is resized below 768px
    // $(window).resize(function() {
    //   if ($(window).width() < 768) {
    //     $('.sidebar .collapse').collapse('hide');
    //   };

    //   // Toggle the side navigation when window is resized below 480px
    //   if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
    //     $("body").addClass("sidebar-toggled");
    //     $(".sidebar").addClass("toggled");
    //     $('.sidebar .collapse').collapse('hide');
    //   };
    // });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    // $(document).on('mousewheel DOMMouseScroll wheel', 'body.fixed-nav .sidebar', function(e) {
    //   if ($(window).width() > 768) {
    //     var e0 = e.originalEvent,
    //       delta = e0.wheelDelta || -e0.detail;
    //     this.scrollTop += (delta < 0 ? 1 : -1) * 30;
    //     e.preventDefault();
    //   }
    // });

    // Scroll to top button appear
    $(document).on("scroll", function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $(".scroll-to-top").fadeIn();
        } else {
            $(".scroll-to-top").fadeOut();
        }
    });

    // Smooth scrolling using jQuery easing
    // $(document).on('click', 'a.scroll-to-top', function(e) {
    //   var $anchor = $(this);
    //   $('html, body').stop().animate({
    //     scrollTop: ($($anchor.attr('href')).offset().top)
    //   }, 1000, 'easeInOutExpo');
    //   e.preventDefault();
    // });
})(jQuery); // End of use strict
