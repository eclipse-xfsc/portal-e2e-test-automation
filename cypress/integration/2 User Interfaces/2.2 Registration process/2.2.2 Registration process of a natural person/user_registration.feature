Feature: Anonymous user would like to register as normal user in portal frontend

# Testsuite to test implementation of GAIAXPORTAL-28, GAIAXPORTAL-29, GAIAXPORTAL-30, GAIAXPORTAL-65

    # GAIAXPORTAL-28
    Scenario: Step 1: Continue with checked User radio button

        Given User is at the home page
        When User clicks on Register link
        And User clicks on User radio button in overlay windows
        And User clicks Continue button
        Then User is on Step 2

    # GAIAXPORTAL-28, GAIAXPORTAL-65
    Scenario: Step 2: User selects express registration via DID 

        Given User is at the home page
        When User clicks on Register link
        And User clicks on User radio button in overlay windows
        And User clicks Continue button
        And User clicks on Registration via DID button
        Then User sees and scans QR code

    # GAIAXPORTAL-28
    Scenario: Step 2: Cancel registration process

        Given User is at the home page
        When User clicks on Register link
        And User clicks on User radio button in overlay windows
        And User clicks Continue button
        And User clicks on Cancel button
        Then User is at the home page

    # GAIAXPORTAL-28
    Scenario Outline: Step 2: User completes fields with valid personal address informations

        Given User is not already registered
        Given User is at the home page
        When User clicks on Register link
        And User clicks on User radio button in overlay windows
        And User clicks Continue button
        And User completes sur and last name, '<surname>', '<lastname>'
        And User completes email, '<email>'
        And User completes phone number, '<phone>'
        And User completes address, '<street>', '<zip>', '<city>', '<country>'
        And User clicks Continue button
        Then User is on Step 3
         Examples:
            | surname   | lastname  | email              | phone          | street                    | zip    | city       | country       |
            | Test      | Franz     | hfranz@google.net  | 0391/87654321  | Mega-Ring 99a             | 999-9999 | Göteborg | Sweden        |
            | Test      | Schuster  | schuster@google.de | 0394 07567234  | 89 Av. Jean Moulin        | A9A 9A  | Vendôme   | France        |
            | Test      | Cézanne   | fcez@yahoo.at      | (01525) 007550 | 1 Oakwood Cottages        | 987653  | York      | UK            |
            | Test      | Ander     | hfranz@yahoo.ru    | +380432699717  | Hliba Uspenskoho St, 69   | A99999  | Баранавічы | Belarus      |
            | Test      | Xie       | taotao@xiaomi.cn   | 0086 135 16821234 | Fu Cheng Lu Nan Er Jie | AA67889 | 北京市     | 中华人民共和国 |
            | Test      | Lang      | c.lang@mail.com    | 0176-12345678  | Ringstr. 3                | 39104  | Hamburg    | Germany       |

    # GAIAXPORTAL-28
    Scenario Outline: Step 2: User completes fields with invalid personal address informations
    
        Given User is at the home page
        When User clicks on Register link
        And User clicks on User radio button in overlay windows
        And User clicks Continue button
        And User completes sur and last name, '<surname>', '<lastname>'
        And User completes email, '<email>'
        And User completes phone number, '<phone>'
        And User completes address, '<street>', '<zip>', '<city>', '<country>'
        And User clicks Continue button  
        Then User gets information about invalid data
         Examples:
            | surname   | lastname  | email              | phone          | street         | zip     | city       | country |
            | Test      | L4ng      | c.lang@mail.com    | 0176-12345678  | Ringstr. 3     | 39104   | Hamburg    | Germany |
            | Test      | Lang      | c.lang@mail.com    | 0I76-12345678  | Ringstr. 3     | 03910   | Hamburg    | Germany |
            | T3st      | Lang      | c.lang@mail.com    | 0176-12345678  | Ringstr. 3     | 98765   | Hamburg    | Germany |
            | Test      | Franz     | hfranzgoogle.net   | 0391/87654321  | Mega-Ring 99a  | 123456  | Göteborg   | Sweden  |
            | Test      | Franz     | hfranz@google.net  | 0391/87654321  | Mega-Ring 99a  | 765432  | Göteb0rg   | Sweden  |
            | Test      | Franz     | hfranz@google.net  | 0391/87654321  | Mega-Ring 99a  | AA67889 | Göteborg   | Sw3d3n  |
            | Test      | Franz     | hfranz@google.net  | 0391/87654321  | Mega-Ring 99a  | INVALID?| Göteborg   | Sweden  |

    # GAIAXPORTAL-28, GAIAXPORTAL-29, GAIAXPORTAL-30
    Scenario Outline: Step 3: User confirms registration via a link sent by email

        Given User is not already registered
        Given User is at the home page
        When User clicks on Register link
        And User clicks on User radio button in overlay windows
        And User clicks Continue button
        And User completes sur and last name, '<surname>', '<lastname>'
        And User completes email, '<email>'
        And User completes phone number, '<phone>'
        And User completes address, '<street>', '<zip>', '<city>', '<country>'
        And User clicks Continue button
        Then User is on Step 3
        And User clicks link in email, '<email>'
        Then User gets confirming message
         Examples:
            | surname   | lastname  | email             | phone         | street        | zip      | city     | country |
            | Test      | Franz     | hfranz@google.net | 0391/87654321 | Mega-Ring 99a | 999-9999 | Göteborg | Sweden  |
