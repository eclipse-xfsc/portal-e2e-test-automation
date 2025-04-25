Feature: A registered and signed in user has access to his details and login history

# Testsuite to test implementation of GAIAXPORTAL-49, GAIAXPORTAL-50

    # GAIAXPORTAL-49
    Scenario: TODO Logged in user has access to My Account page

        Given Registered user is at the home page
        When Registered user signs in
        And TODO Logged in user clicks on his avatar in the header
        And TODO Logged in user clicks on My Account
        Then Logged in user is at the My Account page
        And Logged in user sees Details and Login History tabs 

    # GAIAXPORTAL-49
    Scenario: Anonymous user has no access to My Account page

        Given Anonymous user is at the home page
        When Anonymous user goes on My Account via link
        Then Anonymous user has no access to My Account page 

    # GAIAXPORTAL-49
    Scenario: TODO Logged in user has access to his account details

        Given Registered user is at the home page
        When Registered user signs in
        And TODO Logged in user clicks on his avatar in the header
        And TODO Logged in user clicks on My Account
        Then Logged in user is directly on his Details tab
        And TODO Logged in user sees his email addr, name and attributes
                        
    # GAIAXPORTAL-50
    Scenario: TODO Registered user has access to his login history

        Given Registered user is at the home page
        When Registered user signs in
        And TODO Logged in user clicks on his avatar in the header
        And TODO Logged in user clicks on My Account
        When Logged in user clicks on Login History tab
        Then Logged in user sees login date and time
