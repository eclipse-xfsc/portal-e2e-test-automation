Feature: Discovery - Anonymous user searchs for a service and views detailed information of its search result

# Testsuite to test UI implementation of discovery area
# Basic: GAIAXPORTAL-183
# Details: GAIAXPORTAL-184
# Price: GAIAXPORTAL-186, GAIAXPORTAL-187, GAIAXPORTAL-190
# Screenshots: GAIAXPORTAL-199, GAIAXPORTAL-200, GAIAXPORTAL-201
# Contact: GAIAXPORTAL-204, GAIAXPORTAL-205, GAIAXPORTAL-206

# TODO: Rework tests!! Its not possible to open page for one single data 


    # GAIAXPORTAL-180
    Scenario: Anonymous user sees all categories

        When Anonymous user is at Services page
        Then Anonymous user can see all categories

    # GAIAXPORTAL-183
    Scenario Outline: Anonymous user selected one service and checks '<expectedTab>' tab

        When Anonymous user searched and has choosen one service
        Then Anonymous user sees '<expectedTab>' tab
         Examples:
            | expectedTab   |
            | Details       |
            | Price         |
            | Screenshots   |
            | Contact       |

    # GAIAXPORTAL-183
    @details_tab
    Scenario: Anonymous user sees basic attributes

        When Anonymous user searched and has choosen one service
        Then Anonymous user sees provider logo, name, location
        And Anonymous user sees stack, security

    # GAIAXPORTAL-184
    @details_tab
    Scenario: Anonymous user sees attributes in Details tab

        When Anonymous user searched and has choosen one service
        Then Anonymous user sees opened Details tab
        And Anonymous user sees Describtion and Tags in Details tab
        And Anonymous user sees Stack, Date, TOU, Location, Category in Details tab

    # GAIAXPORTAL-186, GAIAXPORTAL-187, GAIAXPORTAL-190
    @price_tab
    Scenario: Anonymous user sees attributes in Price tab

        When Anonymous user searched and has choosen one service
        And Anonymous user opens Price tab
        Then Anonymous user sees Book button
  
    # GAIAXPORTAL-203, GAIAXPORTAL-204, GAIAXPORTAL-205, GAIAXPORTAL-206
    @contact_tab
    Scenario: Anonymous user sees attributes in Contact tab

        When Anonymous user searched and has choosen one service
        And Anonymous user opens Contact tab
        Then Anonymous user sees technical phone number
        And Anonymous user sees technical email address

    # GAIAXPORTAL-199, GAIAXPORTAL-200, GAIAXPORTAL-201
    @screenshots_tab
    Scenario: Anonymous user sees attributes in Screenshots tab

        When Anonymous user searched and has choosen one service
        And Anonymous user opens Screenshots tab
        Then Anonymous user sees three screenshots
        And Anonymous user sees preview images
