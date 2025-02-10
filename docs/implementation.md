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



## Food Hygiene App - Project Structure



<img width="911" alt="Screenshot 2025-02-07 at 17 31 57" src="https://github.com/user-attachments/assets/8a1e056c-c29b-49d2-b999-d41e964952d6" />


<img width="915" alt="Screenshot 2025-02-07 at 17 33 38" src="https://github.com/user-attachments/assets/ad3647f7-d5f8-4d99-a252-2c8169a39cf3" />


<img width="913" alt="Screenshot 2025-02-07 at 17 34 17" src="https://github.com/user-attachments/assets/a6e90f22-589f-49b5-a01d-df02f6b9d64d" />


<img width="914" alt="Screenshot 2025-02-07 at 17 34 50" src="https://github.com/user-attachments/assets/09a8d1df-72da-4738-afe0-a97e6861f363" />


<img width="915" alt="Screenshot 2025-02-07 at 17 35 20" src="https://github.com/user-attachments/assets/915382cc-f19e-40a0-a5f5-c38d3899a86c" />


<img width="915" alt="Screenshot 2025-02-07 at 17 36 07" src="https://github.com/user-attachments/assets/7c8bbfa1-63c3-478c-accd-811db84fe2db" />


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


<img width="728" alt="Screenshot 2025-02-06 at 02 49 36" src="https://github.com/user-attachments/assets/2f48f8fc-f7ca-491d-95e9-b92dd9dfb0a0" />




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


![Your paragraph text (95)](https://github.com/user-attachments/assets/8af3f163-c25b-46db-bd0b-e1d460851e37)



# Use case 5: Rating 1 (Major Improvement Necessary) - Created by Hafsa Robleh


![Your paragraph text (96)](https://github.com/user-attachments/assets/8900f648-60f3-40b7-8a86-68b0611d1be1)




# Use case 6: Rating 2 (Improvement Necessary) - Created by Hafsa Robleh


![Your paragraph text (97)](https://github.com/user-attachments/assets/7d659548-52be-442b-bf57-cd18b06487ab)




# Use case 7: Rating 3 (Generally Satisfactory) - Created by Hafsa Robleh


![Your paragraph text (98)](https://github.com/user-attachments/assets/52328ced-2a90-4e56-a3cd-27a347dba940)





# Use case 8: Rating 4 (Good) - Created by Hafsa Robleh



![Your paragraph text (99)](https://github.com/user-attachments/assets/a8fe6f3b-4433-413f-94ee-273c54df6296)





# Use case 9: Rating 5 (Very Good) - Created by Hafsa Robleh


![Your paragraph text (100)](https://github.com/user-attachments/assets/343242de-0fbc-48d9-8808-c761d8e44012)




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


![Your paragraph text (91)](https://github.com/user-attachments/assets/ef5e2652-a6c5-494f-9996-d8930421d1dd)



# Use case 25: List-Based Search View - Created by Hafsa Robleh


![Your paragraph text (89)](https://github.com/user-attachments/assets/bee1ddac-38a1-4028-ba66-0e2d53d02734)


# Use Case 26: Searching for a Food Hygiene Rating on list view  
A user wants to search for the food hygiene rating of a specific restaurant.



![Your paragraph text - 2025-02-10T011653 893](https://github.com/user-attachments/assets/74d96fa4-9869-414a-8547-6fe8e01d5aa2)






# Use Case 27 : Filtering by Hygiene Rating 0 (Urgent Improvement Necessary) on list view   - Created by Hafsa Robleh
A user wants to see only restaurants with a specific hygiene rating.



![Your paragraph text - 2025-02-10T012802 850](https://github.com/user-attachments/assets/a5522007-6168-4d97-b447-87a623cd4d70)





# Use Case 28 : Rating 1 (Major Improvement Necessary) - Created by Hafsa Robleh


![Your paragraph text - 2025-02-10T012652 892](https://github.com/user-attachments/assets/60d338ea-58a9-4256-8d1c-a172ad43c7ff)




# Use Case 29 : Rating 2 (Improvement Necessary) - Created by Hafsa Robleh

![Your paragraph text - 2025-02-10T012848 790](https://github.com/user-attachments/assets/e7a994a3-eb0b-4b1f-9d89-2954e4e23e3c)




# Use Case 30 : Rating 3 (Generally Satisfactory) - Created by Hafsa Robleh


![Your paragraph text - 2025-02-10T013741 909](https://github.com/user-attachments/assets/b27f76f7-e4d4-4ff7-9f06-410b97be7ad1)





# Use Case 31: Rating 4 (Good) - Created by Hafsa Robleh


![Your paragraph text - 2025-02-10T013800 304](https://github.com/user-attachments/assets/f0b4a942-7f9a-47aa-a17a-621a5e9b822d)






# Use Case 32: Rating 5 ( Very Good) - Created by Hafsa Robleh

![Your paragraph text - 2025-02-10T013305 813](https://github.com/user-attachments/assets/35211730-8477-4832-8402-e70cc1031cff)




# Use case 33 : Handling "No Results Found" in Food Hygiene Rating Search  - Created by Hafsa Robleh
The user searches for a food hygiene rating by entering a business name (e.g., "RandomXYZ") and optionally a location (town, street, or postcode). However, the system returns "No results found." indicating that no matching records exist.


![Your paragraph text - 2025-02-10T013438 939](https://github.com/user-attachments/assets/158aa59c-7562-4f69-948b-5e3b1e57d2a3)



