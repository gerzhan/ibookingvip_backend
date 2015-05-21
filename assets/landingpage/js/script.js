
// --------------------------------------------------------
//	Navigation Bar
// -------------------------------------------------------- 	
$(window).scroll(function(){	
	"use strict";	
	var scroll = $(window).scrollTop();
	if( scroll > 60 ){		
		$("#header").addClass("scroll-fixed-navbar");				
	} else {
		$("#header").removeClass("scroll-fixed-navbar");
	}
});


if ($('#gmap').length > 0) {
    var myOptions = {
      zoom: 5,
      center: new google.maps.LatLng(1.290153,103.851993),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.LARGE,
                    position: google.maps.ControlPosition.RIGHT_CENTER
        },
    };
    var map = new google.maps.Map(document.getElementById("gmap"),
        myOptions);
}

