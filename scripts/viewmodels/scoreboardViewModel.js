define('scoreboard', ['ko'], function(ko) {
	
	return function scoreboardViewModel(endOfGameMessage) {
		
		this.playerOneScore = ko.observable(0);
		this.draws = ko.observable(0);
		this.playerTwoScore = ko.observable(0);
		
		this.digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		
		this.getPlayerOneScore = function() {
			
			if(this.playerOneScore() > 9) {
				return this.digits[9];
			}
			
			return this.digits[this.playerOneScore()];
			
		};
		
		this.getDrawScore = function() {
			
			if(this.draws() > 9) {
				return this.digits[9];
			}
			
			return this.digits[this.draws()];
			
		};
		
		this.getPlayerTwoScore = function() {
			
			if(this.playerTwoScore() > 9) {
				return this.digits[9];
			}
			
			return this.digits[this.playerTwoScore()];
			
		};
		
		this.playerOneWins = function() {
			
			this.playerOneScore(this.playerOneScore() + 1);
			this.checkForEndOfGame();
			
		};
		
		this.playersDraw = function() {
			
			this.draws(this.draws() + 1);
			this.checkForEndOfGame();
			
		};
		
		this.playerTwoWins = function() {
			
			this.playerTwoScore(this.playerTwoScore() + 1);
			this.checkForEndOfGame();
			
		};
		
		this.resetScores = function() {
			
			this.playerOneScore(0);
			this.draws(0);
			this.playerTwoScore(0);
			
		};
		
		this.checkForEndOfGame = function() {
			
			if(this.playerOneScore() == 10) {
				endOfGameMessage('Player 1 wins the match!');
				this.resetScores();
			}
			
			if(this.draws() == 10) {
				endOfGameMessage('The match is declared a draw!');
				this.resetScores();
			}
			
			if(this.playerTwoScore() == 10) {
				endOfGameMessage('Player 2 wins the match!');
				this.resetScores();
			}
			
		};
		
	};
	
});