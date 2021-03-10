/// <reference types="cypress" />

describe("My First Test", () => {
    it("Login test ", () => {
        cy.login(
            "https://www.facebook.com/",
            "kunleseun35@gmail.com",
            "johncenaHHH35$"
        );
        cy.title().should("eq", "Facebook");
    });
});