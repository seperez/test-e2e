module.exports = function(browser){
    var selectors = {
        'breadcrumbItem': '.breadcrumb h1'
    };

    this.selectors = selectors;

    this.waitForBreadcrumbs = function(text) {
        browser
            .waitForElementVisible(selectors.breadcrumbItem, 4000)
        return browser;
    };
}