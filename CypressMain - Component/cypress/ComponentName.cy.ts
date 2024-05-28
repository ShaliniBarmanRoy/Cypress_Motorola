 
import { HeroSearchComponent } from '../../CypressMain - Copy/src/app/components/hero-search.component'; '../../src/app/components/hero-search.component.ts'; // Import your component
import { mount } from 'cypress/angular'; // Import for mounting React components


// Describe block for DashboardComponent
describe('hero-searchComponent', () => {
  // beforeEach block to visit the page before each test
 

  // Test to check if the header displays "Top Heroes"
  it('displays the header with "Top Heroes"', () => {
    mount(HeroSearchComponent );
    cy.get('input').contains('search-box');
  });
});