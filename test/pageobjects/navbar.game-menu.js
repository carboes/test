var navBarGameMenu = Object.create(new Object(), {

    lottoPowerball: {
        get() {
            return browser.element('~Powerball Menu Item')
        }
    },

    scanTicket: {
    	get() {
            return browser.element('~Navigate to Scan Ticket')
        }
    },

    notificationSettings: {
    	get() {
            return browser.element('~Navigate to Notification Settings')
        }
    },

    storeFinder: {
    	get() {
            return browser.element('~Navigate to Store finder')
        }
    },

    faqs: {
    	get() {
            return browser.element('~Navigate to FAQs')
        }
    },

    playResponsibly: {
    	get() {
            return browser.element('~Navigate to Play responsibly')
        }
    },

    legal: {
        get() {
            return browser.element('~Navigate to Legal')
        }
    },

    contactUs: {
        get() {
            return browser.element('~Navigate to Contact us')
        }
    },

    fullsite: {
        get() {
            return browser.element('~Navigate to Full site')
        }
    }

});

module.exports = navBarGameMenu