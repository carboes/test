var webdriverio = require('webdriverio')
var {expect} = require('chai')

var IntroScreen = require('../pageobjects/intro-screen')
var NavBar = require('../pageobjects/navbar')

describe('Intro screen test', function () {

    this.timeout(99999999)

    before(() => {
        if (IntroScreen.skipButton.isVisible()) {
            IntroScreen.skipButton.click()
        }

    })

    it('Check if game menu, results, scan, login buttons show for un-logged-in user', () => {
        expect(NavBar.homepageLink.isVisible()).to.be.true
        expect(NavBar.openGameMenu.isVisible()).to.be.true
        expect(NavBar.resultsButton.isVisible()).to.be.true
        expect(NavBar.scanButton.isVisible()).to.be.true
        expect(NavBar.loginButton.isVisible()).to.be.true
    })

})