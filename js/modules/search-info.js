define(['backbone', 'amplify', 'text!templates/search-info.html'], function(B, amplify, tmpl) {

	var View = B.View.extend({
		className: 'module',
		id: 'search-info',
		initialize: function() {
			this.render();

			amplify.subscribe('search:performed', this, function(searchVal) {
				console.log(searchVal + ' was searched');
				var template = _.template(tmpl);
				this.$el.html(template({searchVal: searchVal}));
			});

		},
		render: function() {
			$('body').append(this.el);
		}
	});

	return {
		View: View
	};

});