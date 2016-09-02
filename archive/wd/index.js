"use strict";

var wdVanilla = require("wd");
var WebDriverAndroid = require('wd-android');
var wd = new WebDriverAndroid(wdVanilla);
var wd;

var path = require('path');

//curl -u venvarikuppala:33c1fbce-0e3c-4c16-a502-f0f07a331483 -X POST -H "Content-Type: application/octet-stream" https://saucelabs.com/rest/v1/storage/venvarikuppala/mylotto-sit.apk?overwrite=true --data-binary @./mylotto-sit.apk --verbose

describe("My Lotto Android tests", function () {

	this.timeout(300000);
	var driver;
	//var allPassed = true;

	before(function () {
		var desired;

		if (!process.env.npm_package_config_sauce) {
			driver = wd.promiseChainRemote({
				host: 'localhost',
				port: 4723
			});

			var desired = {
				browserName: '',
				appiumVersion: '1.5.3',
				deviceName: 'Samsung Galaxy S4',
				platformVersion: '4.4.4',
				platformName: 'Android',
				name: 'LottoNZ SIT',
				app: path.join(__dirname, '../apps/mylotto-sit.apk'),
				appActivity: 'co.nz.mylotto.MainActivity'
			};
		}
		else {
			driver = wd.promiseChainRemote({
				host: "ondemand.saucelabs.com",
				port: 80,
				username: process.env.npm_package_config_username,
				password: process.env.npm_package_config_password
			});

			desired = {
				browserName: '',
			    appiumVersion: '1.5.3',
			    deviceName: 'Samsung Galaxy S4',
			    platformVersion: '4.4',
			    platformName: 'Android',
			    name: 'LottoNZ SIT',
			    app: 'sauce-storage:mylotto-sit.apk',
			    appActivity: 'co.nz.mylotto.MainActivity'
			}
		}

		console.log(process.env);

		return driver.init(desired).setImplicitWaitTimeout(5000);
	
	});

	after(function () {
		return driver.quit()
			/*.finally(function () {
				if (process.env.npm_package_config_sauce) {
	        		return driver.sauceJobStatus(allPassed);
	        	}
	    	});*/
	});

	/*afterEach(function () {
		allPassed = allPassed && this.currentTest.state === 'passed';
	});*/

	it("should swipe through first screens and click 'Start playing'", function () {

		var swipeAndWait = function(driver) {
			return driver.swipe({
				startX: 0.9,
				startY: 0.5,
				endX: 0.1,
				endY: 0.5,
				duration: 400
			})
			.sleep(500);
		}

		driver = driver.sleep(2000);
		driver = swipeAndWait(driver);
		driver = swipeAndWait(driver);
		driver = swipeAndWait(driver);
		driver = swipeAndWait(driver);
		driver = swipeAndWait(driver);
		driver = driver.elementByAccessibilityId('introScreenButton');
		driver.shouldBeButtonElement();
		driver = driver.click().sleep(2000);

		return driver;
	});

});
