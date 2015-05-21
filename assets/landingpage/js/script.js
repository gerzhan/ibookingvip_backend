// --------------------------------------------------------
//  Navigation Bar
// --------------------------------------------------------
$(window).scroll(function() {
    "use strict";
    var scroll = $(window).scrollTop();
    if (scroll > 60) {
        $(".navbar").addClass("scroll-fixed-navbar");
    } else {
        $(".navbar").removeClass("scroll-fixed-navbar");
    }
});
// --------------------------------------------------------
//  Smooth Scrolling
// --------------------------------------------------------
$(".navbar-nav li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000);
});

// if ($('#gmap').length > 0) {
//     var myOptions = {
//       zoom: 5,
//       center: new google.maps.LatLng(1.290153,103.851993),
//       mapTypeId: google.maps.MapTypeId.ROADMAP,
//         zoomControl: true,
//         zoomControlOptions: {
//                     style: google.maps.ZoomControlStyle.LARGE,
//                     position: google.maps.ControlPosition.RIGHT_CENTER
//         },
//     };
//     var map = new google.maps.Map(document.getElementById("gmap"),
//         myOptions);
// }

// --------------------------------------------------------
//  Scroll Up
// --------------------------------------------------------
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scroll-up').fadeIn();
    } else {
        $('.scroll-up').fadeOut();
    }
});

$('.scroll-up').click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    alert('');
    return false;
});
// --------------------------------------------------------
//  Free registration Form
// --------------------------------------------------------
$('#banner-form').on('submit', function(e) {
    e.preventDefault(); //Prevents default submit
    var form = $(this);
    var post_url = form.attr('action');
    var post_data = form.serialize(); //Serialized the form data for process.php
    $('.form-process-contact').html('<p><i class="fa fa-spinner fa-spin fa-2x"></i> Please Wait...</p>');
    $.ajax({
        type: 'POST',
        url: post_url, //'contact/send', // Your form script
        data: post_data,
        success: function(msg) {
            $(form).fadeOut(500, function() {
                form.html(msg).fadeIn();
            });
        },
        error: function(msg) {
            $(form).fadeOut(500, function() {
                form.fadeIn();
            });
        }

    })
});


// --------------------------------------------------------
//  Contact Form
// --------------------------------------------------------
$('#contact-form').on('submit', function(e) {
    e.preventDefault(); //Prevents default submit
    var form = $(this);
    var post_url = form.attr('action');
    var post_data = form.serialize(); //Serialized the form data for process.php
    $('.form-process-contact').html('<p><i class="fa fa-spinner fa-spin fa-2x"></i> Please Wait...</p>');
    $.ajax({
        type: 'POST',
        url: post_url, //'contact/send', // Your form script
        data: post_data,
        success: function(msg) {
            $(form).fadeOut(500, function() {
                form.html(msg).fadeIn();
            });
        },
        error: function(msg) {
            $(form).fadeOut(500, function() {
                form.html(msg).fadeIn();
            });
        }

    })
});
