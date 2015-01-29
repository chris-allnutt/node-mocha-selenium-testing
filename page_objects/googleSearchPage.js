var drivers = require('../page_driver');

var getSearchBox = function () {
	return drivers.browser.findElement(drivers.webdriver.By.name('q'));
};

var getSearchButton = function () {
	return drivers.browser.findElement(drivers.webdriver.By.name('btnG'));	
}

module.exports = {
	search: function (searchQuery) {
		var searchBox = getSearchBox();

		searchBox.sendKeys(searchQuery);
		getSearchButton().click();
	},
	getSearchValue: function (callback) {
		getSearchBox().getAttribute('value').then(callback);
	}
}