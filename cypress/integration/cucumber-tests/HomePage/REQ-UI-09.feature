Feature: REQ-UI-09
 
  Scenario: The following text should be visible on the Home page in <h1> tag: "Welcome to the Docler Holding QA Department" 
    Given I open the home page
    Then  The text should be visible in h1 tag - Welcome to the Docler Holding QA Department