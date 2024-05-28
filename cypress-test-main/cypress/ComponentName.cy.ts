// cypress/integration/hero-search.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HeroSearchComponent } from 'src/app/components/hero-search.component';
import { HeroService } from 'src/app/services/hero.service';

describe('Hero Search Component', () => {
  let heroServiceStub: Partial<HeroService>;

  beforeEach(() => {
    // Stub HeroService
    heroServiceStub = {
      getHeroes(): Observable<any> {
        return of([
          { id: 1, name: 'Hero 1' },
          { id: 2, name: 'Hero 2' },
        ]);
      },
    };

    // Configure testing module
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: HeroService, useValue: heroServiceStub }],
    }).compileComponents();

    // Mount the HeroesComponent
    cy.fixture('heroes.json').then((heroes) => {
      cy.wrap(TestBed.createComponent(HeroSearchComponent)).as('fixture');
      // cy.get('@fixture').invoke('componentInstance.ngOnInit');
    });
  });

  it('should display the field name correctly', () => {
    cy.get('label').should('contain', ' Hero Search ');
    // cy.xpath('//h1[text()=" Top Heroes "]').should('exist')
  });

  // it('should display loading spinner initially', () => {
  //   cy.get('.sr-only').should('contain.text', 'Loading...');
  // });

  it('should display the background text correctly', () => {
    cy.get('input[placeholder="e.g. Superman, Captain Marvel, Batman, Spider-man"]').should('exist'); // Assuming there are 2 mock heroes
  });

  it('should enter text correctly', () => {
    cy.get('#search-box').type('Shalini'); // Assuming there are 2 mock heroes
  });

});
