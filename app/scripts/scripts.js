jQuery(document).ready(function( $ ) {

	$(".sidebar").hover(function() {
		$(".content").addClass("sbHover")
	}, function() {
			$(".content").removeClass("sbHover")
	}), $("#landing-carousel").owlCarousel({
			loop: !0,
			autoplay: !0,
			autoplaySpeed: 1e3,
			margin: 0,
			nav: !1,
			items: 1
	}), $("#we-use-carousel").owlCarousel({
			items: 1,
			loop: !0,
			autoplay: !0,
			smartSpeed: 450
	}), $("#we-are-carousel").owlCarousel({
			loop: !0,
			autoplay: !0,
			autoplaySpeed: 1e3,
			margin: 0,
			nav: !1,
			items: 1
	}), $("#recommended-carousel").owlCarousel({
			loop: !0,
			autoplay: !0,
			autoplaySpeed: 1e3,
			margin: 0,
			nav: !1,
			items: 1
	});



	var date = new Date,

			oneDay = 864e5,

			day = date.getDate(),
			month = date.getMonth() + 1,
			year = date.getFullYear(),

			firstDate = new Date(2014, 8, 11),
			secondDate = new Date(year, month, day),
			diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)),
			totalCoffee = Math.floor(diffDays / 7 * 5 * 4);

	$("#coffee").html(totalCoffee);

	var h = $( window ).height();
	var w = $( window ).width();
	$("#landing").css("height", h);
	$("#landing").css("width", w);
	$("#landing-content").css("height", h);
	$("#landing-content").css("width", w);

	window.addEventListener("resize", function(){
		var h = $( window ).height();
		var w = $( window ).width();
		$("#landing").css("height", h);
		$("#landing").css("width", w);
		$("#landing-content").css("height", h);
		$("#landing-content").css("width", w);
	});
	$('#start').click( function(ev){
		game_init()
	});
});
