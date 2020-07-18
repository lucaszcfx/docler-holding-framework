Feature: REQ-UI-10
 
  Scenario: The following text should be visible on the Home page in <p> tag: "This site is dedicated to perform some exercises and demonstrate automated web testing." 
    Given I open the home page
    Then  The text should be visible in p tag - This site is dedicated to perform some exercises and demonstrate automated web testing