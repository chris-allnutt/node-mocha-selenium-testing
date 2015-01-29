var browser = require('./page_driver').browser;

module.exports = {
	goTo: function (targetUrl) {
		browser.get(targetUrl);
	}
}