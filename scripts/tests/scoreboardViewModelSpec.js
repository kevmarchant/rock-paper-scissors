define(['scoreboard'], function(scoreboard) {
	
	var stubEndOfGameWrapper;
	
	beforeEach(function() {
		
		stubEndOfGameWrapper = {
			endOfGameMessage: function(message) {}
		};
		
		spyOn(stubEndOfGameWrapper, 'endOfGameMessage');
		
	});

    describe('scoreboard view model', function() {

        it('to have correct initial state', function() {
        	
        	var scores = new scoreboard();
        	
        	expect(scores.playerOneScore()).toEqual(0);
        	expect(scores.draws()).toEqual(0);
        	expect(scores.playerTwoScore()).toEqual(0);
        	
        	expect(scores.digits.length).toEqual(10);
        	expect(scores.digits[0]).toEqual('zero');
        	expect(scores.digits[1]).toEqual('one');
        	expect(scores.digits[2]).toEqual('two');
        	expect(scores.digits[3]).toEqual('three');
        	expect(scores.digits[4]).toEqual('four');
        	expect(scores.digits[5]).toEqual('five');
        	expect(scores.digits[6]).toEqual('six');
        	expect(scores.digits[7]).toEqual('seven');
        	expect(scores.digits[8]).toEqual('eight');
        	expect(scores.digits[9]).toEqual('nine');
        	
        	expect(scores.getPlayerOneScore()).toEqual('zero');
        	expect(scores.getDrawScore()).toEqual('zero');
        	expect(scores.getPlayerTwoScore()).toEqual('zero');
        	
        });

        it('to record scores correctly', function() {
        	
        	var scores = new scoreboard();
        	
        	scores.playerOneWins();
        	scores.playerOneWins();
        	scores.playersDraw();
        	scores.playerTwoWins();
        	
        	expect(scores.getPlayerOneScore()).toEqual('two');
        	expect(scores.getDrawScore()).toEqual('one');
        	expect(scores.getPlayerTwoScore()).toEqual('one');
        	
        	scores.resetScores();
        	
        	expect(scores.getPlayerOneScore()).toEqual('zero');
        	expect(scores.getDrawScore()).toEqual('zero');
        	expect(scores.getPlayerTwoScore()).toEqual('zero');
        	
        });

        it('to check for end of game correctly for player one', function() {
        	
        	var scores = new scoreboard(stubEndOfGameWrapper.endOfGameMessage);
        	
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerOneScore()).toEqual('zero');
        	scores.playerOneWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerOneScore()).toEqual('one');
        	scores.playerOneWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerOneScore()).toEqual('two');
        	scores.playerOneWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerOneScore()).toEqual('three');
        	scores.playerOneWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerOneScore()).toEqual('four');
        	scores.playerOneWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerOneScore()).toEqual('five');
        	scores.playerOneWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerOneScore()).toEqual('six');
        	scores.playerOneWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerOneScore()).toEqual('seven');
        	scores.playerOneWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerOneScore()).toEqual('eight');
        	scores.playerOneWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerOneScore()).toEqual('nine');
        	scores.playerOneWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).toHaveBeenCalledWith('Player 1 wins the match!');
        	expect(scores.getPlayerOneScore()).toEqual('zero');
        	
        });

        it('to check for end of game correctly for player two', function() {
        	
        	var scores = new scoreboard(stubEndOfGameWrapper.endOfGameMessage);
        	
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerTwoScore()).toEqual('zero');
        	scores.playerTwoWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerTwoScore()).toEqual('one');
        	scores.playerTwoWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerTwoScore()).toEqual('two');
        	scores.playerTwoWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerTwoScore()).toEqual('three');
        	scores.playerTwoWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerTwoScore()).toEqual('four');
        	scores.playerTwoWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerTwoScore()).toEqual('five');
        	scores.playerTwoWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerTwoScore()).toEqual('six');
        	scores.playerTwoWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerTwoScore()).toEqual('seven');
        	scores.playerTwoWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerTwoScore()).toEqual('eight');
        	scores.playerTwoWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getPlayerTwoScore()).toEqual('nine');
        	scores.playerTwoWins();
        	expect(stubEndOfGameWrapper.endOfGameMessage).toHaveBeenCalledWith('Player 2 wins the match!');
        	expect(scores.getPlayerTwoScore()).toEqual('zero');
        	
        });

        it('to check for end of game correctly for draws', function() {
        	
        	var scores = new scoreboard(stubEndOfGameWrapper.endOfGameMessage);
        	
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getDrawScore()).toEqual('zero');
        	scores.playersDraw();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getDrawScore()).toEqual('one');
        	scores.playersDraw();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getDrawScore()).toEqual('two');
        	scores.playersDraw();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getDrawScore()).toEqual('three');
        	scores.playersDraw();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getDrawScore()).toEqual('four');
        	scores.playersDraw();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getDrawScore()).toEqual('five');
        	scores.playersDraw();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getDrawScore()).toEqual('six');
        	scores.playersDraw();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getDrawScore()).toEqual('seven');
        	scores.playersDraw();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getDrawScore()).toEqual('eight');
        	scores.playersDraw();
        	expect(stubEndOfGameWrapper.endOfGameMessage).not.toHaveBeenCalled();
        	expect(scores.getDrawScore()).toEqual('nine');
        	scores.playersDraw();
        	expect(stubEndOfGameWrapper.endOfGameMessage).toHaveBeenCalledWith('The match is declared a draw!');
        	expect(scores.getDrawScore()).toEqual('zero');
        	
        });

    });

});