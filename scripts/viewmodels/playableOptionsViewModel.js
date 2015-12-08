define('playableOptions', ['ko'], function(ko) {
	
	return function playableOptionsViewModel() {
		
		this.playableOptions = [
			{
				name: 'Rock',
				powers: {
	            	beats: ['Scissors'],
	            	draws: ['Rock'],
	            	loses: ['Paper']
				}
	        }, 
	        {
	        	name: 'Paper',
	        	powers: {
	            	beats: ['Rock'],
	            	draws: ['Paper'],
	            	loses: ['Scissors']
	        	}
	        }, 
	        {
	        	name: 'Scissors',
	        	powers: {
	            	beats: ['Paper'],
	            	draws: ['Scissors'],
	            	loses: ['Rock']
	        	}
	        }
		];
		
		this.getPlayableOptions = function() {
			
			return this.playableOptions;
			
		};
		
		this.decideResult = function(playerOne, playerTwo) {
			
			var playerOneChoice = playerOne.getChoice();
			var playerTwoChoice = playerTwo.getChoice();
			
			var result = 'unknown decision';
			
			for(var i = 0, ilen = this.playableOptions.length; i < ilen; i++) {
				
				var option = this.playableOptions[i];
				
				if(option.name === playerOneChoice) {
					for(var decision in option.powers) {
						if(option.powers.hasOwnProperty(decision)) {
							
							power = option.powers[decision];
							
							for(var j = 0, jlen = power.length; j < jlen; j++) {
								powerOption = power[j];
								
								if(powerOption == playerTwoChoice) {
									
									switch(decision) {
										
										case 'beats':
											result = 'playerOneWins';
											break;
										
										case 'draws':
											result = 'playersDraw';
											break;
										
										case 'loses':
											result = 'playerTwoWins';
											break;
									
									}
								}
							}
						}
					}
				}
			}
			
			return result;
		};
		
	};
	
});