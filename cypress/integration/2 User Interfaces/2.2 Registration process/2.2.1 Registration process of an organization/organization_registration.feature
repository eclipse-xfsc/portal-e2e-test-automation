Feature: Anonymous user would like to register as an organization in portal frontend

# Testsuite to test implementation of GAIAXPORTAL-22, GAIAXPORTAL-24, GAIAXPORTAL-25, GAIAXPORTAL-26, GAIAXPORTAL-63, GAIAXPORTAL-64

    # GAIAXPORTAL-22
    Scenario: Step 1: Continue with checked Organization radio button

        Given User is at the home page
        When User clicks on Register link
        And User clicks on Organization radio button in overlay windows
        And User clicks Continue button
        Then User is on Step 2

    # GAIAXPORTAL-22
    Scenario: Step 1: Try to continue without checked radio button

        Given User is at the home page
        When User clicks on Register link
        Then User is not able to click Continue button

    # GAIAXPORTAL-22
    Scenario: Step 1: Cancel registration process

        Given User is at the home page
        When User clicks on Register link
        And User clicks on Cancel button
        Then User is at the home page

    # GAIAXPORTAL-24, GAIAXPORTAL-63
    Scenario: TODO: Step 2: User selects express registration via DID 

        Given User is at the home page
        When User clicks on Register link
        And User clicks on Organization radio button in overlay windows
        And User clicks Continue button
        And User clicks on Registration via DID button
        And User sees QR code
        And User scans QR code
        Then TODO System checks if user has Verifiable Credential
        And TODO User sees the Verifiable Credential

    # GAIAXPORTAL-24, GAIAXPORTAL-64
    Scenario: TODO: Step 2: User selects express registration via DID and has no DID

        Given User is at the home page
        When User clicks on Register link
        And User clicks on Organization radio button in overlay windows
        And User clicks Continue button
        And User clicks on Registration via DID button
        And User clicks on I dont have a DID button
        Then User sees list of Identity providers
        And Each provider consists of a name and a link

    # GAIAXPORTAL-24
    Scenario: Step 2: Cancel registration process

        Given User is at the home page
        When User clicks on Register link
        And User clicks on Organization radio button in overlay windows
        And User clicks Continue button
        And User clicks on Cancel button
        Then User is at the home page

    # GAIAXPORTAL-24, GAIAXPORTAL-25
    Scenario Outline: Step 2: User uploads organization details

        Given User is not already registered
        Given User is at the home page
        When User clicks on Register link
        And User clicks on Organization radio button in overlay windows
        And User clicks Continue button
        And User uploads organization details, '<filePath>'
        And User clicks on checkbox for AISBL membership, '<isCheckBoxClicked>'
        And User clicks Continue button
        Then User is on Step 3
         Examples:
            | isCheckBoxClicked | filePath                                            |
            | true              | /attachments/organization_details/organization.json | 
            | false             | /attachments/organization_details/organization.json |

    # GAIAXPORTAL-24
    Scenario Outline: Step 2: User uploads organization details with invalid email address

        Given User is at the home page
        When User clicks on Register link
        And User clicks on Organization radio button in overlay windows
        And User clicks Continue button
        And User uploads organization details, '<filePath>'
        And User clicks on checkbox for AISBL membership, '<isCheckBoxClicked>'
        Then User is not able to click Continue button
         Examples:
            | isCheckBoxClicked | filePath                                                    |
            | true              | /attachments/organization_details/organization_invalid.json | 

    # GAIAXPORTAL-24
    Scenario Outline: Step 2: User uploads no organization details

        Given User is at the home page
        When User clicks on Register link
        And User clicks on Organization radio button in overlay windows
        And User clicks Continue button
        And User uploads organization details, '<filePath>'
        And User clears organization field
        And User clicks on checkbox for AISBL membership, '<isCheckBoxClicked>'
        Then User is not able to click Continue button
         Examples:
            | isCheckBoxClicked | filePath                                            |
            | true              | /attachments/organization_details/organization.json | 

    # GAIAXPORTAL-24, GAIAXPORTAL-25, GAIAXPORTAL-26
    Scenario Outline: Step 3: User uploads organization details

        Given User is not already registered
        Given User is at the home page
        When User clicks on Register link
        And User clicks on Organization radio button in overlay windows
        And User clicks Continue button
        And User uploads organization details, '<filePath>'
        And User clicks on checkbox for AISBL membership, '<isCheckBoxClicked>'
        And User clicks Continue button
        Then User is on Step 3
        And User clicks link in email
        Then User gets confirming message
         Examples:
            | isCheckBoxClicked | filePath                                            |
            | true              | /attachments/organization_details/organization.json |
