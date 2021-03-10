/// <reference types="cypress" />

describe("My First Test", () => {
    it("VERIFY TITLE PAGE ", () => {
        //access the url with this
        cy.visit("http://demo.automationtesting.in/Register.html");
        //verifying Url
        cy.url().should("contain", "mationtesting");
        //verification of title
        cy.title().should("eq", "Register");
        cy.get("#checkbox1")
            .check()
            .should("be.checked")
            .and("have.value", "Cricket");

        cy.get("#checkbox2")
            .check()
            .should("be.checked")
            .and("have.value", "Movies");

        cy.get("#checkbox3")
            .check()
            .should("be.checked")
            .and("have.value", "Hockey");

        //#to uncheck box

        cy.get("#checkbox1")
            .uncheck()
            .should("not.be.checked")
            .and("have.value", "Cricket");
        cy.get("#checkbox2")
            .uncheck()
            .should("not.be.checked")
            .and("have.value", "Movies");
        cy.get("#checkbox3")
            .uncheck()
            .should("not.be.checked")
            .and("have.value", "Hockey");

        //to select  multiple checkbox at same instantiate
        cy.get('[type="checkbox"]')
            .check("Cricket", "Movies", "Hockey")
            .should("be.checked");

        //Selecting DropDown
    });

    it("Selecting static dropdown ", () => {
        cy.get("#Skills").select("AutoCAD").should("have.value", "AutoCAD");
    });

    it("Selecting Multiple  dropdown ", () => {
        cy.get("#msdd").click();
        cy.get(".ui-corner-all").contains("Bulgarian").click();
        cy.get(".ui-corner-all").contains("Croatian").click();
    });
    it("Selecting Multiple  dropdown ", () => {
        cy.get('[role="combobox"]').click({ force: true });
        cy.get('input[type="search"]').type("Hong");
        cy.get('input[type="search"]').type("{enter}");
    });
});