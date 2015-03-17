var MeliSearch = function(browser) {

    this.reset = function() {
        browser.url('http://www.mercadolibre.com.ar').waitForElementVisible('body', 5000);
        return this;
    };

    this.search = function(term) {
        browser
            .setValue('#query', term)
            .click('.ml-search-btn');
        return this;
    };

    this.resultsShouldContain = function(text) {
        browser
            .waitForElementVisible('.breadcrumb h1', 2000)
            .assert.containsText('.breadcrumb h1', text);
        return this;
    };
};

module.exports = {

    before: function(browser) {
        this.meliSearch = new MeliSearch(browser);
    },

    beforeEach: function(browser) {
        this.meliSearch.reset();
    },

    'search single word': function(browser) {
        this.meliSearch.search('ipod')
            .resultsShouldContain('ipod');
    },

    after: function(browser) {
        browser.end();
    }
};
