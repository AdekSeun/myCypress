/// <reference types="cypress" />

describe("Hooka in cypress", () => {
    before(() => {
        cy.log("this is ********setup block***********");
        // runs once before all tests in the block
    });
    after(() => {
        cy.log("this is ********Tear Down ***********");
        // runs once after all tests in the block
    });

    beforeEach(() => {
        cy.log("this is ********Loging test **********");
        // runs before each test in the block
    });

    afterEach(() => {
        cy.log("this is ********after **********");
        // runs after each test in the block
    });

    it("search  ", () => {
        //access the url with this
        cy.log("**********This is my *************");

        // cy.get("#small-searchterms").type("Apple mach");
        //cy.get('[type="submit"]').click();
    });

    it("advance search  ", () => {
        //access the url with this
        cy.log("*****my*****advance serach  *************");

        // cy.get("#small-searchterms").type("Apple mach");
        //cy.get('[type="submit"]').click();
    });

    it("Lisitning prodcust ", () => {
        //access the url with this
        cy.log("**********This is lisitning products *************");

        // cy.get("#small-searchterms").type("Apple mach");
        //cy.get('[type="submit"]').click();
    });
});