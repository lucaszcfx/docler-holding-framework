Feature: REQ-UI-12
 
  Scenario Outline: On the Form page, if you type <value> the input field and submit the form, you should get redirect to the Hello page, and the following text should appear: <result> 
    Given I am in the home page
    When  I click in the form button
    And   Type <value> the input field
    And   Submit the form
    Then  I should get redirect to the Hello page 
    And   The following text should appear: <result>!
    Examples:
      |  value         | result         |
      |  John          | Hello John!    |
      |  Sophia        | Hello Sophia!  |
      |  Charlie       | Hello Charlie! |
      |  Emily         | Hello Emily!   |