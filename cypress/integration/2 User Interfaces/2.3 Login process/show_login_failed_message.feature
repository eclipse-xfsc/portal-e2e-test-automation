Feature: A login failed message shall be shown for unauthorized user

# Testsuite to test implementation of GAIAXPORTAL-62

    # GAIAXPORTAL-62
    Scenario: Unauthorized user gets a specific login failed message and clicks Close button

        Given Anonymous user is at the home page
        When Anonymous user clicks Sign in button
        When Anonymous user clicks Login button
        Then Anonymous user sees Login failed message
        When Anonymous user clicks Close button
        Then Anonymous user is at the home page

    # GAIAXPORTAL-62
    Scenario: Unauthorized user resizes loginfailed page

        Given Anonymous user is at the home page
        When Anonymous user clicks Sign in button
        And Anonymous user clicks Login button
        Then Anonymous user sees Login failed message
        When Anonymous user resizes browser
        Then Shown failed message text wraps
