// <reference types="cypress" />

class BasePage {

    navigate(path) {
        cy.fixture("config.json").then((data) => {
            cy.visit(data.base_url + path)
        })
    }

    getPageTitle() {
        return cy.title();

    }

}
export default BasePage();