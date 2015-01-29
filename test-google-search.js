// run with nyancat: node_modules/mocha/bin/mocha -R nyan test-google-search.js 
// run without nyancat: node_modules/mocha/bin/mocha test-google-search.js 

var assert = require('assert');
var	test = require('selenium-webdriver/testing');

test.describe('Google Search Page', function() {
	this.timeout(10000);

	var drivers = null;
	var navigation = require('./navigation');
	var googleSearchPage = require('./page_objects/googleSearchPage');

	test.before(function() {
		// this also initializes the browser
		drivers = require('./page_driver');
	});

	test.beforeEach(function () {
		navigation.goTo('http://www.google.com');
	});

	test.it('Page Title is Google', function () {

		// ensure navigation
		drivers.browser.getTitle().then(function (value) {
			assert.equal(value, 'Google');
		});
	});

	test.it('User can enter a search term', function() {
		var searchBox = googleSearchPage.search('SURGE Forward');

		googleSearchPage.getSearchValue(function (value) {
			assert.equal(value, 'SURGE Forward');
		});
	});

	test.after(function () {
		drivers.browser.quit();
	});
});