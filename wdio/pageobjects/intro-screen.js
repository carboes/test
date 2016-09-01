var introScreen = Object.create(new Object(), {

    page: {
        value: function(pageNumber) {
            return browser.element('~introScreenPage'+pageNumber)
        }
    },

    button: {
        get() {
            return browser.element('~introScreenButton')
        }
    },

    buttonText: {
        get() {
            return browser.element('~introScreenButtonText')
        }
    }

});

module.exports = introScreen