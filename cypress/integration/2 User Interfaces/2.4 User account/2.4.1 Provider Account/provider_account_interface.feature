Feature: A Registered and signed in provider has access to his details, login history, credentials

# Testsuite to test implementation of GAIAXPORTAL-35, GAIAXPORTAL-38, GAIAXPORTAL-39, 
# GAIAXPORTAL-40, GAIAXPORTAL-41, GAIAXPORTAL-42, GAIAXPORTAL-44, GAIAXPORTAL-46, GAIAXPORTAL-47, GAIAXPORTAL-48

    Background:
        Given Registered provider is at the home page
        When Registered provider signs in
        And TODO Logged in provider clicks on his avatar in the header
        And TODO Logged in provider clicks on My Account

    # GAIAXPORTAL-35
    Scenario: TODO Registered provider has access to My Account page
  
        Then Logged in provider is at the My Account page
        And Logged in provider is directed to the Details view
        And Logged in provider sees Details, Login History, Credentials tabs 

    # GAIAXPORTAL-35
    Scenario: TODO Registered provider has access to his account details

        Then Logged in provider is directed to the Details view
        And Logged in provider sees his basic data and detailed informations

    # GAIAXPORTAL-38, GAIAXPORTAL-39, GAIAXPORTAL-40
    Scenario Outline: TODO Registered provider updates his account details

        Then Logged in provider is at the My Account page
        When Logged in provider clicks on Edit account
        Then Logged in provider sees upload button and description
        When Logged in provider uploads his account details as file, '<filePath>'
        Then TODO Logged in provider request is saved into the database and in the state To be approved
         Examples:
            | filePath                                                       | empty column |
            | /attachments/organization_details/update_provider_account.json | true         |

    # GAIAXPORTAL-38, GAIAXPORTAL-39, GAIAXPORTAL-40
    Scenario: TODO Logged in provider cancels update process of his account details

        Then Logged in provider is at the My Account page
        When Logged in provider clicks on Edit account
        Then Logged in provider sees upload button and description
        When Logged in provider clicks Cancel button
        Then Logged in provider is directed to the Details view
                        
    # GAIAXPORTAL-42
    Scenario: TODO Registered provider has access to his login history

        Then Logged in provider is at the My Account page
        When Logged in provider clicks on Login History tab
        Then TODO Logged in provider sees login date, time and provider name

    # GAIAXPORTAL-44
    Scenario: TODO Registered provider has access to his credentials

        Then Logged in provider is at the My Account page
        When Logged in provider clicks on Credentials tab
        Then TODO Logged in provider sees user names and roles

    # GAIAXPORTAL-48
    Scenario: TODO Registered provider adds user at Credentials page

        Then Logged in provider is at the My Account page
        When Logged in provider clicks on Credentials tab
        Then TODO Logged in provider sees user names and roles
        When Logged in provider clicks Add user button
        And Logged in provider inserts user name, role and email addr
        And Logged in provider clicks Save button
        Then TODO Logged in provider sees new user in user list

    # GAIAXPORTAL-46
    Scenario: TODO Registered provider edits provider at Credentials page

        Then Logged in provider is at the My Account page
        When Logged in provider clicks on Credentials tab
        And Logged in provider clicks Edit button for first user
        And Logged in provider changes name and role
        And Logged in provider clicks Save button
        Then TODO Logged in provider sees edited user in user list

    # GAIAXPORTAL-47
    Scenario: TODO Registered provider removes provider at Credentials page

        Then Logged in provider is at the My Account page
        When Logged in provider clicks on Credentials tab
        And Logged in provider selects the last user
        And Logged in provider clicks Remove button
        And Logged in provider clicks Remove button in popup
        Then Logged in provider removed user in user list

    # GAIAXPORTAL-41
    Scenario: TODO Registered provider deletes his account

        Then Logged in provider is at the My Account page
        When Logged in provider clicks on Edit account
        And Logged in provider clicks Remove button
        And Logged in provider clicks Remove button in popup
        Then Logged out provider isnt able to sign in again 
