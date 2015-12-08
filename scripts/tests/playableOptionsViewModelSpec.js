define(['playableOptions'], function(playableOptions) {

    describe('playable options view model', function() {

        it('has correct options data', function() {
        	
        	var options = new playableOptions();
        	
        	expect(options.getPlayableOptions().length).toEqual(3);
        	
        	expect(options.getPlayableOptions()[0].name).toEqual('Rock');
        	expect(options.getPlayableOptions()[1].name).toEqual('Paper');
        	expect(options.getPlayableOptions()[2].name).toEqual('Scissors');
        	
        	expect(options.getPlayableOptions()[0].powers.beats[0]).toEqual('Scissors');
        	expect(options.getPlayableOptions()[0].powers.draws[0]).toEqual('Rock');
        	expect(options.getPlayableOptions()[0].powers.loses[0]).toEqual('Paper');
        	
        	expect(options.getPlayableOptions()[1].powers.beats[0]).toEqual('Rock');
        	expect(options.getPlayableOptions()[1].powers.draws[0]).toEqual('Paper');
        	expect(options.getPlayableOptions()[1].powers.loses[0]).toEqual('Scissors');
        	
        	expect(options.getPlayableOptions()[2].powers.beats[0]).toEqual('Paper');
        	expect(options.getPlayableOptions()[2].powers.draws[0]).toEqual('Scissors');
        	expect(options.getPlayableOptions()[2].powers.loses[0]).toEqual('Rock');
        	
        });

        it('decides correct result', function() {
        	
        	var options = new playableOptions();
        	
        	var playerOne = {
    			getChoice: function() {
    				return 'Rock';
    			}
        	};
        	
        	var playerTwo = {
    			getChoice: function() {
    				return 'Rock';
    			}
        	};
        	
        	var decision = options.decideResult(playerOne, playerTwo);
        	expect(decision).toEqual('playersDraw');
        	
        	playerOne = {
    			getChoice: function() {
    				return 'Rock';
    			}
        	};
        	
        	playerTwo = {
    			getChoice: function() {
    				return 'Scissors';
    			}
        	};

        	decision = options.decideResult(playerOne, playerTwo);
        	expect(decision).toEqual('playerOneWins');
        	
        	playerOne = {
    			getChoice: function() {
    				return 'Paper';
    			}
        	};
        	
        	playerTwo = {
    			getChoice: function() {
    				return 'Scissors';
    			}
        	};

        	decision = options.decideResult(playerOne, playerTwo);
        	expect(decision).toEqual('playerTwoWins');
        	
        });

    });

});