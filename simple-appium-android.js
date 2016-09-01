console.log(process.env);

var wd = require('wd'),
    desiredCaps = {
        browserName: '',
        appiumVersion: '1.4.16',
        deviceName: 'Samsung Galaxy S4 Emulator',
        platformVersion: '4.4',
        platformName: 'Android',
        name: 'Sample Test',
        app: 'sauce-storage:mylotto-sit.apk'
    },
    driver = wd.remote("ondemand.saucelabs.com", 80, process.env.npm_package_config_username, process.env.npm_package_config_password);
 
driver.init(desiredCaps, function(error) {
    if (error) {
        throw new Error('Session did not start properly. Please make sure you sauce credentials are correct');
    }
    driver.quit();
});