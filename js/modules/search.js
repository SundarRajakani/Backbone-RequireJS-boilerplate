define(['backbone', 'amplify'], function(B) {

	var SearchView = B.View.extend({
		el: '#search-module',
		events: {
			'click #search': 'searchMade'
		},
		searchMade: function() {
			var val = $('#search-box').val();
			amplify.publish('search:performed', val);
			return val;
		}
	});

	return {
		View: SearchView
	};

});