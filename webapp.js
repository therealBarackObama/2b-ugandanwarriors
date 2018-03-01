// JavaScript Document

var playername = "";
var stagename = "";
//Adds to textbox text
function new_message(msg) {
	document.getElementById("story").innerHTML += "<p>" + msg + "</p>";
}
//Introduction
function intro() {
	confirm("By starting a new game, you will reaplce any old saves. Do you wish to proceed?");
	playername = prompt("What is your name?");
	stagename = "Start";
	document.getElementById("story").innerHTML = "";
	document.getElementById("stage_name").innerHTML = "Stage name : " + stagename;
	update_scene(stagename);
}
//The Crash
function thecrash() {	
	stagename = "The Crash";
	document.getElementById("story").innerHTML = "";
	document.getElementById("story").style.backgroundImage = "url('images/s1page.jpg')";
	document.getElementById("stage_name").innerHTML = "Stage name : " + stagename;
	document.getElementById("story").style.color = "rgba(256, 256, 256,1.0)";
	document.getElementById("story").style.borderColor = "rgba(255, 0, 0, 1.0)";
	update_scene(stagename);
}
		//Forest
		function forest() {	
			document.getElementById("forest").style.backgroundColor = "rgba(256, 0, 0, 1.0)";
			document.getElementById("forest").style.borderColor = "rgba(255, 0, 0, 1.0)";
			document.getElementById("forest").disabled = true;
			stagename = "Forest";
			update_scene(stagename);
			}
			//Cabin
			function cabin() {	
				document.getElementById("cabin").style.backgroundColor = "rgba(256, 0, 0, 1.0)";
				document.getElementById("cabin").style.borderColor = "rgba(255, 0, 0, 1.0)";
				document.getElementById("cabin").disabled = true;
				stagename = "cabin";
				update_scene(stagename);
			}
		//Caves
		function caves() {	
		document.getElementById("caves").style.backgroundColor = "rgba(256, 0, 0, 1.0)";
		document.getElementById("caves").style.borderColor = "rgba(255, 0, 0, 1.0)";
		document.getElementById("caves").disabled = true;
		stagename = "Caves";
		update_scene(stagename);
	}
			//Take the treasure
			function treasure() {
				document.getElementById("treasure").style.backgroundColor = "rgba(256, 0, 0, 1.0)";
				document.getElementById("treasure").style.borderColor = "rgba(255, 0, 0, 1.0)";
				document.getElementById("treasure").disabled = true;
				stagename = "Treasure";
				update_scene(stagename);
			}
			//Leave the treasure
			function leavetreasure() {
				document.getElementById("leavetreasure").style.backgroundColor = "rgba(256, 0, 0, 1.0)";
				document.getElementById("leavetreasure").style.borderColor = "rgba(255, 0, 0, 1.0)";
				document.getElementById("leavetreasure").disabled = true;	
				stagename = "LeaveTreasure";
				update_scene(stagename);
			}
			//TakeArmor
			function takearmor() {
			document.getElementById("armor").style.backgroundColor = "rgba(256, 0, 0, 1.0)";
			document.getElementById("armor").style.borderColor = "rgba(255, 0, 0, 1.0)";
			document.getElementById("armor").disabled = true;
			stagename = "Armor";
			update_scene(stagename);
			}
//The Towers
function thetowers() {	
	stagename = "The Towers";
	update_scene(stagename);
}
//Various scenes
function update_scene(s) {
	switch(s) {
		case "Start":
			new_message("What planet is this cargo going to again?");
				setTimeout(function() {
					new_message("Jonathan, we've been over this a hundred times!");
						setTimeout(function() {
							new_message("I know! I know! I just keep forgetting! - Jonathan"); 
								setTimeout(function() {
									new_message("Planet Fostroth, now don't ask again! - " + playername);
										setTimeout(function() {
											new_message("Oh. Hmmm... I wonder what are in these boxes, you know, the ones in the cargo bay. - Jonathan");
												setTimeout(function() {
													new_message("I don't know and I really don't care, just as long as I get paid. - " + playername);
														setTimeout(function() {
															new_message("Hmmm... You're a good pilot right? - Jonathan");
																setTimeout(function() {
																	new_message("Pff! I'm one of the best! - " + playername);
																		setTimeout(function() {
																			new_message("Ha ha! That's why you're flying a cargo ship? Ha ha! - Jonathan");
																				setTimeout(function() {
																					new_message("What's your point? - " + playername);
																						setTimeout(function() {
																							new_message("You can handle this on your own for a few minutes, right? I'm going to check out those boxes.");
																								setTimeout(function() {
																									new_message("Fine, you have two minutes. I'm counting! - " + playername);
																										setTimeout(function() {
																											new_message("Thanks! - Jonathan runs off");
																												setTimeout(function() {
																													new_message("Kids these days. - " + playername);
																														setTimeout(function() {
																															new_message( playername + " turns on the cargo bay cameras.");
																																setTimeout(function() {
																																	new_message("What do you see? - " + playername + " through intercom");
																																		setTimeout(function() {
																																			new_message("WHOA! " + playername + ", this is insane! - Jonathan through intercom");
																																				setTimeout(function() {
																																					new_message("What is it?! - " + playername + " through intercom");
																																						setTimeout(function() {
																																							new_message("It's... it's... tons of GOLD! Some diamonds and jewels, too! - Jonathan through intercom");
																																								setTimeout(function() {
																																									new_message("No way! - " + playername + " through intercom");
																																										setTimeout(function() {
																																											new_message("*BEEP* *BEEP* *BEEP* - computer in controll room");
																																												setTimeout(function() {
																																													new_message("Crap! - " + playername + " through intercom");
																																														setTimeout(function() {
																																															new_message("What is it? - Jonathan through intercom");
																																																setTimeout(function() {
																																																	new_message("I'm checking! - " + playername + " through intercom");
																																																		setTimeout(function() {
																																																			new_message( playername + "... - Jonathan through intercom");
																																																				setTimeout(function() {
																																																					new_message("Jonathan, there is an incoming missile coming from Planet Ugnada X! Get up here NOW! - " + playername + " through intercom");
																																																						setTimeout(function() {
																																																							new_message("*BOOM!*");
																																																								setTimeout(function() {
																																																									new_message("The ship jerks violently!");
																																																										setTimeout(function() {
																																																											new_message("AHHHH! - Jonathan through intercom");
																																																												setTimeout(function() {
																																																													new_message("The cargo bay door rips off. Jonathan quickly grabs on to a pole. Everything that has not been strapped down flies out into open space.");
																																																														setTimeout(function() {
																																																															new_message("Jonathan! Hold on! - " + playername);
																																																																setTimeout(function() {
																																																																	new_message("I... I can't! AHHH! - Jonathan's hands slip off the pole. He flies right out of the ship.");
																																																																		setTimeout(function() {
																																																																			new_message("NOOO! JONATHAN!!! - " + playername);
																																																																				setTimeout(function() {
																																																																					new_message("The ships tilts downwards. All controll has been lost, the ship spirals downwards towards the mysterious plantet of Uganda X.");
																																																																						setTimeout(function() {
																																																																							document.getElementById("story").innerHTML += "<center><button onClick='thecrash()'>Continue</button></center>";
																																																																						}, 10);
																																																																					}, 10);
																																																																				}, 10);
																																																																			}, 10);
																																																																		}, 10);
																																																																	}, 10);
																																																																}, 10);
																																																															}, 10);
																																																														}, 10);
																																																													}, 10);
																																																												}, 10);
																																																											}, 10);
																																																										}, 10);
																																																									}, 10);
																																																								}, 10);
																																																							}, 10);
																																																						}, 10);
																																																					}, 10);
																																																				}, 10);
																																																			}, 10);
																																																		}, 10);
																																																	}, 10);	
																																																}, 10);
																																															}, 10);
																																														}, 10);
																																													}, 10);
																																												}, 10);
																																											}, 10);
																																										}, 10);
																																									}, 10);
																																								}, 10);
																																							}, 10);
																																						}, 10);
																																					}, 10);
			break;
		case "The Crash":
			new_message("Where am I?");
				setTimeout(function() {
					new_message("...Uganda X?");
						setTimeout(function() {
							new_message("Ahh...Where's the ship?");
								setTimeout(function() {
									new_message("Hmm, doesn't seem repairable.");
										setTimeout(function() {
											new_message("Maybe someone left some items around here that I can use.");
												setTimeout(function() {
													new_message("Search the forest or caves?");
														setTimeout(function(){
															document.getElementById("story").innerHTML += "<button onClick='forest()' id='forest'>Forest</button>";
															document.getElementById("story").innerHTML += "<button onClick='caves()' id='caves'>Caves</button>";			
														}, 10);
													}, 10);
												}, 10);
											}, 10);
										}, 10);
									}, 10);
			break;
		case "Caves":
			new_message(playername + " travels into the dark caves.");
				setTimeout(function(){
					new_message("AWW YEAH! HIDDEN TREASURE! - " + playername);
						setTimeout(function(){
							new_message("Do I take it or leave it? - " + playername);
								setTimeout(function(){
									document.getElementById("story").innerHTML += "<button onClick='treasure()' id='treasure'>Take the treasure</button";
									document.getElementById("story").innerHTML += "<button onClick='leavetreasure()' id='leavetreasure'> Leave the treasure</button";
								}, 10);
							}, 10);
						}, 10);
			break;
		case "Treasure":
			new_message("You take the treasure...");
				setTimeout(function(){
					new_message("A trap triggers a riddle for you to solve");
						setTimeout(function() {
							new_message("Imagine you are in a dark room. How do you get out?");
								setTimeout(function() {
									document.getElementById("story").innerHTML += "<button onClick='rightriddle3()'>Stop imagining</button";
									document.getElementById("story").innerHTML += "<button onClick='wrongriddle3()'>Keep running until you find a way out</button";
								}, 10);
							}, 10);
						}, 10);
			break;			
		case "Forest":
			new_message(playername + " travels into to forest and stumbles upon an old cabin.");
				setTimeout(function() {
					new_message("Will you go inside or keep walking?");
						setTimeout(function(){
							document.getElementById("story").innerHTML += "<button onClick='cabin()' id='cabin'>Go inside</button>";
							document.getElementById("story").innerHTML += "<button onClick='towersdistance()' id='towersdistance'>Keep walking</button>";
						}, 10);
					}, 10);
			break;
			
		case "cabin":
			new_message("You walk into the cabin and find a skeleton with armor");
				setTimeout(function() {
					new_message("Will you take the armor or leave it?");
						setTimeout(function() {
							document.getElementById("story").innerHTML += "<button onClick='takearmor()' id='takearmor'>Take the armor</button>";
							document.getElementById("story").innerHTML += "<button onClick='leavearmor()' id='leavearmor'>Leave the armor</button>";
						}, 10);
					}, 10);
		break;
		case "Armor":
			new_message("The skeleton awakens...");
				setTimeout(function() {
					new_message("I see you want to take my armor");
						setTimeout(function() {
							new_message("If you must take my armor then you have to solve this puzzle");
								setTimeout(function() {
									new_message("A cowboy rode into town on Friday. He stayed in town for three days and rode out on Friday. How was that possible?");
										setTimeout(function() {
											document.getElementById("story").innerHTML += "<button onClick='rightriddle2()'>The horse's name is Friday</button>";
											document.getElementById("story").innerHTML += "<button onClick='wrongriddle2()'>He used a time machine</button>";
										}, 10);
									}, 10);
								}, 10);
							}, 10);
		break;
		case "The Towers":
			break;
			}
		}
                  
