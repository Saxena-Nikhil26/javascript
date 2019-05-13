var score,roundscore,activeplayer,gameplaying;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gameplaying) {
		//1.Random number
		var dice=Math.floor(Math.random()*6)+1;
		var dicea=Math.floor(Math.random()*6)+1;

		//2.Display 
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'Block';
		diceDOM.src = 'dice-' + dice + '.png';

		var diceyDOM = document.querySelector('.dicey');
		diceyDOM.style.display = 'Block';
		diceyDOM.src = 'dice-' + dicea + '.png';
		//3.Update round number if the rolled number was not 1
		if (dice !==1 && dicea !==1 )
		{
			roundscore += (dice + dicea);
			document.querySelector('#current-' + activeplayer).textContent = roundscore;
		}
		else
		{
			nextplayer();
		}	
	}	
});

document.querySelector('.btn-hold').addEventListener('click',function() {
	if (gameplaying) {
		//1.Add current score to global score
		score[activeplayer] += roundscore;

		//2.Update the UI 
			document.querySelector('#score-' + activeplayer).textContent = score[activeplayer];
		//3.Check if player won the game
		if(score[activeplayer] >= 20){
			document.querySelector('#name-' + activeplayer).textContent = 'Winner';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.dicey').style.display = 'none';
			document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
			gameplaying = false;
			//document.querySelector('.player-0-panel').classList.remove('active');
			//document.querySelector('.player-1-panel').classList.remove('active');
		}
		else{
			//Next Player
			nextplayer();
		}
	}	
});

function nextplayer(){
	activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
	roundscore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dicey').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
	score = [0,0];
	roundscore = 0;
	activeplayer = 0;
	gameplaying = true;
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dicey').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}