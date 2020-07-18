Feature: REQ-UI-11
 
  Scenario: On the Form page, a form should be visible with one input box and one submit button
    Given I am in the home page
    When  I click in the form button
    Then  a form should be visible 
    And   with one input box
    And   one submit button