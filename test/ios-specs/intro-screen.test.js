var webdriverio = require('webdriverio')
var {expect} = require('chai')

var IntroScreen = require('../pageobjects/intro-screen')
var NavBar = require('../pageobjects/navbar')

describe('App test', function () {

    this.timeout(99999999)

    it('1 Test skip intro screen to reveal homepage link', () => {
        IntroScreen.skipButton.waitForVisible()
        IntroScreen.skipButton.click()
        expect(NavBar.homepageLink.isVisible()).to.be.true
    })

    it('2 On open Game Menu, show close game menu button', () => {
        IntroScreen.skipButton.waitForVisible()
        IntroScreen.skipButton.click()

        NavBar.openGameMenu.waitForVisible()
        NavBar.openGameMenu.click()
        expect(NavBar.closeGameMenu.isVisible()).to.be.true
    })

    it('3 On close Game Menu, show open game menu button', () => {
        NavBar.closeGameMenu.waitForVisible()
        NavBar.closeGameMenu.click()
        expect(NavBar.openGameMenu.isVisible()).to.be.true
    })

})