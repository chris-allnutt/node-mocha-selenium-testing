var	webdriver = require('selenium-webdriver');

var driver = null;
var getDriver = function () {
	if(driver) {
		return driver;
	}

	driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

	return driver;
}

module.exports = {
	browser: getDriver(),
	webdriver: webdriver
}
