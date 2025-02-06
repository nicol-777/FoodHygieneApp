# Requirements

## User Needs
### Requirements Section written by: Hafsa Robleh

#### User stories

As a **user**, I want to search for food hygiene ratings by business name, location, or rating, so I can make informed choices about where to eat or shop.

As a **developer**, I want to have access to the Bristol Open Data API and implement it into the app to retrieve accurate food hygiene data.

As a **business owner**, I want to request corrections to my business’s food hygiene rating via the chatbot, so that I can ensure accurate information is displayed.

As a **user**, I want the web app to suggest nearby businesses if my search returns no results, so I can find alternatives.

As a **user**, I want to filter search results by rating, so I can identify businesses with a high standard of food hygiene.

As a **user**, I want to report food safety issues through the web app, so I can alert authorities to potential risks.

As a **business owner**, I want to appeal my hygiene rating, so I can address any issues.

As a **user**, I want the web app to be accessible on mobile devices, so I can use it anywhere.

As a **user**, I want to receive confirmation after submitting a report, so I know my submission was successful.

As a **user**, I want the web app to detect my location and show nearby businesses, so I do not need to enter my location manually.

As a **user**, if I deny geolocation access, I still want to see all food hygiene ratings across Bristol so that I can explore businesses while protecting my privacy.

As a **user**, I want to view hygiene ratings in a list format, so I can quickly scan multiple businesses without using the map.

As a **user**, I want to navigate between pages when there are many results, so I can explore more options efficiently.

As a **user**, I want to see the total number of businesses listed, so I know how many options are available.

#### Actors

- **Users**: Individuals who want to view and search for food hygiene ratings for local food businesses in Bristol to make informed decisions on where to eat and to report issues or submit appeals.

- **Business owners**: Food business owners in Bristol who want to access information about their food hygiene rating, maintain accurate and up-to-date information, request corrections, appeal their rating, or report incidents.
  
- **Developer**: Responsible for creating and maintaining the database, managing corrections, handling appeals, and ensuring that the app works properly with APIs to retrieve data from Bristol Open Data.


#### Use Cases
| **USE-CASE ID**  | **UC1 (Written by Hafsa Robleh)** |  
|------------------|----------------------------------|  
| **Description** | Users can search for food hygiene ratings and find restaurants with good ratings or report a food safety issue. |  
| **Actors** | Users (general public, consumers) |  
| **Assumptions** | <ul><li>The user knows the name, location, or rating of the restaurant.</li><li>The user is familiar with using web apps and entering search terms.</li><li>The user has access to an internet-enabled device.</li><li>The food business being searched has a hygiene rating available on the platform.</li><li>The user is able to interact with the HelpBot chatbot to report issues.</li></ul> |  
| **Steps** | **<br>1.** User opens the web app.**<br>2.** System requests geolocation permission: <br>&nbsp;&nbsp;&nbsp;&nbsp;• If geolocation is allowed, the map centres on the user's location, and a "You are here!" marker appears. <br>&nbsp;&nbsp;&nbsp;&nbsp;• If geolocation is denied, the marker disappears, but all food hygiene markers across Bristol are still displayed.**<br>3.** User navigates to the search section.**<br>4.** User enters a search term, such as: <br>&nbsp;&nbsp;&nbsp;&nbsp;• Business name <br>&nbsp;&nbsp;&nbsp;&nbsp;• Location (street, town, or postcode) <br>&nbsp;&nbsp;&nbsp;&nbsp;• Hygiene rating filter **<br>5.** User selects a hygiene rating filter (0-5) to refine results.**<br>6.** User clicks the "Search" button.**<br>7.** The system sends a request to the Bristol Open Data API.**<br>8.** The system displays search results on the map with markers for each matching business.**<br>9.** User clicks on a business entry to view details, including: <br>&nbsp;&nbsp;&nbsp;&nbsp;• Hygiene rating <br>&nbsp;&nbsp;&nbsp;&nbsp;• Business name and address **<br>10.** If no results are found, the system suggests nearby businesses within a 500-metre radius.**<br>11.** User clicks the "Show List" button to switch to the list view.**<br>12.** The system fetches data from the Bristol Open Data API again to populate the list view.**<br>13.** The system displays the Business Name & Location search tools at the top of the list table.**<br>14.** User enters a new Business Name or Location into the list view search bar.**<br>15.** The system updates the list dynamically based on the new search inputs.**<br>16.** User can filter the list by hygiene rating (0-5) using the dropdown menu.**<br>17.** The system displays the total number of results at the top of the list (e.g., "Showing 1-10 of 3,882 results").**<br>18.** The list is not interactive—users cannot click on business names or ratings.**<br>19.** If there are more than 10 results, the system enables pagination with "Next" and "Previous" buttons.**<br>20.** User can navigate through multiple pages using pagination controls (e.g., "Page 1 of 389").**<br>21.** If no results are found on the Show List page, the system displays "No results found."**<br>22.** User clicks "Back to Map" to return to the map view, keeping the same search parameters.**<br>23.** On the map page, user interacts with the HelpBot chatbot if they wish to: <br>&nbsp;&nbsp;&nbsp;&nbsp;• Report an issue with the hygiene rating <br>&nbsp;&nbsp;&nbsp;&nbsp;• Report food safety concerns |
| **Variations** | <ul><li>If no results are found, the app displays a message saying, **"No results found,"** and suggests nearby businesses.</li><li>Geolocation-based search: User allows location access to find nearby businesses. The app displays businesses around the user's current location.</li><li>Partial name search: User enters a partial name of the business. The system provides possible matches based on the partial input.</li><li>HelpBot presents reporting options when a user selects **"Report a food safety issue"** or other concerns through the chatbot.</li></ul> |  
| **Non-functional** | <ul><li>The search should return the result within **2 seconds**.</li><li>The map should automatically update with nearby suggestions if no exact matches are found.</li></ul> |  
| **Issues** | The system should handle API outages gracefully by loading backup data from a secondary **GeoJSON file** and informing users. |  





| **USE-CASE ID**  | **UC2 (Written by Hafsa Robleh)** |  
|------------------|----------------------------------|  
| **Description** | The business owner can verify their food hygiene rating for accuracy and request a correction if necessary through the chatbot. |  
| **Actors** | Business owner |  
| **Assumptions** | <ul><li>The business owner has access to the food hygiene web app and can navigate the chatbot.</li><li>The business owner's establishment has an existing hygiene rating in the database.</li><li>The chatbot is capable of handling correction requests for incorrect ratings.</li></ul> |  
| **Steps** |**<br>1.** Business owner opens the web app.**<br>2.** System requests geolocation permission: <br>&nbsp;&nbsp;&nbsp;&nbsp;• If geolocation is allowed, the map centres on the user's location, and a "You are here!" marker appears. <br>&nbsp;&nbsp;&nbsp;&nbsp;• If geolocation is denied, the marker disappears, but all food hygiene markers across Bristol are still displayed.**<br>3.** Business owner navigates to the search section.**<br>4.** Business owner enters a search term (Business Name or Location).**<br>5.** Business owner applies a hygiene rating filter (0-5) if needed.**<br>6.** System retrieves and displays search results.**<br>7.** Business owner verifies if the hygiene rating displayed is correct.**<br>8.** If incorrect, the business owner clicks "Request Correction" in the HelpBot chatbot.**<br>9.** Business owner fills out the correction request form and submits it.**<br>10.** System confirms submission and notifies the business owner.**<br>11.** Business owner may also use the "Show List" button to verify their business in the list view. |  
| **Variations** | <ul><li>If the business is not found, HelpBot suggests nearby businesses or provides an option to contact support.</li><li>If the data is missing, HelpBot prompts the business owner to report the issue through the chatbot.</li></ul> |  
| **Non-functional** | <ul><li>The web app should be available 24/7, allowing business owners to check and report issues at any time.</li></ul> |  
| **Issues** | <ul><li>The system must handle scenarios where business data is missing or outdated, directing the business owner to contact support or report the issue through the chatbot.</li></ul> |  








| **USE-CASE ID**  | **UC3 (Written by Hafsa Robleh)** |  
|------------------|----------------------------------|  
| **Description** | Developers can access the Bristol Open Data API system to implement food hygiene rating data with fallback and error handling. |  
| **Actors** | Web app developer |  
| **Assumptions** | <ul><li>The developer has access to the Bristol Open Data API and necessary API credentials.</li><li>The API functions correctly and returns data in the correct format for integration into the web app.</li><li>The developer is able to implement backup methods in case the API fails.</li></ul> |  
| **Steps** | **<br>1.** Developer registers for API access and obtains login credentials. **<br>2.** Developer integrates the API into the web app, allowing for real-time data display. **<br>3.** System displays hygiene ratings and location markers on the map upon each user query. **<br>4.** If the API fails, the system switches to loading backup data from a local **GeoJSON file** and displays a message alerting users to the fallback data source. |  
| **Variations** | <ul><li>If the API fails, the system displays an alert about using a backup data source and loads the backup **GeoJSON file**.</li><li>If the API response time exceeds **2 seconds**, the system logs a warning to help enhance future performance.</li></ul> |  
| **Non-functional** | <ul><li>The API should be secure and capable of retrieving data within **2 seconds**.</li><li>Fallback data should be available without noticeable delay to the user if the primary API fails.</li></ul> |  
| **Issues** | <ul><li>If both the API and backup data fail, the app should display an error message, asking the user to try again later.</li></ul> |  







![Case diagram official drawio (14)](https://github.com/user-attachments/assets/4aa1a7b5-6db7-4d90-bbf3-1dc5fc35c4ce)



<img width="750" alt="Robust diagram 1 " src="https://github.com/user-attachments/assets/27cac3e5-1f1d-430b-9db2-a3f7e28d83e0" />






## Software Requirements Specification
### This section was written by Hafsa Robleh
#### Functional requirements


- **FR1**: The system shall allow users to search for food hygiene ratings using business names, locations, and hygiene rating filters (0-5). (From UC1)

- **FR2**: The system shall retrieve and display food hygiene ratings from the Bristol Open Data API. (From UC1)

- **FR3**: The system shall provide two views for displaying search results:
Map View: Displays businesses as markers, which users can click to view details.
List View: Displays results in a table format, including business name, location, and hygiene rating. (From UC1)
FR4: The system shall allow users to toggle between Map View and List View without losing their search parameters. (From UC1)

- **FR5**: The system shall provide geolocation functionality to show nearby businesses based on the user's current location.
If geolocation is enabled, the system places a "You are here!" marker at the user’s location and displays nearby businesses within 500 metres.
If geolocation is denied, all businesses in Bristol are displayed, but without a user location marker. (From UC1)
FR6: The system shall allow users to filter search results by hygiene rating (0-5) in both Map View and List View. (From UC1)

- **FR7**: The system shall provide a Business Name & Location search tool at the top of the List View page to allow users to refine their results. (From UC1)

- **FR8**: The system shall dynamically update search results in real-time based on new search inputs without requiring a page refresh. (From UC1)

- **FR9**: If no results are found, the system shall:
Map View: Suggest nearby businesses within 500 metres.
List View: Display "No results found" at the top of the results table. (From UC1)

- **FR10**: The system shall allow users to navigate multiple pages of results using Next & Previous buttons when the number of results is large. (From UC1)

- **FR11**: The system shall display the total number of results at the top of the List View (e.g., "Showing 1-10 of 3,882 results"). (From UC1)

- **FR12**: The system shall ensure that the List View is not interactive—users cannot click on business names or ratings. (From UC1)

- **FR13**: The system shall provide a chatbot (HelpBot) in the Map View for users to:
Report an issue with a hygiene rating.
Report food safety concerns. (From UC1)

#### Non-Functional Requirements

- **NFR1**: The system shall return search results within 2 seconds. (From UC1)

- **NFR2**: The system shall dynamically update search results and filters without requiring a page refresh. (From UC1)

- NFR3: Switching between Map View and List View shall be seamless and retain user search inputs. (From UC1)

- **NFR4**: The system shall display an error message if the Bristol Open Data API fails and use a backup GeoJSON file for data retrieval. (From UC1)

- **NFR5**: The List View should load within 2 seconds for a smooth user experience. (From UC1)

- **NFR6**: Pagination should be efficient and responsive, allowing users to browse multiple results without performance lag. (From UC1)

- **NFR7**: The system shall handle large datasets efficiently, ensuring search, filtering, and pagination remain smooth for thousands of results. (From UC1)

- **NFR8**: The chatbot (HelpBot) shall provide instant responses to user inquiries regarding hygiene ratings and reporting issues. (From UC1)

- **NFR9**: The system shall be designed for mobile responsiveness, ensuring that both Map View and List View work on smartphones and tablets. (From UC1)

- **NFR10**: The system shall provide real-time user feedback for searches, filtering, and pagination actions (e.g., loading indicators). (From UC1)


