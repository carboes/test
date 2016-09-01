var webdriverio = require('webdriverio')
var {expect} = require('chai')

describe('test', function () {

    this.timeout(99999999)

    //console.log(client)
    //var client

    before(() => {
        /*client = webdriverio.remote({
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
                appActivity: 'co.nz.mylotto.MainActivity'
            }
        })*/
        //client = client.init()

        //console.log(browser)
        //return client
    })

    it('should deny access with wrong creds', () => {
        ///console.log('y');
        //console.log(this.client)

        console.log(browser);
        console.log(browser.flickLeft);

        browser.flickLeft(s).then(callback)
        /*FormPage.open();
        FormPage.username.setValue('foo');
        FormPage.password.setValue('bar');
        FormPage.submit();

        expect(FormPage.flash.getText()).to.contain('Your username is invalid!');*/
    })

    /*it('should allow access with correct creds', function () {
        FormPage.open();
        FormPage.username.setValue('tomsmith');
        FormPage.password.setValue('SuperSecretPassword!');
        FormPage.submit();

        expect(FormPage.flash.getText()).to.contain('You logged into a secure area!');
    });*/
})