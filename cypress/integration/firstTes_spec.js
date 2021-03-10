/// <reference types="cypress" />

describe("My First Test", () => {
    it("VERIFY TITLE PAGE ", () => {
        //access the url with this
        cy.visit("http://demo.nopcommerce.com/");
        //verifying Url
        cy.url().should("contain", "commerce");
        //verification of title
        cy.title().should("eq", "nopCommerce demo store");

        cy.get('[class="search-box store-search-box"]').within(() => {
            cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch");
            cy.get('[type="submit"]').click();
        });

        cy.get('.product-box-add-to-cart-button[value="Add to cart"]').click();
        cy.get('#product_enteredQuantity_4[type="text"]').clear().type("2");
        cy.get('#add-to-cart-button-4[value="Add to cart"]').click();
        cy.wait(10000);
        cy.get("#topcartlink").within(() => {
            cy.get('[class="cart-label"]').click();
            cy.wait(10000);
        });

        // cy.get("#small-searchterms").type("Apple mach");
        //cy.get('[type="submit"]').click();
    });
});