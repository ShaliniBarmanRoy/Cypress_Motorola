// cypress/support/index.ts
import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CustomTestModule } from '../../src/app/testing/custom-test.module';
import 'cypress-xpath';

// Optionally, you can add the following lines to make the 'cy.xpath()' command available globally:
// Cypress.Commands.add('xpath', xpath => cy.xpath(xpath));


// Manually configure the Angular testing module
@NgModule({
  imports: [CustomTestModule],
})
class TestModuleConfig {}

// Before each test, configure the testing module
beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [TestModuleConfig],
  });
});
