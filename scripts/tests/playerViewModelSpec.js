define(['player'], function(player) {

    describe('player view model', function() {

        it('to behave correctly as a human player', function() {
        	
        	var testPlayer = new player('human');
        	
        	expect(testPlayer.playerType).toEqual('human');
        	expect(testPlayer.isHuman()).toEqual(true);
        	expect(testPlayer.chosenOption()).toEqual('neutral');
        	expect(testPlayer.getHandState()).toEqual('human hand neutral');
        	
        	testPlayer.chosenOption('Rock');
        	
        	expect(testPlayer.chosenOption()).toEqual('Rock');
        	expect(testPlayer.getHandState()).toEqual('human hand Rock');
        	
        	testPlayer.resetHand();
        	
        	expect(testPlayer.chosenOption()).toEqual('neutral');
        	expect(testPlayer.getHandState()).toEqual('human hand neutral');
        	
        });

        it('to behave correctly as a robot player', function() {
        	
        	var testPlayer = new player('robot');
        	
        	expect(testPlayer.playerType).toEqual('robot');
        	expect(testPlayer.isHuman()).toEqual(false);
        	expect(testPlayer.chosenOption()).toEqual('neutral');
        	expect(testPlayer.getHandState()).toEqual('robot hand neutral');
        	
        	testPlayer.chosenOption('Paper');
        	
        	expect(testPlayer.chosenOption()).toEqual('Paper');
        	expect(testPlayer.getHandState()).toEqual('robot hand Paper');
        	
        	testPlayer.resetHand();
        	
        	expect(testPlayer.chosenOption()).toEqual('neutral');
        	expect(testPlayer.getHandState()).toEqual('robot hand neutral');
        	
        });

    });

});