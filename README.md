create directory & go into it

npm install selenium-webdriver

Download the chrome web driver and place it in the same directory, or somewhere in your path
http://chromedriver.storage.googleapis.com/index.html 
	(download the proper one for your operating system, others availabe for other webbrowsers)

npm install mocha

run with nyancat: node_modules/mocha/bin/mocha -R nyan test-google-search.js

run without nyancat: node_modules/mocha/bin/mocha test-google-search.js
