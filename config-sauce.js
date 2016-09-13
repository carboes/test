var path = require('path')

exports = {
    ios: {
        browserName: '',
        appiumVersion: '1.5.3',
        deviceName: 'iPhone 6',
        platformVersion: '9.3',
        platformName: 'iOS',
        name: 'LottoNZ SIT',
        app: 'sauce-storage:LottoNZ-SIT-ios.zip',
        autoAcceptAlerts: true
    },
    android: {
        browserName: '',
        appiumVersion: '1.5.3',
        deviceName: 'Samsung Galaxy S4',
        platformVersion: '4.4.4',
        platformName: 'Android',
        name: 'LottoNZ SIT',
        app: 'sauce-storage:LottoNZ-SIT-android.zip',
        appActivity: 'co.nz.mylotto.MainActivity'
    }
}