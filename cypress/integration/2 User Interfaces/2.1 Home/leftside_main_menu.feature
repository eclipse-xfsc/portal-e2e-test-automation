Feature: Anonymous user navigates through leftside main menu
# based on GAIAXPORTAL-51 these elements are now in top side menu 

# Testsuite to test implementation of GAIAXPORTAL-14, GAIAXPORTAL-51

    #GAIAXPORTAL-14
    Scenario Outline: User clicks on '<element>' element

        Given User is at the home page
        When User clicks on '<element>'
        Then User is at the '<expected>' page
         Examples:
            | element   | expected  |
            | Services  | services  |
            | Data      | data      |
            | Provider  | provider  |

    #GAIAXPORTAL-51
    Scenario Outline: User clicks on Gaia-x logo image to go on the home page

        Given User is at the home page
        When User clicks on '<element>'
        And User clicks on Gaia-x logo image
        Then User is at the home page
         Examples:
            | element   | expected  |
            | Services  | services  |
            | Data      | data      |
            | Provider  | provider  |
