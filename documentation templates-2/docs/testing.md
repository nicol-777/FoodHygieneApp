# Testing

## Test Plan
TODO: Describe any manual and automated (unit) tests. Uniquely identify each test case. Include prerequisites and test data.

Test Runs
TODO: For each test described above, indicate the current status. 
Create a requirements traceability matrix to validate the completeness of the product.

| Use-Case ID | Requirement ID | Test Case | Status |
| ----------- | -------------- | --------- | ------ |
   US1        |  FR1, FR2      | Search by business name returns results.| Pass |
   US1        |  FR1, FR2      | Search by location returns results. |Pass |
   US1        |  FR1, FR2      | Filter by hygiene rating 5.| Pass |
   UC1        |  FR1, FR2      | Filter by hygiene rating 4.| Pass |
   UC1        |  FR1, FR2      | Filter by hygiene rating 3.| Pass | 
   UC1        |  FR1, FR2      | Filter by hygiene rating 2.| Pass |
   UC1        |  FR1, FR2      | Filter by hygiene rating 1.| Pass |
   UC1        |  FR1, FR2      | Filter by hygiene rating 0 (Urgent).| Pass| 
   UC1        |  FR2           | Display correct marker colours on map.| Pass |      
   UC1        |  FR2           | Display business details on marker click.| Pass |
   UC1, UC2   |  FR4, FR5      | Chatbot opens and provides help options. | Pass |
   UC2        |  FR4           | Submit issue form (under map).| Pass |
   UC2        |  FR4           | Confirmation message appears for 3 seconds after form submission.| Pass| 
   UC2        |  FR4           |Full page reset after confirmation message. | Pass |
   UC2        |  FR4           | Chatbot greeting bubble appears on page load.| Pass | 
   UC1        |  FR1, FR5      | Reset search form clears input.| Pass|
   UC1        |  NFR1, NFR2    | Mobile responsiveness for dropdown.| Pass |
   UC3        |  FR6, NFR1, NFR4 | API fallback activates if API fails. | Pass |
   UC3        |  FR6, NFR1       | System switches to GeoJSON backup data. | Pass |
   UC3        |  NFR3            | API integration follows secure protocols. | Pass |
   
     

     

## Test Descriptions 

---


| **US1**         |**Search by Business**  |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | Enter business name and verify matching results are displayed on the map.                            |
| **Prerequisites** | Data loaded from GeoJSON file.                                                                       |
| **Test Data**     | Search by business name e.g., "Waterstones Cafe W".                                                   |
| **Expected Result**| Matching business appears on map.                                                                    |
| **Written By**    | Hafsa Robleh                                                                                         |

---


| **UC1**         | **Search by Location**                         |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | Enter street, town, or postcode and verify matching results.                                          |
| **Prerequisites** | Data loaded and filtered by address.                                                                 |
| **Test Data**     | Search by location e.g., BS1, BS3 or BS4.                                                            |
| **Expected Result**| Businesses in the specified area appear.                                                             |
| **Written By**    | Hafsa Robleh                                                                                         |

---


| **UC1**         | **Filter by Rating**                                                                                          |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | Select rating filter and verify correct businesses appear.                                            |
| **Prerequisites** | Dropdown list with rating options.                                                                   |
| **Test Data**     | Ratings 5, 4, 3, 2, 1, and 0.                                                                        |
| **Expected Result**| Only businesses matching the selected rating are displayed.                                          |
| **Written By**    | Hafsa Robleh                                                                                         |

---


| **UC1**         | **Marker Colours**                                                                                          |
|-------------------|-----------------------------------------------------------------------------------------------------|
| **Description**   | Verify 0-rated businesses display red markers and 1-5 rated businesses display blue markers.          |
| **Prerequisites** | GeoJSON data includes rating information.                                                            |
| **Test Data**     | <ul><li>Red Marker: The Viet Kitchen (rating 0).</li><li>Blue Marker: Waterstones Cafe W (rating 5).</li></ul> |
| **Expected Result**| <ul><li>Red markers for rating 0.</li><li>Blue markers for 1-5.</li></ul>                            |
| **Written By**    | Hafsa Robleh                                                                                         |



---


| **UC1**           | **Business Details Popup**                                                                                          |
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
| **Written By**    | Hafsa Robleh                                                                                         |

---


| **UC2**           | **Report Issue Form**                                                                   |
|---------------------|-----------------------------------------------------------------------------------------------------|
| **Description**     | Submit issue form under map.                                                                         |
| **Prerequisites**   | Form inputs for name, email, and issue details.                                                      |
| **Test Data**       | <ul><li>Name: Jane Doe</li><li>Email: JaneDoe@outlook.com</li><li>Issue Description: "Human finger found in food".</li></ul> |
| **Expected Result** | Confirmation message appears after submission, and form resets automatically.                        |
| **Written By**    | Hafsa Robleh                                                                                         |

---


| **UC2**           | **Chatbot Icon Visibility**                                             |
|---------------------|-----------------------------------------------------------------------------------------------------|
| **Description**     | Verify chatbot icon is visible and interactive.                                                      |
| **Prerequisites**   | Chatbot script integrated.                                                                           |
| **Test Data**       | <ul><li>Step 1: Verify chatbot greeting bubble appears on page load.</li><li>Step 2: Click chatbot icon.</li></ul> |
| **Expected Result** | Chatbot greeting bubble displays on page load, and clicking the icon opens the chat interface.        |
| **Written By**    | Hafsa Robleh                                                           |

---



| **UC1**           | **Reset Form**                                                         |
|---------------------|-----------------------------------------------------------------------------------------------------|
| **Description**     | Click reset button to clear inputs.                                                                  |
| **Prerequisites**   | Search form displayed.                                                                               |
| **Test Data**       | Fill form and click reset.                                                                           |
| **Expected Result** | All input fields are cleared.                                                                        |
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







  
     
     TODO: Add rows for each test, current status is eg. pass/fail
