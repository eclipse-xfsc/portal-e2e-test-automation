Feature: Registered user would like to sign in 

# Testsuite to test implementation of GAIAXPORTAL-72, GAIAXPORTAL-67

    # GAIAXPORTAL-72
    Scenario: Anonymous user clicks on Register now

        Given Anonymous user is at the signin page
        When Anonymous user clicks on Register now link
        Then Anonymous user is at register page

    # GAIAXPORTAL-72
    Scenario: Anonymous user clicks on FAQ & Support

        Given Anonymous user is at the signin page
        When Anonymous user clicks on FAQ & Support link
        Then Anonymous user is at help page

    # GAIAXPORTAL-72
    Scenario: TODO: Registered user chooses QR code to sign in

        Given Anonymous user is at the signin page
        When Anonymous user can see QR suggestion text
        And Anonymous user is able to scan QR code
        Then TODO: Signed in user is at the <?> page

    # GAIAXPORTAL-72
    Scenario: TODO: Registered user chooses Login Button to sign in

        Given Anonymous user is at the signin page
        When Anonymous user can see login button suggestion text
        And TODO: Anonymous user clicks on login button
        Then TODO: Signed in is at the <?> page

    # GAIAXPORTAL-67
    Scenario Outline: Anonymous user sees Sign In button on all screens of Portal UI

        Given Anonymous user is at the home page
        When Anonymous user clicks on link for another section of portal, '<element>'
        Then Anonymous user sees and clicks the Sign In button
         Examples:
            | element            |
            | Services           |
            | Data               | 
            | Provider           | 
            | Register           | 
            | Imprint            | 
            | Privacy            | 
            | Policy             | 
            | Cookie Settings    | 
            | Terms & Conditions | 
            | Contact            | 
            | Help               | 
