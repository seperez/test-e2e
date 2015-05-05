module.exports = function(browser){
    var selectors = {
        'appContainer': 'body',
        'searchInput': '#query',
        'searchButton': '.ml-search-btn'
    };

    this.selectors = selectors;

    this.load = function(url) {
        browser
            .url(url)
            .waitForElementVisible(selectors.appContainer, 5000);

        return browser;
    };

    this.search = function(item) {
        browser
            .setValue(selectors.searchInput, item)
            .click(selectors.searchButton);
        
        return browser;
    };
}