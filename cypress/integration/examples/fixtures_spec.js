/// <reference types="cypress" />

describe("My First Test", () => {
    it("Fixtures ", () => {
        cy.visit("https://www.facebook.com/");

        cy.url().should("contain", "cebook");

        cy.fixture("example").then((data) => {
            cy.get("#email").type(data.email);
            cy.get("#pass").type(data.password);
        });

        cy.get('button[name="login"]').click();
    });
});