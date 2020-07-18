Feature: REQ-UI-02
 
  Scenario Outline: The Company Logo should be visible on every site 
    Given I open the page <page>
    Then  The Company Logo should be visible on every site
    Examples:
      |  page         |
      |  /home        |
      |  /form.html   |
      |  /error       |
      |  /hello.html  |