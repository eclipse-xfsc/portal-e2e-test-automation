Feature: Anonymous user browses the catalogue by keywords

# Testsuite to test implementation of GAIAXPORTAL-17, GAIAXPORTAL-21

    # GAIAXPORTAL-17
    Scenario Outline: User clicks '<button>' button and checks content of the search bar

        Given User is at the home page
        When User clicks '<button>' button
        Then '<expectedValue>' appears in search element
         Examples:
            | button    | expectedValue |
            | NOT       | NOT=          |
            | Provider  | Provider=     |
            | Storage   | Storage=      |
            | Service   | Service=      |
            | Compute   | Compute=      |

    # GAIAXPORTAL-17
    Scenario: User clicks all buttons and checks content of the search bar

        Given User is at the home page
        When User clicks "NOT" button
        And User clicks "Provider" button
        And User clicks "Storage" button
        And User clicks "Service" button
        And User clicks "Compute" button
        Then All filter elements appears in search element

    # GAIAXPORTAL-17
    Scenario Outline: User clicks no button and checks content of the search bar

        Given User is at the home page
        When User clicks no button
        Then '<expectedValue>' appears in search element
         Examples:
            | expectedValue |
            | nothing       |

    # GAIAXPORTAL-17
    Scenario: User searchs content and clicks "Advanced" button

        Given User is at the home page
        When User clicks "Provider" button
        And User writes something into the search bar
        And User clicks "Advanced" button 
        Then Alert window pops up

    # GAIAXPORTAL-17
    Scenario: User searchs content and presses Enter key

        Given User is at the home page
        When User clicks "Compute" button
        And User writes something into the search bar and presses ENTER
        Then Alert window pops up

    # GAIAXPORTAL-17
    Scenario: User searchs content and clicks on search symbol

        Given User is at the home page
        When User clicks "Service" button
        And User writes something into the search bar and clicks search symbol
        Then Alert window pops up

    # GAIAXPORTAL-21
    Scenario: User searchs not existing content and presses Enter key

        Given User is at the home page
        When User clicks "Compute" button
        And User writes something into the search bar that shouldnt exists and presses ENTER
        Then Message bar shows that no results could be found
