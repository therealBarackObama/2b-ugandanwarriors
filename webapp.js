// JavaScript Document

var playername = "";
var stagename = ""

//Begins the game
function intro() {
	confirm("By starting a new game, you will reaplce any old saves. Do you wish to proceed?");
	playername = prompt("What is your name?");
	stagename = "Start";
	document.getElementById("stats_name").innerHTML = "Player name : " + playername;
	document.getElementById("stage_name").innerHTML = "Stage name : " + stagename;
	update_scene(stagename);
}

function scene2() {
	alert("Scene2");	
	stagename = "TheCrash";
	update_scene(stagename);
}

function easterboi() {
	alert("easter egggeg found");
	stagename = "cooleastereggy";
	update_scene(stagename);
}

//Adds to textbox text
function new_message(msg) {
	document.getElementById("story").innerHTML += "<p>" + msg + "</p>";
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
																																																																							document.getElementById("story").innerHTML += "<button onClick='scene2()'>Continue</button>";
																																																																								setTimeout(function() {
																																																																									document.getElementById("story").innerHTML += "<button onClick='easterboi()'>wow an easter egggg</button>";
																																																																							
																																																																						}, 30000);
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
		case "TheCrash":
			new_message("heading to the bakery them donuts getting glazed");
			setTimeout(function() {
			}, 10);
			break;
		case "cooleastereggy":
			new_message("amazon giftcard code = VEPL - R6NVYD - YAXLM yw bois");
			break;
			}
		}
                  
