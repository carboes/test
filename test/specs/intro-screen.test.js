var webdriverio = require('webdriverio')
var {expect} = require('chai')

var IntroScreen = require('../pageobjects/intro-screen')
var NavBar = require('../pageobjects/navbar')

describe('App test', function () {

    this.timeout(99999999)

    before(() => {
        //Wait 3 seconds to accept push notifications etc
        //browser.pause(2000)
    })

    // it('Check if intro screen swiper visible', () => {
    //     /*browser.swipeLeft('~introScreenSwiper',0.5,0.5,800)
    //     browser.swipeLeft('~introScreenSwiper',0,400,800)
    //     browser.swipeLeft('~introScreenSwiper',0,400,800)
    //     browser.swipeLeft('~introScreenSwiper',0,400,800)
    //     browser.swipeLeft('~introScreenSwiper',0,400,800)*/
    //     IntroScreen.swiper.swipeLeft(400)
    //     IntroScreen.swiper.swipeLeft(400)
    //     IntroScreen.swiper.swipeLeft(400)
    //     IntroScreen.swiper.swipeLeft(400)
    //     //IntroScreen.swiper.swipeLeft(400)

    //     /*browser.touchMultiPerform([{
    //         action: 'press',
    //         options: {
    //             x: 400,
    //             y: 500,
    //             duration: 500
    //         }
    //     }, {
    //         action: 'moveTo',
    //         options: {
    //             x: 100,
    //             y: 500,
    //             duration: 500
    //         }
    //     }, {
    //         action: 'release'
    //     }])*/

    //     expect(IntroScreen.swiper.isVisible()).to.be.true
    // })

    it('Swipe through first five intro screens and see "Start playing" button', () => {
        //IntroScreen.swiper.swipeLeft(400)
        //expect(browser.isVisible('~introScreenImage1')).to.be.true

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