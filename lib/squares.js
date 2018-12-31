(function() {
	window.squares = {
		randomFromString: function(str) {
			Math.seedrandom(str);
			var rand = Math.random();
			Math.seedrandom(); // don't leave a non-random seed in the generator
			return rand;
		},
		assignRandomColors: function(squares, sat, lum) {		
			for (var i = 0; i < squares.length; i++) {
				var square = $(squares[i]);
				if ((square.attr('style') || '').indexOf('background-color:') >= 0) continue;
				var color = 'hsl(' + (squares.randomFromString(square.text() + '-hue') * 360) +', ' + sat + '%, ' + lum + '%)';
				square.css('background-color', color);
			}
		},
		assignOrderedColors: function(squares, sat, lum) {
			squares.each(function(i, e) {
				var square = $(e);
				var color = 'hsl(' + (360 * i / squares.length) + ', ' + sat + '%, ' + lum + '%)';
				square.css('background-color', color);
			});
		},
		applyCSS: function() {
			$('head').append('\
			<style>\
				.square {\
					display: inline-block;\
					border: 1px solid gray;\
					background-color: #468;\
					margin: 20px;\
					padding: 40px;\
					color: white;\
					font-weight: bold;\
					text-decoration: none;\
					cursor: pointer;\
				}\
			</style>');
		}
	};
})();