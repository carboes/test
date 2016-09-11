var webdriverio = require('webdriverio')
var {expect} = require('chai')

var IntroScreen = require('../pageobjects/intro-screen')
var NavBar = require('../pageobjects/navbar')
NavBar.GameMenu = require('../pageobjects/navbar.game-menu')

describe('Lotto mobile application test', function () {

    this.timeout(99999999)

    describe('Swipe through intro screens', function() {

        it('Swipe through first five intro screens and see "Start playing" button', () => {
            for (var i = 1; i <= 5; i++) {
                IntroScreen.page(i).waitForVisible()
                IntroScreen.page(i).swipeLeft(800)
                browser.pause(1000)
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


    describe('Base navigation bar', function() {

        before(() => {
            //Make sure intro screen is hidden.
            if (IntroScreen.skipButton.isVisible()) {
                IntroScreen.skipButton.click()
            }

            //Make sure game menu is closed
            if (!NavBar.openGameMenu.isVisible()) {
                NavBar.closeGameMenu.click()
            }
        })


        it('Check if game menu, results, scan, login buttons show for un-logged-in user', () => {
            expect(NavBar.homepageLink.isVisible()).to.be.true
            expect(NavBar.openGameMenu.isVisible()).to.be.true
            expect(NavBar.resultsButton.isVisible()).to.be.true
            expect(NavBar.scanButton.isVisible()).to.be.true
            expect(NavBar.loginButton.isVisible()).to.be.true
        })

        it('On open Game Menu, show close game menu button', () => {
            //IntroScreen.skipButton.waitForVisible()
            //IntroScreen.skipButton.click()

            NavBar.openGameMenu.waitForVisible()
            NavBar.openGameMenu.click()
            expect(NavBar.closeGameMenu.isVisible()).to.be.true
        })

        /*it('On close Game Menu, show open game menu button', () => {
            NavBar.closeGameMenu.waitForVisible()
            NavBar.closeGameMenu.click()
            expect(NavBar.openGameMenu.isVisible()).to.be.true
        })*/

    })

    describe('Game menu navigation bar', function() {

        before( () => {
            if (!NavBar.openGameMenu.isVisible()) {
                NavBar.openGameMenu.click()
            }
        })

        it('blah', () => {
            NavBar.GameMenu.lottoPowerball.isVisible()
            NavBar.GameMenu.scanTicket.isVisible()
            NavBar.GameMenu.notificationSettings.isVisible()
            NavBar.GameMenu.storeFinder.isVisible()
            NavBar.GameMenu.faqs.isVisible()
            NavBar.GameMenu.playResponsibly.isVisible()

            NavBar.GameMenu.legal.isVisible()
            NavBar.GameMenu.contactUs.isVisible()
            NavBar.GameMenu.fullsite.isVisible()
        })

        it('On close Game Menu, show open game menu button', () => {
            NavBar.closeGameMenu.waitForVisible()
            NavBar.closeGameMenu.click()
            expect(NavBar.openGameMenu.isVisible()).to.be.true
        })

    })

})