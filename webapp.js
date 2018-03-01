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
	//RightRiddles
	function RightRiddle1() {
		stagename = "RightRiddle1";
		update_scene(stagename);
	}
	function RightRiddle2() {
		stagename = "RightRiddle2";
		update_scene(stagename);
	}
	//WrongRiddles
	function WrongRiddle1() {
		stagename = "WrongRiddle1";
		update_scene(stagename);
	}
	function WrongRiddle2() {
		stagename = "WrongRiddle2";
		update_scene(stagename);
	}
	//Caves
	function caves() {	
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
stagename = "TheTowers";
update_scene(stagename);
}
//runout
function runout() {
stagename = "runout";
update_scene(stagename);
}
//Continue
function goinside() {
stagename = "goinside";
update_scene(stagename);
}
//Finding back way
function backway() {
stagename = "backway";
update_scene(stagename);
}
//Going deeper
function godeeper() {
stagename = "godeeper";
update_scene(stagename);
}
//seeing door
function seesdoor() {
stagename = "seesdoor";
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
																																											new_message("*BEEP* *BEEP* *BEEP* - computer in control room");
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
					document.getElementById("story").innerHTML += "<button onClick='RightRiddle1()'>Stop imagining</button";
					document.getElementById("story").innerHTML += "<button onClick='WrongRiddle1()'>Keep running until you find a way out</button";
							}, 10);
							}, 10);
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
		
		
		case "RightRiddle1":
			new_message("Congradulations, you got the riddle right");
				setTimeout(function(){
			new_message("You may now open the chest");
				setTimeout(function(){
			new_message("You open the chest and find...");
				setTimeout(function(){
			new_message("A G36!");
				setTimeout(function(){
			new_message("You journey further into the caves just to find a dead end. So you turn around and leave the caves");
				setTimeout(function(){
			new_message("You may chose to explore the forest or continue");
				setTimeout(function(){
					document.getElementById("story").innerHTML += "<button onClick='forest()'>Go to the forest</button>";
					document.getElementById("story").innerHTML += "<button onClick='Scene2()'>Continue</button>";
						}, 10);
						}, 10);
						}, 10);
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
		case "RightRiddle2":
		new_message("You are worthy of my armor");
			setTimeout(function(){
		new_message("Take it and do good");
			setTimeout(function(){
		new_message("You put the armor on and leave the cabin");
			setTimeout(function(){
		new_message("You keep looking and see towers in the distance with ships");
			setTimeout(function(){
		document.getElementById("story").innerHTML += "<button onClick='GoTowers()'>Go to the towers</button>";
			}, 10);
			}, 10);
			}, 10);
			}, 10);
	break;
		case "The Towers":
new_message("Ooh heck an alarm is sounding");
setTimeout(function() {
new_message("what do i do");
setTimeout(function() {
document.getElementById("story").innerHTML += "<button onClick='runout()'>I guess i will run out</button>";
document.getElementById("story").innerHTML += "<button onClick='goinside()'>Ok well lets yolo and run in</button>";
}, 10);
}, 10);
break;
case "runout":
new_message("testing run out");
setTimeout(function() {
document.getElementById("story").innerHTML += "<button onClick='goinside()'>Ok imma b dumb and run inside again</button>";
document.getElementById("story").innerHTML += "<button onClick='backway()'>ok lets take the smart move and try to find a back way</button>";
}, 10);
break;

case "goinside":
new_message("ok lets run inisde and die");
setTimeout(function() {
new_message("this is very dumb");
setTimeout(function() {
new_message("ok im inside where do i go");
setTimeout(function() {
document.getElementById("story").innerHTML += "<button onClick='godeeper()'>lets continue but lets be careful</button>";
document.getElementById("story").innerHTML += "<button onClick='runout()'>i regret this imma run outside, i cant do it</button>";
}, 10);
}, 10);
}, 10);
break;

case "backway":
new_message("testing backway");
setTimeout(function() {
document.getElementById("story").innerHTML += "<button onClick='seesdoor()'>ooh a door</button>";
document.getElementById("story").innerHTML += "<button onClick='runout()'>oOh scary door</button>";
}, 10);
break;

case "godeeper":
new_message("ok lets venture deeper");
setTimeout(function() {
}, 10);
break;

			}
		}
                  
