/// <reference types="cypress" />

describe("My First Test", () => {
    //  beforeEach(() => {
    //   cy.fixture("example").as("data");
    //  });

    it("Fixtures ", () => {
        cy.visit("https://www.facebook.com/");
        cy.url().should("contain", "cebook");

        cy.get("#email").then((input) => {
            cy.wrap(input).type("kunleseun35@gmail.com");
            cy.get("#pass").then((input) => {
                cy.wrap(input).type("johncenaHHH35$");
                cy.get('button[name="login"]').then((input) => {
                    cy.wrap(input).click();
                });
            });

            //cy.wrap(input).find('[placeholder="Password"]').type("johncenaHHH35$");
            //cy.wrap(input).find('[type="submit"]').click();

            //cy.get("#email").type(this.data.email);
            //cy.get("#pass").type(this.data.password);

            //cy.get('button[name="login"]').click();
        });
    });
});