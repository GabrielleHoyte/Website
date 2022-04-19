var botScore=0,
	playerScore=0;
document.getElementById("charmander").onclick=playerThrowsCharmander;
document.getElementById("bulbasaur").onclick=playerThrowsBulbasaur;
document.getElementById("squirtle").onclick=playerThrowsSquirtle;

function playerThrowsCharmander(){
	var botsPokemon=getRandomPokemon();
	checkWhoWon(botsPokemon,"charmander");

}
function playerThrowsBulbasaur(){
	var botsPokemon=getRandomPokemon();
	checkWhoWon(botsPokemon,"bulbasaur");

}
function playerThrowsSquirtle(){
	var botsPokemon=getRandomPokemon();
	checkWhoWon(botsPokemon,"squirtle");

}
function getRandomPokemon(){
	var randomNumber=Math.random();
	var botsPokemon="charmander";
	if(randomNumber<.33){
		botsPokemon="bulbasaur";
	}
	else if(randomNumber<.6666){
		botsPokemon="squirtle";
	}
	return botsPokemon;
}
function checkWhoWon(botsPokemon,playersPokemon){
	if(botsPokemon==playersPokemon){
		displayCompleteMessage("There was tie");
		document.getElementById("image").innerHTML = ""
			var img = document.createElement("img");
    	img.src = "images/tie.png";
    	var src = document.getElementById("image");
			src.appendChild(img);	
	}
	else if(
		(botsPokemon=="bulbasaur" && playersPokemon=="squirtle") ||
		(botsPokemon=="squirtle" && playersPokemon=="charmander") ||
		(botsPokemon=="charmander" && playersPokemon=="bulbasaur")
		){
		increaseBotScore();
	}
	else{
		(botsPokemon=="bulbasaur" && playersPokemon=="charmander") ||
		(botsPokemon=="squirtle" && playersPokemon=="bulbasaur") ||
		(botsPokemon=="charmander" && playersPokemon=="squirtle")
		
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Team Rocket wins!");
	document.getElementById("image").innerHTML = ""
		var img = document.createElement("img");
    img.src = "images/lost.png";
    var src = document.getElementById("image");
		src.appendChild(img);
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("You win!");
	document.getElementById("image").innerHTML = ""
		var img = document.createElement("img");
    img.src = "images/won.png";
    var src = document.getElementById("image");
		src.appendChild(img);
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}