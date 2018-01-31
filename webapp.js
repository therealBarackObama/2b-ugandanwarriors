// JavaScript Document
function intro() {
	confirm("By starting a new game, you will reaplce any old saves. Do you wish to proceed?");
	var playername = prompt("What is your name?");
	document.getElementById("stats_name").innerHTML = "Name: " + playername;
}