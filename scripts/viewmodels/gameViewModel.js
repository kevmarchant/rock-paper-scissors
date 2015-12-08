define('game', ['ko', 'playableOptions', 'scoreboard', 'player'], function(ko, playableOptions, scoreboard, player) {
	
	return function gameViewModel() {

		this.getEndOfGameMessage = ko.observable('');
		this.scores = new scoreboard(this.getEndOfGameMessage);
		this.playableOptions = new playableOptions();
		this.playerOne = ko.observable(new player('human'));
		this.playerTwo = ko.observable(new player('robot'));
		this.playerOneChosenOption = ko.observable('');
		this.playerTwoChosenOption = ko.observable('');
		this.playing = ko.observable(false);
		this.showResultMessages = ko.observable(false);
		this.winner = ko.observable('');
		
		this.setPlayerOneHuman = function() {
			
			this.scores.resetScores();
			this.playerOne(new player('human'));
			
		};
		
		this.setPlayerOneRobot = function() {
			
			this.scores.resetScores();
			this.playerOne(new player('robot'));
			
		};
		
		this.setPlayerTwoHuman = function() {
			
			this.scores.resetScores();
			this.playerTwo(new player('human'));
			
		};
		
		this.setPlayerTwoRobot = function() {
			
			this.scores.resetScores();
			this.playerTwo(new player('robot'));
			
		};
		
		this.setPlayerOneSelection = function(option) {
			
			if(this.playing()) return;
			this.playerOneChosenOption(option);
			this.startHumanGame();
			
		};
		
		this.setPlayerTwoSelection = function(option) {
			
			if(this.playing()) return;
			this.playerTwoChosenOption(option);
			this.startHumanGame();
			
		};
		
		this.startHumanGame = function() {
			
			if(
				(this.playerOneChosenOption() !== '' || !this.playerOne().isHuman()) &&
				(this.playerTwoChosenOption() !== '' || !this.playerTwo().isHuman())
			) {
				this.playGame();
			}
			
		};
		
		this.getPlayerOneMessageClass = function() {
			
			var visible = (this.showResultMessages()) ? 'visible ' : '';
			
			switch(this.winner()) {
			
				case 'playerOneWins':
					return visible + 'win';
			
				case 'playerTwoWins':
					return visible + 'lose';
			
				case 'playersDraw':
					return visible + 'draw';
			
			}
			
		};
		
		this.getPlayerTwoMessageClass = function() {
			
			var visible = (this.showResultMessages()) ? 'visible ' : '';
			
			switch(this.winner()) {
			
				case 'playerTwoWins':
					return visible + 'win';
			
				case 'playerOneWins':
					return visible + 'lose';
			
				case 'playersDraw':
					return visible + 'draw';
			
			}
			
		};
		
		this.getPlayerOneMessageText = function() {
			
			switch(this.winner()) {
			
				case 'playerOneWins':
					return 'Player 1 wins!';
			
				case 'playerTwoWins':
					return 'Player 1 loses';
			
				case 'playersDraw':
					return "It's a draw!";
			
			}
			
		};
		
		this.getPlayerTwoMessageText = function() {
			
			switch(this.winner()) {
			
				case 'playerTwoWins':
					return 'Player 2 wins!';
			
				case 'playerOneWins':
					return 'Player 2 loses';
			
				case 'playersDraw':
					return "It's a draw!";
			
			}
			
		};
		
		this.getPlayGameButtonText = function() {
			
			return (this.playing()) ? 'Playing...' : 'Let them play!';
			
		};
		
		this.playGame = function() {
			
			if(this.playing()) return;
			
			this.playing(true);
			
			if(this.playerOne().isHuman()) {
				this.playerOne().choose(this.playerOneChosenOption());
			} else {
				this.playerOne().choose();
			}
			
			if(this.playerTwo().isHuman()) {
				this.playerTwo().choose(this.playerTwoChosenOption());
			} else {
				this.playerTwo().choose();
			}
			
			setTimeout(function(viewModel) {

				var result = viewModel.playableOptions.decideResult(viewModel.playerOne(), viewModel.playerTwo());
				
				viewModel.scores[result]();
				viewModel.winner(result);
				viewModel.showResultMessages(true);
				
				setTimeout(function(viewModel) {
					
					viewModel.playerOne().resetHand();
					viewModel.playerTwo().resetHand();
					viewModel.playerOneChosenOption('');
					viewModel.playerTwoChosenOption('');
					viewModel.playing(false);
					viewModel.showResultMessages(false);
					viewModel.winner('');
					
				}, 2000, viewModel);
				
			}, 1300, this);
			
		};
		
		this.dismissEndOfGameMessage = function() {
			
			this.getEndOfGameMessage('');
			
		};
		
	};
	
});