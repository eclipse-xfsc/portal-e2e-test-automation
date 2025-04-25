Feature: Discovery - Anonymous user 

# Categories: GAIAXPORTAL-181

    # GAIAXPORTAL-181
    Scenario Outline: Anonymous user sees all categories

        When Anonymous goes at '<page>' page
        Then Anonymous user sees all categories at '<page>' page
         Examples:
            | page      |
            | Provider  |
            | Data      |
            | Services  |

    # GAIAXPORTAL-181
    Scenario Outline: Anonymous user clicks on expandable category header

        When Anonymous goes at '<page>' page
        Then Anonymous user clicks on expandable categories header at '<page>' page
         Examples:
            | page      |
            | Provider  |
            | Data      |
            | Services  |
