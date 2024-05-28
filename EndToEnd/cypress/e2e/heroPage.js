class heroPage
{
    getHeroNameBox()
    {
       return  cy.get('#hero-name')
    }
    getAddHeroButton()
    {
        return cy.xpath('//button[text()=" Add Hero "]')

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
export default heroPage;