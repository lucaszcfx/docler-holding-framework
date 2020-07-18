Feature: REQ-UI-07
 
  Scenario: Getting the true status code - When I click on the Error button, I should get a 404 HTTP response code 
    Given I open the home page
    When  I click on the Error button
    Then  I should get a 404 HTTP response code


  Scenario: REQ-UI-07 - Getting the HTML error - When I click on the Error button, I should get a 404 HTTP response code 
    Given I open the home page
    When  I click on the Error button
    Then  I should get a 404 HTML error