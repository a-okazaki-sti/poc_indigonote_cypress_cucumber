/// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import BasePage from "../page_objects/base_page";

const BasePage = new BasePage();

Given('I navigate to the webdriveruniversity homepage', () => {
    BasePage.navigate("");

})

When('I type a first name', () => {
    cy.get('[name="first_name"]').type("Joe");
})

When('I type a last name', () => {
    cy.get('[name="last_name"]').type("Blogs");
})

When('I enter email address', () => {
    cy.get('[name="email"]').type("Joe_blogs123@mail.com");
})

When('I type a comment', () => {
    cy.get('[name="message"]').type("Hello world!");
})

When('I click on the submit button', () => {
    cy.get('[type="submit"]').click();
})

Then('U should be presented with a successful contact us submission message', () => {
    cy.get('h1').should('have.text', 'Thank You for your Message!');
})

Then('U should be presented with a unsuccessful contact us submission message', () => {
    cy.get('body').contains('Error: Invalid email address');
})
