var webdriverio = require('webdriverio'),
    client = webdriverio.remote({
        desiredCapabilities: {
            browserName: '',
            appiumVersion: '1.5.3',
            deviceName: 'Samsung Galaxy S4',
            platformVersion: '4.4.4',
            platformName: 'Android',
            name: 'LottoNZ SIT',
            //app: path.join(__dirname, 'mylotto-sit.apk'),
            app: '/users/cpeterken/mylotto/lotto-mob-auto/mylotto-sit.apk',
            appActivity: 'co.nz.mylotto.MainActivity'
        },
        host: 'localhost',
        port: 4723,
    }).init();

client
//    .sleep(2000)
    .flickLeft()
    .end();