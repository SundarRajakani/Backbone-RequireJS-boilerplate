require.config({
	deps: ['main'],
	paths: {
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min',
		'backbone': 'libs/backbone-min',
		'underscore': 'libs/underscore-min',
		'amplify': 'libs/amplify.min',
		'text': 'libs/text'
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'amplify': {
			deps: ['jquery'],
			exports: 'amplify'
		}
	}
});