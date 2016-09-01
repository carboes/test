var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: '',
        appiumVersion: '1.5.3',
        deviceName: 'Samsung Galaxy S4',
        platformVersion: '4.4',
        platformName: 'Android',
        name: 'LottoNZ SIT',
        app: require('path').join(__dirname, '../apps/mylotto-sit.apk'),
        appActivity: 'co.nz.mylotto.MainActivity'
    },
    host: 'localhost',
    port: 4723
};

var client = webdriverio.remote(options);
client.init().swipeLeft().end()


/*client
    .init()
    .url('https://duckduckgo.com/')
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
        // outputs:
        // "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
    .end();*/