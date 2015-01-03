// Game
// w = 119
// a = 97
// s = 115
// d = 100

jQuery(document).ready(function( $ ) {
	jQuery("#game").append("<div id='inner'></div>");
	jQuery("#game > #inner").append("<a id='start'>Start Game</a>"); 
});

function game_init(){
	// Player Meta
	player = {
		height : 2,
		width  : 7.7,
		lives  : 5
	}

	// Init vars
	var 
		top = 0,
		jump = 50,
		score = 0,
		left =  7.7*6,
		nomID = 1,
		ppos = 7;
		
	// Construct Game
	jQuery("#start").remove();
	jQuery("#game > #inner").append("<div id='player'></div>");
	jQuery("#game").append("<div id='score'></div>");
	jQuery("#game > #inner").append("<ul id='lives'></ul>");
	jQuery("#game > #inner").append("<p class='game-help animated fadeInDown' id='help_contr'>Press A and D to move left and right</p>");
	jQuery("#game > #inner").append("<p class='game-help animated fadeInDown' id='help_obj'>Collect as many as you can</p>");
	jQuery("#game").append("<a id='quit' href='' class='fa fa-power-off'></a>");
	jQuery("#player").css("left", left + "%");
	jQuery("#score").html(score);
	jQuery("#game > #inner > #final_score").remove();
	jQuery("#game > #inner > #game_social").remove();

	for (i = 0; i < player.lives; i++) {
		jQuery("#lives").append("<li id='life"+i+"'></li>");
  }

	// Mapping Movement
	jQuery( window ).keypress(function( event ) {
			if ( event.which == 100 ) {
				if (ppos == 13) {
					// console.log("Edge");
				} else {
					left = left + 7.7;
					ppos ++;
					jQuery("#player").css("left", left + "%");
					if (jQuery("#player").hasClass("flip")) {
						jQuery("#player").removeClass("flip")
					};
				}
			}
			if ( event.which == 97 ) {
				if (ppos == 1) {
					// console.log("Edge");
				} else {
					left = left - 7.7;
					ppos --;
					jQuery("#player").css("left", left + "%");
					if (!jQuery("#player").hasClass("flip")) {
						jQuery("#player").addClass("flip")
					};
				}
			}
	});

	var drop_coin = setInterval(function(){

		if (player.lives > 0) {
			var npos = Math.floor(Math.random()*14)*7.7;
			jQuery("#game > #inner").append("<div style='left:"+ npos +"%' class='nomnom' id='nom" + nomID + "'></div>");
			var nom = jQuery("#nom" + nomID);
			nom.animate({top:"+=400"}, 8500);
			nomID++;
		} else {
			clearInterval(drop_coin);
			console.log("Drop Canceled, Player Dead");
			// Setting the Game Over View
			jQuery("#game > #inner").remove();
			jQuery("#score").remove();
			jQuery("#quit").remove();
			jQuery("#game").append("<div id='inner'></div>");
			jQuery("#game > #inner").append("<a id='start' onclick='game_init()'>Restart</a>");
			jQuery("#game > #inner").append("<p id='final_score'>Your Score Was "+score+" !!</a>");
			jQuery("#game > #inner").append("<a id='game_social_twitter' href='https://twitter.com/intent/tweet?text=Indee made this awesome little game. My score was "+score+" &url=http://indee.io' class='fa fa-twitter'></a>");
			// jQuery("#game > #inner").append("<li><a href='https://www.facebook.com/sharer/sharer.php? u=http://indee.io' class='fa fa-facebook'></>");
		};

		var hit_miss = setInterval(function() {
			if (player.lives > 0) {
				//Hit
				if (ppos === npos / 7.7 + 1 && parseInt(nom.css("top")) > 210 && parseInt(nom.css("top")) < 300 && !nom.hasClass("hit")) {
					nom.addClass("hit");
					score ++;
					jQuery("#score").html(score);
					console.log(nomID + " = hit");
				};
				//Miss
				if (!nom.hasClass("hit") && parseInt(nom.css("top")) > 300 && !nom.hasClass("miss")) {
					player.lives --;
					jQuery("#life"+player.lives).remove();
					nom.addClass("miss");
					console.log(nomID + " = miss");
					// console.log("You lost a life. You have " + player.lives + "Lives left!")
				};
			} else {
				clearInterval(hit_miss);
				console.log("HitMiss Canceled, Player Dead")
			};
		}, 10);
	}, 1500);
}
