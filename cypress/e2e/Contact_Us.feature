Feature: webriverUniversity - Contact Us Page

    Background: Precondition
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter email address
        And I type a comment
        And I click on the submit button
        Then U should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then U should be presented with a unsuccessful contact us submission message

    Scenario Outline: Valid Contact Us Form Submission - Using specific data
