import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When('I_type_a_first_name', () => {
    cy.get('form#contact_form > input[name="first_name"]').type("Aki");
})

When('I_type_a_last_name', () => {
    cy.get('form#contact_form > input[name="last_name"]').type("Oka");
})

When('I_type_email_address', () => {
    cy.get('form#contact_form > input[name="email"]').type("aki.oka@mail.com");
})

When('I_type_a_comment', () => {
    cy.get('form#contact_form > textarea[name="message"]').type("Hello, \n World!");
})

When('I_click_on_the_submit_button', () => {
    cy.get('[type="submit"]').click();
})

Then('I_should_be_presented_with_a_successful_contact_us_submission_message', () => {
    cy.get('h1').should('have.text', 'Thank You for your Message!');
})