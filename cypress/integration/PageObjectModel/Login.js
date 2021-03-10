/// <reference types="cypress" />

class Login {
    visit(value) {
        cy.visit(value);
        return this;
    }

    Enteremail(value) {
        const Email = cy.get('[id="Email"]');
        Email.clear();
        Email.type(value);
        return this;
    }

    Enterpassword(value) {
        const password = cy.get('[id="Password"]');
        password.clear();
        password.type(value);
        return this;
    }

    submit() {
        const button = cy.get('[type="submit"]');
        button.click();
    }
}
export default Login;