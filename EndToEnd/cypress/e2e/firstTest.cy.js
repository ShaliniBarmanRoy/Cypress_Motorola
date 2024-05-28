import dashboardPage from "../e2e/dashboardPage"
import heroPage from "../e2e/heroPage"

describe('Launch Application_endtoend', function() {
 let data;
  before(() =>
  {
    cy.fixture('example').then((fdata) =>
    {
data = fdata
    });
  })



  
    it('Test1 -- EndToEndTestingForHeroAddition', () => {
      const dashPage = new dashboardPage()
      const hPage = new heroPage()
      cy.visit('')
      cy.screenshot()
      dashPage.getSearchBox().type(data.nameofSH)
      // cy.xpath('//input[@id="search-box"]').type('Superman')
      cy.screenshot()
         if(dashPage.getMessage().contains(' HeroService: no heroes matching "'+data.nameofSH+'" ') )
          {
     
              cy.log('Element found: HeroService: no heroes matching');
                cy.screenshot()
                dashPage.getClearButton().click()
                // cy.xpath('//button[text()=" Clear Messages "]').click()  
                cy.screenshot()
                dashPage.getHeroTab().click()
                // cy.xpath('//a[text()=" Heroes "]').click()
                cy.screenshot()
                hPage.getHeroNameBox().type(data.nameofSH)
                cy.screenshot()
                hPage.getAddHeroButton().click()
                cy.screenshot()
                cy.wait(8000)
                // cy.xpath('//a[text()=" Superman "]').should('exist')
                 cy.xpath(`//a[text()=" ${data.nameofSH} "]`).should('exist')
                cy.screenshot()
                cy.xpath(`//a[text()=" ${data.nameofSH} "]/../..//button`).click()
                cy.screenshot()
          }
         
    })
})
    
  