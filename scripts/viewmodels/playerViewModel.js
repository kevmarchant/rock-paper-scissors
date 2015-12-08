define('player', ['ko', 'playableOptions'], function(ko, playableOptionsViewModel) {
	
	return function playerViewModel(playerType) {
		
		this.playerType = playerType;
		this.chosenOption = ko.observable('neutral');
		this.bounce = ko.observable('');
		this.playableOptions = new playableOptionsViewModel();
		
		this.choose = function(option) {
			
			this.bounce(' bounce');
			
			setTimeout(function(viewModel) {

				if(viewModel.isHuman()) {
					
					viewModel.chosenOption(option);
					
				} else {
					
					var randomNumberBetweenZeroAndPlayableOptionsLength = Math.floor(Math.random() * (viewModel.playableOptions.getPlayableOptions().length));
					viewModel.chosenOption(viewModel.playableOptions.getPlayableOptions()[randomNumberBetweenZeroAndPlayableOptionsLength].name);
					
				}
				
			}, 1000, this);
			
		};
		
		this.getChoice = function() {
			
			return this.chosenOption();
			
		};
		
		this.getHandState = function() {
			
			return this.playerType + ' hand ' + this.chosenOption() + this.bounce();
			
		};
		
		this.resetHand = function() {
			
			this.chosenOption('neutral');
			this.bounce('');
			
		};
		
		this.isHuman = function() {
			
			return (this.playerType === 'human');
			
		};
		
	};
	
});