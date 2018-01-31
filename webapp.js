// JavaScript Document
function intro() {
	confirm("By starting a new game, you will reaplce any old saves. Do you wish to proceed?");
	var playername = prompt("What is your name?");	
}


function new_message(msg) {
	document.getElementById("story").innerHTML += "<p>" + msg + "</p>";
}

function update_scene(s) {
	switch(s) {
		case "start":
			new_message("What planet is this cargo going to again?");
			new_message("Jonathan, we've been over this a hundred times!");
			new_message("I know! I know! I just keep forgeting! - Jonathan"); 	
			new_message("Planet Fostroth, now don't ask again! - User");
			new_message("Oh. Hmmm... I wonder what are in these boxes, you know, the ones in the cargo bay. - Jonathan");
			new_message("I don't know and I really don't care, just as long as I get paid. - User");
			new_message("Hmmm... You're a good pilot right? - Jonathan");
			new_message("Pff! I'm one of the best! - User");
			new_message("Ha ha! That's why you're flying a cargo ship? Ha ha! - Jonathan");
			new_message("What's your point? - User");
			new_message("You can handle this on your own for a few minutes, right? I'm going to check out those boxes.");
			new_message("FIne, yiu have two minutes. Im counting! - User");
			new_message("Thanks! - Jonathan runs off");
			new_message("Kids these days. - User");
			new_message("User turns on the cargo bay cameras.");
			new_message("What do you see? - User through intercom");
			new_message("WHOA! User, this is insane! - Jonathan through intercom");
			new_message("What is it?! - User through intercom");
			new_message("It's... it's... tons of GOLD! Some diamonds and jewels, too! - Jonathan through intercom");
			new_message("No way! - User through intercom");
			new_message("*BEEP* *BEEP* *BEEP* - computer in controll room");
			new_message("Crap! - User through intercom");
			new_message("What is it? - Jonathan through intercom");
			new_message("I'm checking! - User through intercom");
			new_message("User... - Jonathan through intercom");
			new_message("Jonathan, there is an incoming missile coming from Planet Ugnada X! Get up here NOW! - User through intercom");
			new_message("*BOOM!*");
			new_message("The ship jerks violently!");
			new_message("AHHHH! - Jonathan through intercom");
			new_message("The cargo bay door rips off. Jonathan quickly grabs on to a pole. Everything that has not been strapped down flies out into open space.");
			new_message("Jonathan! Hold on! - User");
			new_message("I... I can't! AHHH! - Jonathan's hands slip off the pole. He flies right out of the ship.");
			new_message("NOOO! JONATHAN!!! - User");
			new_message("The ships tilts downwards. All controll has been lost, the ship spirals downwards towards the mysterious plantet of Uganda X.");
	}
}