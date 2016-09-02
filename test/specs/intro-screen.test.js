var webdriverio = require('webdriverio')
var {expect} = require('chai')

var IntroScreen = require('../pageobjects/intro-screen')
var NavBar = require('../pageobjects/navbar')

describe('App test', function () {

    this.timeout(99999999)

    before(() => {
        // something here.
    })

    it('Swipe through first five intro screens and see "Start playing" button', () => {
        //browser.pause(1000)
        for (var i = 1; i <= 5; i++) {
            IntroScreen.page(i).waitForVisible()
            IntroScreen.page(i).swipeLeft(800)
        }
        IntroScreen.buttonText.waitForVisible()
        var buttonText = IntroScreen.buttonText.getText()
        expect(buttonText.toLowerCase().trim()).to.equal('start playing')
    
    })

    it('After "Start playing" click expect Navbar to be visible', () => {
        IntroScreen.button.waitForVisible()
        IntroScreen.button.click()
        expect(NavBar.homepageLink.isVisible()).to.be.true
    })

})