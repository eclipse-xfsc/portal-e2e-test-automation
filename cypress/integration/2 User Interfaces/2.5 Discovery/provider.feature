Feature: Discovery - Anonymous user searchs for a provider and views detailed information of its search result

# Testsuite to test UI implementation of discovery area 
# Basic: GAIAXPORTAL-220
# Details tab: GAIAXPORTAL-210
# Services tab: GAIAXPORTAL-212
# Data sets tab: GAIAXPORTAL-215
# Services/Data set preview: GAIAXPORTAL-197
# Filter: GAIAXPORTAL-180, 

# TODO: Rework tests!! Its not possible to open page for one single data 

    # GAIAXPORTAL-180
    Scenario: Anonymous user sees all categories

        When Anonymous user is at Provider page
        Then Anonymous user can see all categories

    # GAIAXPORTAL-220
    Scenario Outline: Anonymous user selected one provider and checks '<expectedTab>' tab

        When TODO Anonymous user searched and has choosen one provider
        Then Anonymous user sees '<expectedTab>' tab
         Examples:
            | expectedTab    |
            | Details        |
            | Services       |
            | Data sets      |
            | Contact        |

    # GAIAXPORTAL-219
    Scenario: Anonymous user sees basic attributes

        When TODO Anonymous user searched and has choosen one provider
        Then Anonymous user sees provider logo, short description, location

    # GAIAXPORTAL-212, GAIAXPORTAL-197
    @services_tab
    Scenario: Anonymous user sees Services tab

        When TODO Anonymous user searched and has choosen one provider
        And Anonymous user clicks on 'Services' tab
        Then Anonymous user sees service name, provider name and description in preview

    # GAIAXPORTAL-215, GAIAXPORTAL-197
    @data_tab
    Scenario: Anonymous user sees Data set tab

        When TODO Anonymous user searched and has choosen one provider
        And Anonymous user clicks on 'Data sets' tab
        Then Anonymous user sees data name, provider name and description in preview

    # GAIAXPORTAL-210
    @details_tab
    Scenario: Anonymous user open Details tabs

        When TODO Anonymous user searched and has choosen one provider
        Then Anonymous user sees certs, location, member since, last update and description in preview
