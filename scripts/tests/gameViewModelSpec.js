define(['game'], function(game) {

    describe('game view model', function() {

        it('has correct initial state', function() {
        	
        	var rps = new game();
        	
        	expect(rps.getEndOfGameMessage()).toEqual('');
        	
        	expect(rps.playerOne().isHuman()).toEqual(true);
        	expect(rps.playerOneChosenOption()).toEqual('');
        	expect(rps.getPlayerOneMessageClass()).toBeUndefined();
        	expect(rps.getPlayerOneMessageText()).toBeUndefined();
        	
        	expect(rps.playerTwo().isHuman()).toEqual(false);
        	expect(rps.playerTwoChosenOption()).toEqual('');
        	expect(rps.getPlayerTwoMessageClass()).toBeUndefined();
        	expect(rps.getPlayerTwoMessageText()).toBeUndefined();
        	
        	expect(rps.getPlayGameButtonText()).toEqual('Let them play!');
        	expect(rps.playing()).toEqual(false);
        	expect(rps.showResultMessages()).toEqual(false);
        	expect(rps.winner()).toEqual('');
        	
        });

        it('can change players to robot or human', function() {
        	
        	var rps = new game();
        	
        	expect(rps.playerOne().isHuman()).toEqual(true);
        	expect(rps.playerTwo().isHuman()).toEqual(false);
        	
        	rps.setPlayerOneRobot();
        	
        	expect(rps.playerOne().isHuman()).toEqual(false);
        	expect(rps.playerTwo().isHuman()).toEqual(false);
        	
        	rps.setPlayerTwoHuman();
        	
        	expect(rps.playerOne().isHuman()).toEqual(false);
        	expect(rps.playerTwo().isHuman()).toEqual(true);
        	
        });

        it('holds correct selection state', function() {
        	
        	var rps = new game();
        	
        	expect(rps.playerOneChosenOption()).toEqual('');
        	rps.setPlayerOneSelection('Paper');
        	expect(rps.playerOneChosenOption()).toEqual('Paper');
        	
        });

    });

});