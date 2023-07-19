import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "http://www.webdriveruniversity.com/"

Given('I_navigate_to_the_webdriveruniversity_homepage', () => {
    cy.visit(url);
})

When('I_click_contact_us_button', () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
})