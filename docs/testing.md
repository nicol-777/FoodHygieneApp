# Testing

## Test Plan




TODO: Add rows for each test, current status is eg. pass/fail

| Use-Case ID | Requirement ID | Test Case | Status |
| ----------- | -------------- | --------- | ------ |
   **US1**        |  **FR1, FR2**      | Search by business name returns results.| **Pass** |
   **US1**        |  **FR1, FR2**      | Search by location returns results. |**Pass**|
   **US1**        |  **FR1, FR2**      | Filter by hygiene rating 5.| **Pass**|
   **UC1**        |  **FR1, FR2**      | Filter by hygiene rating 4.| **Pass**|
   **UC1**        |  **FR1, FR2**      | Filter by hygiene rating 3.| **Pass**| 
   **UC1**        |  **FR1, FR2**      | Filter by hygiene rating 2.| **Pass** |
   **UC1**        |  **FR1, FR2**      | Filter by hygiene rating 1.| **Pass**|
   **UC1**        |  **FR1, FR2**      | Filter by hygiene rating 0 (Urgent).| **Pass**| 
   **UC1**        |  **FR2**           | Display correct marker colours on map.| **Pass** |      
   **UC1**        |  **FR2**           | Display business details on marker click.| **Pass** |
   **UC1, UC2**   |  **FR4, FR5**      | Chatbot opens and provides help options. | **Pass**|
   **UC2**        |  **FR4**           | Submit issue form (under map).| **Pass** |
   **UC2**        |  **FR4**           | Confirmation message appears for 3 seconds after form submission.| **Pass**| 
   **UC2**       |  **FR4**           |Full page reset after confirmation message. | **Pass** |
   **UC2**        |  **FR4**           | Chatbot greeting bubble appears on page load.| **Pass** | 
   **UC1**        |  **FR1, FR5**      | Reset search form clears input.| **Pass**|
   **UC1**        |  **NFR1, NFR2**    | Mobile responsiveness for dropdown.| **Pass** |
   **UC3**        |  **FR6, NFR1, NFR4** | API fallback activates if API fails. | **Pass** |
   **UC3**    |  **FR6, NFR1**       | System switches to GeoJSON backup data. |  **Pass**      |
   **UC3**        |  **NFR3**            | API integration follows secure protocols. | **Pass** | 
 **UC1, UC2**      | **FR7**        | System requests geolocation permission on page load.** | **Pass** |
 **UC1, UC2**  | **FR7**        | If geolocation is allowed, map centers on user’s location and shows "You are here!" marker. | **Pass** |
 **UC1, UC2** | **FR7** | If geolocation is denied, "You are here!" marker disappears but all food hygiene markers remain visible.|**Pass** |
 **UC1, UC2**      | **FR7**        | Clicking hygiene markers still works when geolocation is denied.| **Pass** | 
 **UC1** | **FR3, FR4** | Toggle between Map View and List View retains search parameters.| **Pass** |
 **UC1** | **FR12** | Clicking a business in list view does nothing.| **Pass** |
 **UC1** | **FR9** |  Searching for a nonexistent business in List View shows 'No Results Found'. | **Pass** | 
 **UC1** | **FR10,NFR9** |  Paginate through results using Next/Previous buttons. | **Pass** |
 **UC1** | **NFR12** | Verify List View scales properly on mobile. | **Pass** |
 **UC1** | **NFR11** | HelpBot provides instant response after button press and directs users to relevant forms. | **Pass** |
 **UC1** | **FR7** | Search by business name in List View returns correct results. | **Pass** |
 **UC1** | **FR6,FR7** | Filter by hygiene rating in List View returns correct results. | **Pass** |
 **UC1** | **FR8** | List View updates results instantly without page refresh. | **Pass** | 
| **UC1** | **FR13** | List View displays business name, address, and hygiene rating. | **Pass** |
| **UC1** | **FR14** | List View pagination displays correct number of results per page. | **Pass** |
| **UC1** | **FR15** | List View sorting by hygiene rating works correctly. | **Pass** |
| **UC1** | **FR16** | List View reset button clears all filters and search inputs. | **Pass** |
| **UC1** | **NFR13** | List View is accessible and keyboard-navigable. | **Pass** | 
 |  **Written By**    | Hafsa Robleh                                                                       |     

     

## Test Descriptions 
TODO: Describe any manual and automated (unit) tests. Uniquely identify each test case. Include prerequisites and test data.

---


| **US1**         |**Search by Business**  |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | Enter business name and verify matching results are displayed on the map.                            |
| **Prerequisites** | Data loaded from GeoJSON file.                                                                       |
| **Test Data**     | Search by business name e.g., "Waterstones Cafe W".                                                   |
| **Expected Result**| Matching business appears on map.                                                                    |
| **Written By**    | Hafsa Robleh                                                                            |

---


| **UC1**         | **Search by Location**                         |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | Enter street, town, or postcode and verify matching results.                                          |
| **Prerequisites** | Data loaded and filtered by address.                                                                 |
| **Test Data**     | Search by location e.g., BS1, BS3 or BS4.                                                            |
| **Expected Result**| Businesses in the specified area appear.                                                             |
| **Written By**    | Hafsa Robleh                                                                                         |

---


| **UC1**         | **Filter by Rating**                                                                      |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | Select rating filter and verify correct businesses appear.                                            |
| **Prerequisites** | Dropdown list with rating options.                                                                   |
| **Test Data**     | Ratings 5, 4, 3, 2, 1, and 0.                                                                        |
| **Expected Result**| Only businesses matching the selected rating are displayed.                                          |
| **Written By**    | Hafsa Robleh                                                                                         |

---


| **UC1**         | **Marker Colours**                                                                      |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | Verify 0-rated businesses display red markers and 1-5 rated businesses display blue markers.          |
| **Prerequisites** | GeoJSON data includes rating information.                                                            |
| **Test Data**     | <ul><li>Red Marker: The Viet Kitchen (rating 0).</li><li>Blue Marker: Waterstones Cafe W (rating 5).</li></ul> |
| **Expected Result**| <ul><li>Red markers for rating 0.</li><li>Blue markers for 1-5.</li></ul>                            |
| **Written By**    | Hafsa Robleh                                                                                         |



---


| **UC1**           | **Business Details Popup**                                                              |
|---------------------|-----------------------------------------------------------------------------------------------------|
| **Description**     | Click marker to display business details.                                                            |
| **Prerequisites**   | GeoJSON data with address and rating fields.                                                         |
| **Test Data**       | <ul><li>Business Name: Waterstones Cafe W</li><li>Address: 11a Union Gallery, Broadmead, City Centre, Bristol BS1 3XD</li><li>Rating: 5</li><li>Rating Date: 2024-06-06</li></ul> |
| **Expected Result** | Popup shows business name, address, and rating.                                                      |
| **Written By**    | Hafsa Robleh                                                                                         |

---


| **UC1, UC2**     | **Chatbot Interaction**                                                                  |
|---------------------|-----------------------------------------------------------------------------------------------------|
| **Description**     | Click chatbot icon to open chat and view options for both consumers and businesses.                   |
| **Prerequisites**   | Chatbot script is running.                                                                           |
| **Test Data**       | <ul><li>Step 1: Click chatbot icon.</li><li>Step 2: Select "Yes" when prompted for help.</li><li>Step 3: View assistance options:</li><li><b>For Consumers:</b></li><li>Report a Food Safety Issue</li><li>Report a Product Labelling Issue</li><li>Report an Unregistered Food Business</li><li>Report a Problem with a Food Hygiene Rating</li><li>Whistleblowing and Reporting a Food Crime</li><li><b>For Businesses:</b></li><li>Report a Food Safety Incident</li><li>Report a Problem with a Food Hygiene Rating</li><li>Whistleblowing and Reporting a Food Crime</li></ul> |
| **Expected Result** | Chatbot displays assistance options for consumers and businesses.                                     |
| **Written By**    | Hafsa Robleh                                                                            |

---


| **UC2**           | **Report Issue Form**                                                                   |
|---------------------|-----------------------------------------------------------------------------------------------------|
| **Description**     | Submit issue form under map.                                                                         |
| **Prerequisites**   | Form inputs for name, email, and issue details.                                                      |
| **Test Data**       | <ul><li>Name: Jane Doe</li><li>Email: JaneDoe@outlook.com</li><li>Issue Description: "Human finger found in food".</li></ul> |
| **Expected Result** | Confirmation message appears after submission, and form resets automatically.                        |
| **Written By**    | Hafsa Robleh                                                                           |

---


| **UC2**           | **Chatbot Icon Visibility**                                             |
|---------------------|---------------------------------------------------------------------------------------|
| **Description**     | Verify chatbot icon is visible and interactive.                                                      |
| **Prerequisites**   | Chatbot script integrated.                                                                           |
| **Test Data**       | <ul><li>Step 1: Verify chatbot greeting bubble appears on page load.</li><li>Step 2: Click chatbot icon.</li></ul> |
| **Expected Result** | Chatbot greeting bubble displays on page load, and clicking the icon opens the chat interface.        |
| **Written By**    | Hafsa Robleh                                                           |

---



| **UC1**           | **Map View Rest**                                                         |
|---------------------|-----------------------------------------------------------------------------------------------------|
| **Description**     | Verify that the Map View reset button clears all filters and search inputs.                                                                  |
| **Prerequisites**   | Data loaded from GeoJSON file.                                                                              |
| **Test Data**       | Apply filters or search, then click the reset button.                                                                           |
| **Expected Result** | All filters and search inputs are cleared, and the full dataset is displayed.                                                                        |
| **Written By**    | Hafsa Robleh                                                                                         |

---







| **UC1**           | **Mobile Dropdown**                                                   |
|---------------------|-----------------------------------------------------------------------------------------------------|
| **Description**     | Verify dropdown functions on mobile.                                                                 |
| **Prerequisites**   | Responsive design.                                                                                   |
| **Test Data**       | Open site on mobile view.                                                                            |
| **Expected Result** | Dropdown is fully functional.                                                                        |
| **Written By**    | Hafsa Robleh                                                                                         |

---


| **UC3**           | **API Fallback Test**                                                 |
|---------------------|-----------------------------------------------------------------------------------------------------|
| **Description**     | Turn off the API to check if the website automatically uses backup data from the GeoJSON file.       |
| **Prerequisites**   | Disable API temporarily.                                                                             |
| **Test Data**       | API failure event.                                                                                   |
| **Expected Result** | Backup data from the GeoJSON file loads, and the map still shows business information.                |
| **Written By**    | Hafsa Robleh                                                                                         |

---


| **UC3**           | **Secure API Integration**                                            |
|---------------------|-----------------------------------------------------------------------------------------------------|
| **Description**     | Verify API data transfer uses HTTPS and follows GDPR.                                                |
| **Prerequisites**   | API integrated into web app.                                                                         |
| **Test Data**       | API endpoint.                                                                                        |
| **Expected Result** | Secure data transfer and encryption.                                                                 |
| **Written By**    | Hafsa Robleh                                                                         |


---


| **UC1, UC2**           | **Requesting Geolocation Permission**                                            |
|---------------------|-----------------------------------------------------------------------------------------------------|
| **Description**     | Verify that the system requests geolocation permission when the user or business owner opens the web app.                                                |
| **Prerequisites**   | User or Business Owner opens the web app for the first time.                                                                         |
| **Test Data**       | <ul><li>1. Open the web app.</li><li>2. Observe if a geolocation permission request appears.</li></ul>                                                                                        |
| **Expected Result** |A geolocation permission prompt should appear asking the user or business owner to allow or deny location access.                                                                |
| **Written By**    | Hafsa Robleh                                                                         |


---


| **UC1, UC2**           | **"You Are Here!" Marker When Geolocation is Enabled**                                            |
|---------------------|-----------------------------------------------------------------------------------------------------|
| **Description**     | Verify that when geolocation is enabled, the system places a "You are here!" marker at the user or business owner’s location.                                               |
| **Prerequisites**   |User or Business Owner allows geolocation access.          |
| **Test Data**       | <ul><li>1. Open the web app.</li><li>2. Allow geolocation access.</li><li>3. Observe the map.</li></ul>                                                                                       |
| **Expected Result** | The map should center on the user's or business owner’s location, and a "You are here!" marker should appear.                                                         |
| **Written By**    | Hafsa Robleh                                                                         |


---


| **UC1, UC2**           | **Map Behaviour When Geolocation is Denied**                                            |
|---------------------|-----------------------------------------------------------------------------------------------------|
| **Description**     | Verify that when geolocation is denied, the map still displays all food hygiene markers across the Bristol area.                                             |
| **Prerequisites**   |User or Business Owner denies geolocation access.          |
| **Test Data**       | <ul><li>1. Open the web app.</li><li>2. Deny geolocation access.</li><li>3. Observe the map.</li></ul>                                                                                     |
| **Expected Result** | <ul><li>The "You are here!" marker disappears.</li><li>The map remains zoomed out to show all food hygiene markers scattered across the Bristol area.</li><li>Users can still click on hygiene markers to view details.</li></ul>                                                 |
| **Written By**    | Hafsa Robleh                                                                         |


---


| **UC1, UC2**           | **Clicking Business Markers When Geolocation is Denied**                                            |
|---------------------|-----------------------------------------------------------------------------------------------------|
| **Description**     | Verify that users and business owners can still interact with food hygiene markers even if geolocation is denied.                                             |
| **Prerequisites**   |User or Business Owner denies geolocation access.         |
| **Test Data**       | <ul><li>1. Open the web app.</li><li>2. Deny geolocation access.</li><li>3. Click on different hygiene rating markers.</li></ul>                                                                                   |
| **Expected Result** | Clicking a hygiene rating marker should display business details (hygiene rating, name, and address).                                  |
| **Written By**    | Hafsa Robleh                                                                         |


---

                       








| **UC1**         | **Filter by Hygiene Rating (5, 4, 3, 2, 1, 0 - Urgent)** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | Select different rating filters and verify that the correct businesses appear.                      |
| **Prerequisites** | Dropdown list with rating options.                                                                   |
| **Test Data**     | <ul><li>Rating: 5 (Best hygiene)</li><li>Rating: 4</li><li>Rating: 3</li><li>Rating: 2</li><li>Rating: 1</li><li>Rating: 0 (Urgent Improvement Needed)</li></ul> |
| **Expected Result**| Only businesses matching the selected hygiene rating are displayed.                                |
| **Written By**    | Hafsa Robleh                                                                                         |

---

| **UC1**         | **Display Business Details on Marker Click** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | Clicking a marker should display business details including hygiene rating and address.              |
| **Prerequisites** | GeoJSON data contains hygiene ratings and business information.                                      |
| **Test Data**     | Click on a business marker.                                                                         |
| **Expected Result**| A pop-up should appear displaying the business name, hygiene rating, and address.                   |
| **Written By**    | Hafsa Robleh                                                                                        |

---

| **UC2**         | **Chatbot Greeting Bubble on Page Load** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | The chatbot greeting bubble should automatically appear when the page loads.                         |
| **Prerequisites** | The chatbot feature is enabled.                                                                     |
| **Test Data**     | Open the web app.                                                                                   |
| **Expected Result**| A small chatbot greeting bubble should appear in the bottom right corner.                          |
| **Written By**    | Hafsa Robleh                                                                                        |

---

| **UC1, UC2**     | **Chatbot Opens and Provides Help Options** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | Clicking the chatbot icon should open the chatbot and display help options for both users and business owners. |
| **Prerequisites** | The chatbot feature is enabled.                                                                     |
| **Test Data**     | Click the chatbot icon.                                                                             |
| **Expected Result**| The chatbot should open and display assistance options.                                            |
| **Written By**    | Hafsa Robleh                                                                                        |

---

| **UC2**         | **Full Page Reset After Confirmation Message** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | After submitting an issue form, the page should reset automatically.                                |
| **Prerequisites** | The form submission feature is enabled.                                                             |
| **Test Data**     | Submit an issue form.                                                                               |
| **Expected Result**| After submission, the page resets to a blank state.                                                |
| **Written By**    | Hafsa Robleh                                                                                        |

---

| **UC2**         | **Confirmation Message Appears for 3 Seconds After Submission** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | After submitting an issue form, a confirmation message should appear for 3 seconds.                 |
| **Prerequisites** | The form submission feature is enabled.                                                             |
| **Test Data**     | Submit an issue form.                                                                               |
| **Expected Result**| A confirmation message appears and disappears after 3 seconds.                                     |
| **Written By**    | Hafsa Robleh                                                                                        |

---

| **UC1, UC2**     | **System Requests Geolocation Permission on Page Load** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | The system should automatically ask for geolocation permission when the user or business owner opens the web app. |
| **Prerequisites** | The browser's geolocation feature is enabled.                                                       |
| **Test Data**     | Open the web app.                                                                                   |
| **Expected Result**| A pop-up should appear asking the user to allow or deny geolocation.                              |
| **Written By**    | Hafsa Robleh                                                                                        |

---

| **UC1, UC2**     | **If Geolocation is Allowed, Map Centres on User’s Location and Shows "You are Here!" Marker** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | If the user allows geolocation, the map should automatically centre on their location and display a "You are here!" marker. |
| **Prerequisites** | The browser's geolocation feature is enabled.                                                       |
| **Test Data**     | Allow geolocation when prompted.                                                                    |
| **Expected Result**| The map centres on the user's location and a blue "You are here!" marker appears.                 |
| **Written By**    | Hafsa Robleh                                                                                        |

---

| **UC3**         | **API Fallback Activates if API Fails** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | If the main API fails, the system should automatically switch to backup data.                       |
| **Prerequisites** | API temporarily disabled.                                                                           |
| **Test Data**     | Simulate API failure.                                                                               |
| **Expected Result**| The system loads data from the backup GeoJSON file.                                                |
| **Written By**    | Hafsa Robleh                                                                                        |

---

| **UC3**         | **System Switches to GeoJSON Backup Data** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | The system should automatically use GeoJSON data when the API is unavailable.                        |
| **Prerequisites** | API temporarily disabled.                                                                           |
| **Test Data**     | Simulate API failure.                                                                               |
| **Expected Result**| The system loads hygiene data from the GeoJSON file instead of the API.                            |
| **Written By**    | Hafsa Robleh                                                                                        |

---

| **UC3**         | **API Integration Follows Secure Protocols** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | Ensure that all API data transfers are secure and compliant with GDPR regulations.                   |
| **Prerequisites** | API is integrated into the web app.                                                                 |
| **Test Data**     | Inspect network requests.                                                                           |
| **Expected Result**| All API requests use HTTPS, and no personal data is exposed.                                      |
| **Written By**    | Hafsa Robleh                                                                                        |

---

| **UC1**         | **List View Display** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   |Verify that the List View displays business name, address, and hygiene rating for each result.                   |
| **Prerequisites** | Data loaded from GeoJSON file.                                                                 |
| **Test Data**     | Search for a business or filter by rating.                                                                           |
| **Expected Result**| List View displays business name, address, and hygiene rating for each result.                                     |
| **Written By**    | Hafsa Robleh                                                                                        |

---



| **UC1**         | **List View Pagination** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   |Verify that the List View paginates results correctly using Next/Previous buttons.                   |
| **Prerequisites** | Data loaded from GeoJSON file.                                                                 |
| **Test Data**     | Search for multiple businesses or filter by rating.                                                                           |
| **Expected Result**| Results are paginated correctly, and the Next/Previous buttons work as expected.                                 |
| **Written By**    | Hafsa Robleh                                                                                        |

---




| **UC1**         | **List View Sorting** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   |Verify that the List View can sort results by hygiene rating.                   |
| **Prerequisites** | Data loaded from GeoJSON file.                                                                 |
| **Test Data**     | Sort results by hygiene rating (5, 4, 3, 2, 1, 0).                                                                           |
| **Expected Result**| Results are sorted correctly by hygiene rating.                           |
| **Written By**    | Hafsa Robleh                                                                                        |

---




| **UC1**         | **List View Reset** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   |Verify that the List View reset button clears all filters and search inputs.     |
| **Prerequisites** | Data loaded from GeoJSON file.                                                                 |
| **Test Data**     |Apply filters or search, then click the reset button.                                                                         |
| **Expected Result**| All filters and search inputs are cleared, and the full dataset is displayed.                          |
| **Written By**    | Hafsa Robleh                                                                                        |

---




| **UC1**         | **List View Accessibility** |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   |	Verify that the List View is accessible and keyboard-navigable.     |
| **Prerequisites** | Data loaded from GeoJSON file.                                                                 |
| **Test Data**     |Navigate the List View using only the keyboard.                                                                        |
| **Expected Result**| All List View elements are accessible and navigable using the keyboard.                        |
| **Written By**    | Hafsa Robleh                                                                                        |

---

















### Requirements Traceability Matrix
Test Runs
TODO: For each test described above, indicate the current status. 
Create a requirements traceability matrix to validate the completeness of the product.

| **Requirement ID** | **Description**                                     | **Use-Case ID** |
| ------------------ | --------------------------------------------------- | --------------- |
| FR1                | Search by business name or location.                | UC1             |
| FR2                | Display hygiene ratings from Bristol Open Data API. | UC1             |
| FR4                | Business owners request correction via chatbot.     | UC2             |
| FR5                | Users report issues via chatbot.                    | UC1             |
| FR6                | API integration and fallback process.               | UC3             |
| NFR1               | System responds within 2 seconds.                   | UC1, UC3        |
| NFR2               | System available 24/7.                              | UC2             |
| NFR3               | Data security (HTTPS and GDPR).                     | UC3             |
| NFR4               | API fallback during outage.                         | UC3             |
|FR13 | List View displays business name, address, and hygiene rating. | UC1 |
| FR14 | List View pagination displays correct number of results per page. | UC1 |
| FR15 | List View sorting by hygiene rating works correctly. | UC1 |
| FR16 | List View reset button clears all filters and search inputs. | UC1 |
| NFR13 | List View is accessible and keyboard-navigable. | UC1 |
|  **Written By**    | Hafsa Robleh                                                                       |     
  
     
