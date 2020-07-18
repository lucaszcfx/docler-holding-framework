Feature: REQ-UI-08
 
  Scenario Outline: When I click on the UI Testing button, I should get navigated to the Home page
    Given I open on page <page>
    When  I click on the UI Testing button
    Then  I should get navigated to the Home page
    Examples:
      |  page         |
      |  /home        |
      |  /form.html   |
      |  /error       |
      |  /hello.html  |