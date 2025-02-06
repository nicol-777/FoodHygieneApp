# Implementation

## Introduction
The web app enables users to view and search food hygiene ratings for businesses in Bristol. It allows searches by business name, location, or hygiene rating, with filtering options from 0 to 5. Users can view results on an interactive map or in a list format for easier navigation. Additionally, the app features a chatbot for reporting food safety issues. It also supports geolocation, allowing users to see nearby businesses; if geolocation is denied, users can still explore hygiene ratings across Bristol.

## Dataset 

The web application uses a GeoJSON dataset:

- Food_Hygiene_Ratings.geojson: Contains information about business addresses, hygiene ratings, and inspection dates. 

- Backup_Food_Hygiene_Ratings.geojson: Ensures the application continues to function in case loading the main dataset fails.  

## Known issues  

-  The dataset may not always be up-to-date due to delays in logging new hygiene 
  ratings.
 
- Some businesses might be missing from the dataset or have incomplete information.  


## **Configuration Data**  
The web application includes several configurable settings to enhance user experience:

- **Geolocation Permission**:  
  - Requests permission to access the user’s location.
  - If granted, the map centres on the user’s current location.  
- **Default Search Filters**:  
  - Users can filter businesses by:  
    - Name  
    - Location  
    - Hygiene rating  
- **Backup Dataset Handling**:  
  - If the main dataset fails, the app automatically loads `Backup_Food_Hygiene_Ratings.geojson`.  
- **Sorting by Distance**:  
  - The app calculates distances from the user’s location and sorts results by proximity.  



## Project Structure



<img width="812" alt="Screenshot 2025-01-22 at 03 35 25" src="https://github.com/user-attachments/assets/9b0ddf4a-0a55-4a77-a897-a1debeeb3e43" />



<img width="658" alt="Screenshot 2024-12-07 at 17 10 22" src="https://github.com/user-attachments/assets/6be54283-22d2-4e19-8705-cf08387ff4cd">



## Software Architecture


Our web application follows a layered architecture style, dividing the application into separate layers, with each layer having a specific role. This design keeps the application organised, reduces the risk of issues, and makes it easier to add new features without disrupting the entire system.  




## The three major key elements of the Architecture:   

 

## User interface (UI) layer 

This layer represents the front–end interface for users to interact with the application. The key components used to create a user-friendly interface are HTML, CSS and JavaScript. It also includes elements like the chatbot interface, search form, map and various forms for user submissions. The UI layer interacts with the business logic layer to enable user actions, such as searches, form submissions and chatbot interactions.  

 

 
## Business logic layer 

This layer processes user input and handles data filtering, validation and other middle-layer functions. The key components used are JavaScript which manages user requests, such as filtering businesses based on hygiene rating and handling chatbot responses. It interacts with the UI Layer by processing user input and sending responses to be displayed on the interface. It also interacts with the data access Layer to retrieve and filter results as required.  

 

 

## Data access layer  

This layer manages data retrieval from external sources, such as the GeoJSON file with business details. The web application fetches and filters information from the GeoJSON file, either stored locally or accessed via an API, to display business details on the map. The data  access layer provides data to the business logic layer, which then formats and presents it to the UI layer. This layer is also responsible for handling backup data loading if the primary source fails.  

 


## Architectural style 

Our web applications uses a layered architecture style. It is divided into separate layers, each is responsible for specific tasks, which helps the system remain organised and easier to maintain.  

 

In this system each layer only interacts with the one directly above or below it, creating a clear separation between functions. The UI layer connects with the business logic layer to manage user interactions, keeping the front end separate from core processing. The Business logic layer handles inputs from the UI layer and requests data from the data access layer whenever needed. The data access layer is responsible for retrieving data from external sources and providing it to the business logic layer. This separation of concerns ensures that updates or new features can be added without disrupting the entire web application.  


![component drawio (5)](https://github.com/user-attachments/assets/cecb0095-6c5f-4e43-a591-4c0901411eac)




## Bristol Open Data API

Our web application sources food hygiene data from the Bristol Open Data API. The dataset was downloaded as a GeoJSON file and is used as the primary data source. Currently, the app does not fetch live API data but relies on the static dataset.

The main query retrieves a list of food businesses along with their hygiene ratings, allowing the application to populate the map with markers representing each business and its current rating. This gives users a complete overview of all the available data. 

### Key features include:  

- Search by business name: Users can search for food businesses by entering their name. This query returns results that match the provided business name, allowing users to find the hygiene rating of a particular location.  

- Filter by hygiene rating: Users can filter results by hygiene rating. This feature allows users to see only businesses with a specific rating, from 0 to 5, making it easier to focus on businesses that meet their preferred standards. 

- Postcode search: By entering a postcode, users can view businesses with hygiene ratings in a specific area. This feature simplifies finding relevant information about locations of interest.   

 

To ensure continuous access to data, the app includes a backup data-loading mechanism. If the primary API is temporarily unavailable, the app loads data from a local GeoJSON file. This backup option ensures the app remains functional and continues to provide critical information to users.  



![class diagram drawio](https://github.com/user-attachments/assets/8a4657e5-9fb5-4580-925c-b459f54e2b71)






# User guide
TODO: Explain how each use-case works by providing step-by-step screenshots for each use-case. This should be based on a tested scenario.



# Use Case 1: Enabling Location Access - Created by Hafsa Robleh

![Use Case 1 Enabling Location Access (7)](https://github.com/user-attachments/assets/6c2dc586-b4bf-46f8-b7d8-350ff5f6c508)


# Use Case 2: Searching by Business Name - Created by Hafsa Robleh

![Your paragraph text (62)](https://github.com/user-attachments/assets/933195f7-7e19-47b9-ac22-abf244aef389)



# Use case 3: Searching by Location - Created by Hafsa Robleh

![Your paragraph text (63)](https://github.com/user-attachments/assets/ede411a2-66e3-4142-984c-24f49a10e8e1)



# Use case 4: Filtering by Hygiene Rating 0 (Urgent Improvement Necessary) - Created by Hafsa Robleh


![Your paragraph text (64)](https://github.com/user-attachments/assets/e53a6380-9bb9-44f9-86ee-362c31561459)



# Use case 5: Rating 1 (Major Improvement Necessary) - Created by Hafsa Robleh

![Your paragraph text (65)](https://github.com/user-attachments/assets/3ca3e437-eec9-4809-a526-07ddef9563c7)


# Use case 6: Rating 2 (Improvement Necessary) - Created by Hafsa Robleh


![Your paragraph text (66)](https://github.com/user-attachments/assets/27b85f2e-f992-46a8-a298-217010b349c3)




# Use case 7: Rating 3 (Generally Satisfactory) - Created by Hafsa Robleh


![Your paragraph text (67)](https://github.com/user-attachments/assets/1e30e255-9980-40e9-92d5-9505c8188e3a)




# Use case 8: Rating 4 (Good) - Created by Hafsa Robleh



![Your paragraph text (68)](https://github.com/user-attachments/assets/8f99184d-9fe6-4d8f-90ef-3b97507ec07f)




# Use case 9: Rating 5 (Very Good) - Created by Hafsa Robleh

![Your paragraph text (69)](https://github.com/user-attachments/assets/7b973624-4acf-47ac-a6bd-4b804f127f13)


# Use case 10: Opening HelpBot - Created by Hafsa Robleh


![Your paragraph text (70)](https://github.com/user-attachments/assets/03e2ec10-c942-4689-a03a-44354d6d0011)






# Use case 11: Using HelpBot Assistance - Created by Hafsa Robleh


![Your paragraph text (71)](https://github.com/user-attachments/assets/ebc4f6db-f189-4b17-b8bd-272156d42592)



# Use case 12: Consumers or Businesses - Created by Hafsa Robleh

![Your paragraph text (72)](https://github.com/user-attachments/assets/27e825ce-29b7-407b-bce4-21f1152457b9)


# Use case 13: Consumer Options in HelpBot - Created by Hafsa Robleh

![Your paragraph text (73)](https://github.com/user-attachments/assets/0d517d90-30fe-432d-ab65-cffcaad4580e)


# Use case 14: Reporting a Food Safety Issue (Consumers) - Created by Hafsa Robleh


![Your paragraph text (87)](https://github.com/user-attachments/assets/58ff229c-1717-4d16-89c8-86997915d64b)



# Use case 15: Successful Submission of a Report - Created by Hafsa Robleh

![Your paragraph text (75)](https://github.com/user-attachments/assets/95293a23-48b3-4d4b-a6fb-3f4bed24a748)


# Use case 16:  Returning to the Main Search Interface - Created by Hafsa Robleh

![Your paragraph text (76)](https://github.com/user-attachments/assets/73ee510c-ff4f-4a31-8106-737491c87be1)


# Use case 17: Business Options in HelpBot - Created by Hafsa Robleh

![Your paragraph text (77)](https://github.com/user-attachments/assets/c7b09f14-c2ff-487c-ba19-8ec829266f5b)


# Use case 18: Reporting a Food Safety Incident (Business) - Created by Hafsa Robleh


![Your paragraph text (88)](https://github.com/user-attachments/assets/b3d8796c-44b6-4402-a37b-7892a3de5b60)



# Use case 19: Successful Submission of a Report  - Created by Hafsa Robleh

![Your paragraph text (79)](https://github.com/user-attachments/assets/28fd38e5-85a4-4467-80d9-b55fcb89ce2a)




# Use case 20: Returning to the Main Search Interface - Created by Hafsa Robleh


![Your paragraph text (80)](https://github.com/user-attachments/assets/c8c2de5e-f098-417c-b496-ca2c8e27ff9f)




# Use case 21: Searching for a Business When No Match is Found - Created by Hafsa Robleh


![Your paragraph text (81)](https://github.com/user-attachments/assets/5951b24f-e220-4704-bb6b-38ecf1b46a50)




# Use case 22: No Exact Matches Found - Created by Hafsa Robleh


![Your paragraph text (82)](https://github.com/user-attachments/assets/a93926e2-7664-4798-ad10-397c39d3296b)




# Use case 23: Viewing Nearby Businesses - Created by Hafsa Robleh


![Your paragraph text (83)](https://github.com/user-attachments/assets/efe0084c-7b37-45bd-9c97-96b8ddd7d0d7)

# Use case 24:  Map View with Show List Button - Created by Hafsa Robleh

![Your paragraph text (84)](https://github.com/user-attachments/assets/e2c1c89e-89cf-4646-806b-0061c66dfd52)



# Use case 25: List-Based Search View - Created by Hafsa Robleh


![Your paragraph text (89)](https://github.com/user-attachments/assets/bee1ddac-38a1-4028-ba66-0e2d53d02734)

