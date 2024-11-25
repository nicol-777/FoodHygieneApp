# Requirements

## User Needs

### User stories
TODO: Write brief user stories to explain how various actors would interact with the system to accomplish a goal.
    Express these in the form from agile development:- As a (role) I want (goal) so that (benefit).

● As a user, I want to search for food hygiene ratings by business name, location, or rating, so i can make informed choices about where to eat or shop.  

● As a web app developer, I want to have access to the Bristol Open Data API and implement it into the app to retrieve accurate food hygiene data.  

● As a business owner, I want to request corrections to my business’s food hygiene rating via the chatbot, so that I can ensure accurate information is displayed. 

● As a user, I want the web app to suggest nearby businesses if my search returns no results, so I can find alternatives.  

● As a user, I want to filter search results by rating, so i can identify businesses with a high standard of food hygiene.  

● As a user, I want to report food safety issues through the web app, so i can alert authorities to potential risks.  

● As a business owner, I want to appeal my hygiene rating, so i can address any issues.  

● As a user, I want the web app to be accessible on mobile devices, so 
i can use it anywhere.  

● As a user, I want to receive confirmation after submitting a report, so I know my submission was successful.  

 
### Actors
TODO: List and describe the actors/users for this product.

● Users: individuals who want to view and search for food hygiene ratings for local food businesses in Bristol, to make informed decisions on where to eat, and to report issues or submit appeals.  

● Business owners: Food business owners in Bristol who want to access information about their food hygiene rating, to maintain accurate and up-to-date information, and report corrections, appeal rating, or report incidents.  

● Web app developer: Responsible for creating and maintaining the database, managing corrections, handling appeals and ensuring that the app is works properly with APIs to retrieve data from Bristol Open Data. 


### Use Cases
TODO: Describe each use case (at least one per team member).
    Give each use case a unique ID, e.g. UC1, UC2, ...
    Summarise these using the use-case template below.

|  USE-CASE ID  | UC1| 
| -------------------------------------- | ------------------- |
| **Description** |Users can search for food hygiene ratings and find restaurants with good ratings or report a food safety issue. |
| **Actors** |Users (general public, consumers) |
|**Assumptions** | <ul><li>The user knows the name, location, or rating of the restaurant.</li><li>The user is familiar with using web apps and entering search terms.</li><li>The user has access to an internet-enabled device.</li><li>The food business being searched has a hygiene rating available on the platform. </li><li>The user is able to interact with the HelpBot chatbot to report issues.|
| **Steps** | 1. User opens the web app and navigates to the search section.<br>2. User enters a search term, such as the business name, location, or selects a rating filter.<br>3. The system sends a request to the Bristol Open Data API.<br>4. System displays the search results on the map with markers for each matching business.<br>5. If no exact matches are found, the system provides a fallback option with nearby businesses within a 500-meter radius.<br>6. User clicks on a business marker to view details, including hygiene rating and address.<br>7. User interacts with the HelpBot chatbot if they wish to report an issue with the hygiene rating or other food safety concerns. |
|**Variations** |<ul><li>If no results are found, the app displays a message saying, “No results found,” and suggests nearby businesses. </li><li> Geolocation-based search: User allows location access to find nearby businesses. The App displays businesses around the user's current location.</li><li>Partial name search: User enters a partial name of the business. The system provides possible matches based on the partial input.</li><li>HelpBot presents reporting options when a user selects "Report a food safety issue" or other concerns through the chatbot.
| **Non-functional** |<ul><li>The search should return the result within 2 seconds.</li><li>The map should automatically update with nearby suggestions if no exact matches are found. |
| **Issues** |  The system should handle API outages gracefully by loading backup data from a secondary GeoJSON file and informing users. |






|  USE-CASE ID  | UC2| 
| -------------------------------------- | ------------------- |
| **Description** |The business owner can verify their food hygiene rating for accuracy and request a correction if necessary through the chatbot.  |
| **Actors** |Business owner |
| **Assumptions** | <ul><li>The business owner has access to the food hygiene web app and can navigate the chatbot.</li><li>The business owner's establishment has an existing hygiene rating in the database.</li><li>The chatbot is capable of handling correction requests for incorrect ratings.
| **Steps** | 1. Business owner opens web app and searches for their food business by name or location.<br>2. System displays their food hygiene rating along with other relevant details.<br>3. If the information is incorrect, the business owner uses the HelpBot chatbot to navigate to the correction request form.<br>4. System presents the correction form, allowing the business owner to provide details and submit a request for updating their rating information. <br>|
|*Variations** | <ul><li> If the business is not found, HelpBot suggests nearby businesses or provides an option to contact support.</li><li> If the data is missing, HelpBot prompts the business owner to report the issue through the chatbot.|
| **Non-functional** |The web app should be available 24/7, allowing business owners to check and report issues at any time.|
| **Issues** |The system must handle scenarios where business data is missing or outdated, directing the business owner to contact support or report the issue through the chatbot.  |











|  USE-CASE ID  | UC3| 
| -------------------------------------- | ------------------- |
| **Description** | Developers can access the Bristol Open Data API system to implementing food hygiene rating data with fallback and error handling.  |
| **Actors** |Web app developer |
| **Assumptions** | <ul><li> The developer has access to the Bristol Open Data API and necessary API credentials.</li><li> The API functions correctly and returns data in the correct format for integration into the web app.</li><li>The developer is able to implement backup methods in case the API fails.
| **Steps** |1. Developer registers for API access and obtains login credentials.<br>2. Developer integrates the API into the web app, allowing for real-time data display.<br>3. System displays hygiene ratings and location markers on the map upon each user query.<br>4. If the API fails, the system switches to loading backup data from a local GeoJSON file and displays a message alerting users to the fallback data source. |
| **Variations** |<ul><li> If the API fails, the system displays an alert about using a backup data source and loads the backup GeoJSON file.</li><li> If the API response time exceeds 2 seconds, the system logs a warning to help enhance future performance.  |
| **Non-functional** | The API should be secure, capable of retrieving data within 2 seconds. Fallback data should be available without noticeable delay to the user if the primary API fails.|
| **Issues** |If both the API and backup data fail, the app should display and error message, asking the user to try again later. 








TODO: Your Use-Case diagram should include all use-cases.
![Case diagram official drawio (12)](https://github.com/user-attachments/assets/683a52c8-0202-48e4-9f4e-9290c9d6b2d1)


## Software Requirements Specification
### Functional requirements
● FR1 The system shall allow users to search for food hygiene rating using business names, location or rating filters (From UC1)  

● FR2 The system shall retrieve and display food hygiene ratings from the Bristol Open Data API. (From UC1) 

● FR3 The system shall allow food business owners to search for their food hygiene rating by name or location. (From UC2) 

● FR4 The system shall guide business owners to request correction or report issues to their food hygiene data through a chatbot that directs them to the correction or reporting issue form. (From UC2) 

● FR5 The system shall guide users to report issues through a chatbot that directs them to the reporting issue form. (From UC1) 

● FR6 The system shall allow web app developers to integrate and test the Bristol Open Data API to ensure the correct data is retrieved and displayed. (From UC3)  

### Non-Functional Requirements
● NFR1 The system shall respond to user searches within 2 seconds. (From UC1, UC3) 

● NFR2 The system shall be available 24/7, allowing business owners to access it anytime. (From UC2)  

● NFR3 The system shall ensure data security through HTTPS, encryption and GDPR compliance. (From UC3)  

● NFR4 The system shall handle API issues by providing user-friendly messages
  or suggesting alternatives when the API is down.  (From UC1, UC3) 





