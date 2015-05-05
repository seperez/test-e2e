module.exports = {
    beforeEach: function(browser) {
        browser
            .page.Home()
            .load(browser.globals.urls.desktop.home)
    },

    'search single word': function(browser) {
        var item = 'ipod';

        browser
            .page.Home().search(item)
            .page.SearchResults().waitForBreadcrumbs()
            .assert.containsText(
                browser.page.SearchResults().selectors.breadcrumbItem
            , item);
    },

    after: function(browser) {
        browser.end();
    }
};
