class dashboardPage
{
    getSearchBox()
    {
       return  cy.xpath('//input[@id="search-box"]')
    }
    getMessage()
    {
        return cy.get('p[class="text-sm text-gray-500"]')

    }
    getClearButton()
    {
        return cy.xpath('//button[text()=" Clear Messages "]')
    }
    getHeroTab()
    {
        return cy.xpath('//a[text()=" Heroes "]')
    }
    

}
export default dashboardPage;
