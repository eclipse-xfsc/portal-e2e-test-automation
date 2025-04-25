Feature: Registered user is signed in successfully 

# Testsuite to test implementation of GAIAXPORTAL-61, GAIAXPORTAL-79

    # GAIAXPORTAL-61
    Scenario: Registred user chooses Login Button to sign in

        Given Registred user is at the home page
        When Registred user goes on sign in page
        And Registred user clicks on Login button
        Then TODO Registred user sees an icon or name
        And Registred user sees Sign out button
        And Registred user cant see Sign in button anymore

    # GAIAXPORTAL-61
    Scenario: Registred user chooses Logout Button after successful login

        Given Registred user is at the home page
        When Registred user goes on sign in page
        And Registred user clicks on Login button
        And Registred user sees Sign out button
        And Registred user clicks on Sign out button
        Then Registred user is at the home page

    # GAIAXPORTAL-61, GAIAXPORTAL-79
    Scenario: TODO Registred user sees name or icon after successful login

        Given Registred user is at the home page
        When Registred user goes on sign in page
        And Registred user clicks on Login button
        Then TODO Registred user sees an icon or name

    # GAIAXPORTAL-61
    Scenario: TODO Registred user role is displayed for mouseover after successful login

        Given Registred user is at the home page
        When Registred user goes on sign in page
        And Registred user clicks on Login button
        Then TODO Registred user role is displayed for mouseover
