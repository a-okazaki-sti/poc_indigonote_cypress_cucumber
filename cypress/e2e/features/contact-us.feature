Feature: webdriveruniversity-contact-us-page

    Scenario: valid-contact-us-form-submission
        Given I_navigate_to_the_webdriveruniversity_homepage
        When I_click_contact_us_button
        And I_type_a_first_name
        And I_type_a_last_name
        And I_type_email_address
        And I_type_a_comment
        And I_click_on_the_submit_button
        Then I_should_be_presented_with_a_successful_contact_us_submission_message

