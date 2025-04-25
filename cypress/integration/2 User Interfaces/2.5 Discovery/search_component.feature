Feature: Discovery - Anonymous user searchs for a services, provider and data via search field

# Search field in discovery: GAIAXPORTAL-168
# Search Result: GAIAXPORTAL-175

    # GAIAXPORTAL-168
    Scenario Outline: Anonymous user sees Search field and Advances Search

        When Anonymous user goes on '<page>' page
        Then Anonymous is at '<page>' page
        And Anonymous user sees a Search field, Advanced Search and a plus circle button
        When Anonymous user clicks on Advanced Search
        Then Anonymous user sees search terms
        When Anonymous user clicks on each search terms
        Then All filter terms appears in search field
         Examples:
            | page      |    
            | provider  |
            | data      |
            | services  |

    # GAIAXPORTAL-175
    @search_location
    Scenario Outline: Anonymous user sees search result for one location

        When Anonymous user goes on '<page>' page
        Then Anonymous is at '<page>' page
        When Anonymous user filters for first location
        Then Search result set has entries for selected location only 
        And Anonymous user clicks on next to last page
        And Anonymous user clicks on prev to first page
         Examples:
            | page      |    
            | provider  |
            | data      |
            | services  |
