var navBar = Object.create(new Object(), {

    homepageLink: {
        get() {
            return browser.element('~Homepage')
        }
    }

});

module.exports = navBar