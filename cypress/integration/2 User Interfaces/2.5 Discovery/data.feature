Feature: Discovery - Anonymous user searchs for a data name and views detailed information of its search result

# Testsuite to test UI implementation of discovery area
# Basic: GAIAXPORTAL-219
# Details: GAIAXPORTAL-196
# Sample record: GAIAXPORTAL-217


    # GAIAXPORTAL-180
    Scenario: Anonymous user sees all categories

        When Anonymous user is at Data page
        Then Anonymous user can see all categories

    # GAIAXPORTAL-217
    Scenario: Anonymous user sees entries Sample record tab

        When Anonymous user searched and has choosen one data name
        Then Anonymous user expands Sample record tab

    # GAIAXPORTAL-219
    Scenario Outline: Anonymous user selected one data name and checks '<expectedTab>' tab

        When Anonymous user searched and has choosen one data name
        Then Anonymous user sees '<expectedTab>' tab
         Examples:
            | expectedTab    |
            | Details        |
            | Price          |
            | Sample record  |
            | Contact        |

    # GAIAXPORTAL-219
    Scenario: Anonymous user sees basic attributes

        When Anonymous user searched and has choosen one data name
        Then Anonymous user sees provider logo, short description, location

    # GAIAXPORTAL-196
    @details_tab
    Scenario: Anonymous user sees attributes in Details tab
    
        When Anonymous user searched and has choosen one data name
        Then Anonymous user sees Details tab
        And Anonymous user sees Description, Tags, Source, Cloud Service in Details tab
        And Anonymous user sees Update Frequency, Last Update, Location, Category in Details tab

