Feature: webdriveruniversity - Login Page

    Background: precondition
        Given I navigate to the webdriveruniversity homepage
        When I click on the login potal botton

    Scenario Outline: Validate Valid & Invalid login credentials
        And I type a username <username>
        And I type a password <password>
        And I click on the login botton
        Then U should be presented with an alert box which contains text '<expectedAlertText>'

        Examples:
            | username  | password     | expectedAlertText  |
            | webdriver | webdriver123 | validation success |
            | webdriver | webdriver    | validation failed  |