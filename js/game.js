var board = document.getElementsByClassName('box');
var playsMade = 0
var cellStatus = [];
var occupied = [];
var setPic;
var playerTurn = 0;
var winCon = [
	[0, 1, 2], 
	[3, 4, 5], 
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
	];

document.addEventListener("DOMContentLoaded", function(){
	console.log("dom content loaded");
	startGame();
	for(var i = 0; i < 9; i++){
		cellStatus[i] = false
	}

	
});

function startGame(){
	console.log("startGame runs")
	document.getElementById('announcerbooth').innerHTML = "Spiderman goes first!"
	document.getElementById('reminder').innerHTML = "";
	for(var i = 0; i < occupied.length; i++){
		var restart = document.getElementById(i)
		restart.innerHTML= "";
		cellStatus[i] = false;
		console.log('ugh');
	}
	occupied = []

}


function selection(tabNum){
	console.log(playerTurn)
	setPic = document.getElementById(tabNum);

	if(cellStatus[tabNum] === false){
		if(playerTurn % 2 == 0){
			console.log("player 1");
			setPic.innerHTML = "<img src='./img/spiderman_face.jpg' width='75' height='auto'>"
			occupied[tabNum] = 'spidey'
			document.getElementById('announcerbooth').innerHTML = "Playing Now: Venom!";
			document.getElementById('reminder').innerHTML = "I can't believe they're still going!";
			

		} else {
			console.log('player 2')
			setPic.innerHTML = "<img src='./img/venom_face.jpg' width='75' height='auto'>"
			occupied[tabNum] = 'venom'
			document.getElementById('announcerbooth').innerHTML = "Playing Now: Spiderman!";
			document.getElementById('reminder').innerHTML = "I can't believe they're still going!";
			
		}
	} else {
		console.log('OCCUPIED!')
		document.getElementById('announcerbooth').innerHTML = "You can't do that!";
		playsMade--;
		playerTurn--;
	}
	playerTurn++;
	cellStatus[tabNum] = true;
	playsMade++;
	checkWin();

		
}

function checkWin(hero){
	console.log (occupied)
	for(var x = 0; x < winCon.length; x++){
		if(occupied[winCon[x][0]] == 'spidey' && occupied[winCon[x][1]] == 'spidey' && occupied[winCon[x][2]] == 'spidey'){
			document.getElementById('announcerbooth').innerHTML = "Spiderman WINS!";
			document.getElementById('reminder').innerHTML = "";
			endGame();
		} else if (occupied[winCon[x][0]] == 'venom' && occupied[winCon[x][1]] == 'venom' && occupied[winCon[x][2]] == 'venom'){
			document.getElementById('announcerbooth').innerHTML = "Venom WINS!";
			document.getElementById('reminder').innerHTML = "";
			endGame();
		 } else if(playsMade >= 9){
			console.log("It's a tie!")
			document.getElementById('announcerbooth').innerHTML = "It's a draw!";
			document.getElementById('reminder').innerHTML = "How so very anticlimatic!";
			}
		
	
	}
}

function endGame(){
	console.log("Game Over!")
	for(var i = 0; i < board.length; i++){
		board[i].removeAttribute('onclick');
	}
}

function reset(){
	playsMade = 0;
	playerTurn = 0;
	for(var i = 0; i < board.length; i++){
		board[i].setAttribute('onclick', 'selection(' + i + ')');
	}
	startGame();
}











