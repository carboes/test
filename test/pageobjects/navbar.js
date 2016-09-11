var navBar = Object.create(new Object(), {

    homepageLink: {
        get() {
            return browser.element('~Homepage')
        }
    },

    openGameMenu: {
    	get() {
            return browser.element('~Open game menu')
        }
    },

    closeGameMenu: {
    	get() {
            return browser.element('~Close game menu')
        }
    },

    /*navigateToLotto: {
    	get() {
            return browser.element('~Navigate to Lotto')
        }
    },

    navigateToScanTicket: {
    	get() {
            return browser.element('~Navigate to Scan Ticket')
        }
    },*/

    resultsButton: {
    	get() {
            return browser.element('~Results button')
        }
    },

    scanButton: {
        get() {
            return browser.element('~Scan tickets')
        }
    },

    loginButton: {
        get() {
            return browser.element('~loginOrSignupNavigationLink')
        }
    }

});

module.exports = navBar