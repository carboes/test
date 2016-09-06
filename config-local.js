var path = require('path')

exports.ios = {
    browserName: '',
    appiumVersion: '1.5.3',
    deviceName: 'iPhone 6',
    platformVersion: '9.3',
    platformName: 'iOS',
    name: 'LottoNZ SIT',
    app: path.join(__dirname, 'apps/LottoNZ-SIT-ios.zip'),
    autoAcceptAlerts: true
};

exports.android = {
    browserName: '',
    appiumVersion: '1.5.3',
    deviceName: 'Samsung Galaxy S4',
    platformVersion: '4.4.4',
    platformName: 'Android',
    name: 'LottoNZ SIT',
    app: path.join(__dirname, 'apps/mylotto-sit.apk'),
    appActivity: 'co.nz.mylotto.MainActivity'
}