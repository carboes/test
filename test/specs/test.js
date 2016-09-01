var webdriverio = require('webdriverio')
var expect = require('chai').expect;
//var FormPage = require('../pageobjects/form.page');

describe('auth form', function () {
    this.timeout(99999999);
    var client;

    before(function(){
        client = webdriverio.remote({
            //host: 'localhsot',
            //post: 4723,
            desiredCapabilities: {
                //browserName: 'phantomjs'
                browserName: '',
                /*appiumVersion: '1.5.3',
                deviceName: 'Samsung Galaxy S4',
                platformVersion: '4.4.4',
                platformName: 'Android',
                name: 'LottoNZ SIT',
                //app: path.join(__dirname, 'mylotto-sit.apk'),
                app: '/users/cpeterken/mylotto/lotto-mob-auto/mylotto-sit.apk',
                appActivity: 'co.nz.mylotto.MainActivity'*/
            }
        });
        //console.log('x');
        return client.init();
    });

    it('should deny access with wrong creds', function () {
        ///console.log('y');
        client.flickLeft(s).then(callback);
        /*FormPage.open();
        FormPage.username.setValue('foo');
        FormPage.password.setValue('bar');
        FormPage.submit();

        expect(FormPage.flash.getText()).to.contain('Your username is invalid!');*/
    });

    /*it('should allow access with correct creds', function () {
        FormPage.open();
        FormPage.username.setValue('tomsmith');
        FormPage.password.setValue('SuperSecretPassword!');
        FormPage.submit();

        expect(FormPage.flash.getText()).to.contain('You logged into a secure area!');
    });*/
});