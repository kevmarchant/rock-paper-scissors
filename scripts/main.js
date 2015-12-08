requirejs.config({
	
	paths: {
		'ko': 'knockout.min'
	}
	
});

require(['ko', 'game'], function(ko, game) {
	
	var rockPaperScissors = new game();
	ko.applyBindings(rockPaperScissors);
	
});