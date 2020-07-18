Feature: REQ-UI-01
 
  Scenario Outline: The Title should be "UI Testing Site" on every site 
    Given I open the page <page>
    Then  The Title should be UI Testing Site
    Examples:
      |  page         |
      |  /home        |
      |  /form.html   |
      |  /error       |
      |  /hello.html  |