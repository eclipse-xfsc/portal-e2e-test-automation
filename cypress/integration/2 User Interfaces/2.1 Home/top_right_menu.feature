Feature: Anonymous user navigates through top right menu

# Testsuite to test implementation of GAIAXPORTAL-15

    Scenario Outline: User clicks element '<button>'

        Given User is at the home page
        When User clicks '<button>' button
        Then User is at the '<expected>' page
         Examples:
            | button    | expected  |
            | Register  | register  |
            | Sign in   | signin    |
            | Help      | help      |

    Scenario: User clicks some elements at the top right menu

        Given User is at the home page
        When User clicks "Help" button
        And User clicks "Sign in" button
        And User clicks "Help" button
        And User clicks "Sign in" button
        Then User is at the "signin" page
