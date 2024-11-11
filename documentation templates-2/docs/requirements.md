# Requirements

## User Needs

### User stories
TODO: Write brief user stories to explain how various actors would interact with the system to accomplish a goal.
    Express these in the form from agile development:- As a (role) I want (goal) so that (benefit).
● As user, I want to search for food hygiene ratings by business name, location or rating so i can make informed choices about where to eat or shop.  

● As a web app developer, I want to be able to have access to the Bristol Open Data API and implement it into the app to retrieve accurate food hygiene data.  

● As a business owner, I want to request corrections to my business’s food hygiene rating via the chatbot so that I can ensure accurate information is displayed. 

● As a user, I want the web app to suggest nearby businesses if my search returns no results, so I can find alternatives.  

● As a user, I want to filter search results by rating so that I can identify businesses with a high standard of food hygiene.  

● As a user, I want to report food safety issues through the web app so that i can alert authorities to potential risks.  

● As a business owner, I want to appeal my hygiene rating so that i can address any discrepancies.  

● As a user, I want the web app to be accessible on mobile devices so that i can use it anywhere.  

● As a user, I want to receive confirmation after submitting a report so that I know my submission was successful.  

 
### Actors
TODO: List and describe the actors/users for this product.

● Users: individuals who want to view and search for food hygiene ratings for local food businesses in Bristol to make informed decisions on where to eat and report issues or submit appeals.  

● Business owners: Food business owners in Bristol who want to access information about their food hygiene rating to maintain accurate and UpToDate information and who need to report corrections, appeal rating, or report incidents.  

● Web app developer: Responsible for creating and maintaining the database, managing corrections, handling appeals and ensuring that the app is working properly with APIs to retrieve data from Bristol Open data. 


### Use Cases
TODO: Describe each use case (at least one per team member).
    Give each use case a unique ID, e.g. UC1, UC2, ...
    Summarise these using the use-case template below.

|  USE-CASE ID  | UC1| 
| -------------------------------------- | ------------------- |
| **Description** |Users can search for food hygiene ratings and find restaurants with good ratings and report a food safety issue. |
| **Actors** |Users (general public, consumers) |
|**Assumptions** | <ul><li>The user knows the name, location, or rating of the restaurant.</li><li>The user is familiar with using web apps and entering search terms.</li><li>The user has access to an internet device.</li><li>The food business being searched has a hygiene rating available on the platform. </li><li>The user is able to interact with the chatbot to report issues.|
| **Steps** | 1. User opens the web app.<br>2. User enters a search term, such as the restaurant name, location, or selects a rating filter.<br>3. The system sends a request to the API.<br>4. The web app displays the food hygiene ratings.<br>|
|**Variations** |<ul><li>If no results are found, the app displays a message saying, “No results found,” and suggests nearby options.</li><li> Search by current location (Geolocation): User allows location access to find nearby businesses. App displays businesses around the user's current location.</li><li>Partial name search: User enters a partial name of the business. The system provides possible matches based on the partial input.
| **Non-functional** |<ul><li>The search should return the result within 2 seconds on the screen.</li><li>The map should automatically update with nearby suggestions if no results match exactly. |
| **Issues** |  The system should handle API outages gracefully by loading backup data from a secondary GeoJSON file and informing users. |






|  USE-CASE ID  | UC2| 
| -------------------------------------- | ------------------- |
| **Description** |The business owner can verify their food hygiene rating for accuracy and request a correction if necessary.  |
| **Actors** |Business owner |
| **Assumptions** | <ul><li>The business owner has access to the food hygiene web app.</li><li>Their food business has already been inspected and rated.</li><li>The business owner can navigate through the chatbot to request a correction. </li><li>The chatbot is available for handling correction requests.
| **Steps** | 1. Business owner opens web app.<br>2. Business owner searches for their food business by name or location.<br>3. The system displays their food hygiene rating and other details.<br>4. If the information is incorrect, the business owner uses the chatbot to navigate to the correction form.<br>|
|*Variations** | <ul><li>If the information on the platform is incorrect, the business owner can report it through the chatbot. The chatbot provides options to guide the user to the correction request form.</li><li>Appeal for hygiene rating change after new inspection: If the business has a recent inspection, The owner can request an update through the chatbot.|
| **Non-functional** |The web app should be available 24/7, allowing business owners to check their ratings anytime.|
| **Issues** |The web app must be capable of handling cases where a food business data is missing or outdated.  |











|  USE-CASE ID  | UC3| 
| -------------------------------------- | ------------------- |
| **Description** | Developers can access the Bristol Open Data API system for implementing food hygiene rating data.  |
| **Actors** |Web app developer |
| **Assumptions** | <ul><li> The developer has access to the Bristol Open Data API and necessary API credentials.</li><li> The API is easy to follow.</li><li>The API functions properly and returns data into the correct format. </li><li>The developer can integrate the APIs into the web app to make sure it functions correctly.
| **Steps** |1. Developer registers for API access.<br>2. Developer obtains login details and instructions.<br>3. Developer integrates the API into the food hygiene web app.<br>4. Developer tests to ensure the data displays correctly.<br>|
| **Variations** |If the API fails, the developer should troubleshoot and report the issue to Bristol Open data.|
| **Non-functional** |The API should be secure, and it should send data quickly within 2 seconds.  |
| **Issues** |If the API is slow or shuts down, the app should display a message or provide an alternative solution to the user.  |









TODO: Your Use-Case diagram should include all use-cases.
![Case diagram official drawio (12)](https://github.com/user-attachments/assets/683a52c8-0202-48e4-9f4e-9290c9d6b2d1)


## Software Requirements Specification
### Functional requirements
● FR1 The system shall allow users to search for food hygiene rating using business names, location or rating filters (From UC1)  

● FR2 The system shall retrieve and display food hygiene ratings from the Bristol Open Data API. (From UC1) 

● FR3 The system shall allow food business owners to search for their food hygiene rating by name or location. (From UC2) 

● FR4 The system shall guide business owners to request correction or report issues to their food hygiene data through a chatbot that directs them to the correction or reporting issue form. (From UC2) 

● FR5 The system shall guide users to report issues to their food hygiene data through a chatbot that directs them to the reporting issue form. (From UC1) 

● FR6 The system shall allow web app developers to integrate and test the Bristol Open Data API to ensure the correct data is retrieved and displayed. (From UC3)  

### Non-Functional Requirements
● NFR1 The system shall respond to user searches within 2 seconds. (From UC1, UC3) 

● NFR2 The system shall be available 24/7, allowing business owners to access it anytime. (From UC2)  

● NFR3 The system shall ensure data security through HTTPS and encryption and GDPR regulations. (From UC3)  

● NFR4 The system shall handle API issues by providing user-friendly messages
or suggesting alternatives when the API is down.  (From UC1, UC3) 





