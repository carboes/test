var webdriverio = require('webdriverio')
var {expect} = require('chai')

var IntroScreen = require('../pageobjects/intro-screen')
var NavBar = require('../pageobjects/navbar')

describe('App test', function () {

    this.timeout(99999999)

    before(() => {
        //
    })

    it('Swipe through first five intro screens and see "Start playing" button', () => {
        browser.pause(1000)
        for (var i = 1; i <= 5; i++) {
            IntroScreen.page(i).swipeLeft(400)
            browser.pause(100)
        }
        var buttonText = IntroScreen.buttonText.getText().toLowerCase().trim()
        expect(buttonText).to.equal('start playing')
    
    })

    it('After "Start playing" click expect Navbar to be visible', () => {
        IntroScreen.button.click()
        browser.pause(200)
        expect(NavBar.homepageLink.isVisible()).to.be.true
    })

})