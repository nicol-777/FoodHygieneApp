# Implementation

## Introduction

TODO: Describe the system implemented (Describe the dataset. Are there any known issues? Describe any configuration data).

The web app allows users to view and search for food hygiene ratings for various food businesses based in Bristol. Users can search by business name, location, or filter by rating. Additionally, it includes chatbot support for consumers and businesses.  

## Dataset 

The web application uses a GeoJSON dataset:

● Food_Hygiene_Ratings.geojson: Contains information about business addresses, hygiene ratings, and inspection dates. 

● Backup_Food_Hygiene_Ratings.geojson: Ensures the application continues to function in case loading the main dataset fails.  

## Known issues  

● The dataset may not always reflect up-to-date inspection results due to delays  in logging new hygiene ratings. 

● Some businesses might be missing from the dataset or have incomplete information.  

## Configuration data  

The web application uses geolocation to centre the map on your current location, helping them easily find businesses nearby. It also allows users to search and filter results by business name, location, or hygiene rating.  


### Customisation options
Customisation options are available in the app’s settings menu for users to manage basic settings such as: 

● Geolocation permission: Allow or deny location access to centre the map on the user's current location. 

● Default search filters: Users can set preferences like filtering by business name, location, or hygiene rating. 

Advanced settings can only be modified by developers to adjust the app's  behaviour. These include: 

● Enable the backup dataset: useBackup: true

● Setting API endpoints: apiURL: "https://..."

● Define default map centring behaviour: Specify the initial map location when the app loads. 

These settings are designed to ensure flexibility and control for both end-users and developers, allowing the app to function according to user preferences and developer requirements.

## Project Structure
TODO: Provide an outline of the project folder structure and the role of each file within it.
provide a table listing the number of jslint warnings/reports for each module.



<img width="761" alt="Screenshot 2024-12-07 at 17 06 23" src="https://github.com/user-attachments/assets/0d593ee8-db07-478f-94fe-ddc780f9196d">


<img width="658" alt="Screenshot 2024-12-07 at 17 10 22" src="https://github.com/user-attachments/assets/6be54283-22d2-4e19-8705-cf08387ff4cd">



## Software Architecture
TODO: Describe the major components of your architecture. Are any particular architectural styles being used?

Our web application uses a layered architecture style, dividing the application into separate layers, with each layer having a specific role. This design keeps the application organised, reduces the risk of issues, and makes it easier to add new features without disrupting the entire system.  




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
TODO: Document each query to Bristol Open Data
Our web application uses the Bristol Open Data API to retrieve information about food hygiene ratings in Bristol. 

The main query retrieves a list of food businesses along with their hygiene ratings, allowing the application to populate the map with markers representing each business and its current rating. This gives users a complete overview of all the available data. 

### Key features include:  

● Search by business name: Users can search for food businesses by entering their name. This query returns results that match the provided business name, allowing users to find the hygiene rating of a particular location.  

● Filter by hygiene rating: Users can filter results by hygiene rating. This feature allows users to see only businesses with a specific rating, from 0 to 5, making it easier to focus on businesses that meet their preferred standards. 

● Postcode search: By entering a postcode, users can view businesses with hygiene ratings in a specific area. This feature simplifies finding relevant information about locations of interest.   

 

To ensure uninterrupted access to data, the app includes a backup data-loading feature. If the primary API is temporarily unavailable, the app loads data from a local GeoJSON file. This backup option ensures the app remains functional and continues to provide critical information to users.  



![class diagram drawio](https://github.com/user-attachments/assets/8a4657e5-9fb5-4580-925c-b459f54e2b71)




TODO: Repeat as necessary

# User guide
TODO: Explain how each use-case works by providing step-by-step screenshots for each use-case. This should be based on a tested scenario.



# Use Case 1: Enabling Location Access - Created by Hafsa Robleh

![Use Case 1 Enabling Location Access (5)](https://github.com/user-attachments/assets/1ac1eef6-c925-42b0-a02c-8717382bd3d8)



# Use Case 2: Searching by Business Name - Created by Hafsa Robleh



![Your paragraph text (8)](https://github.com/user-attachments/assets/61de9764-6c14-4f89-9ce6-4072b4d0601d)



# Use case 3: Searching by Location - Created by Hafsa Robleh


![Your paragraph text (5)](https://github.com/user-attachments/assets/c96ca3b0-0060-48db-8626-9fd137e370e0)

# Use case 4: Filtering by Hygiene Rating 0 (Urgent Improvement Necessary) - Created by Hafsa Robleh


![Your paragraph text (10)](https://github.com/user-attachments/assets/6c95224b-5cec-43a5-b8f5-09f8deabb263)



# Use case 5: Rating 1 (Major Improvement Necessary) - Created by Hafsa Robleh
![Your paragraph text (11)](https://github.com/user-attachments/assets/72716e12-a4a9-42d9-b87a-797f5763770a)


# Use case 6: Rating 2 (Improvement Necessary) - Created by Hafsa Robleh



![Your paragraph text (17)](https://github.com/user-attachments/assets/fb249af8-c342-4f58-a60e-d4c2418ee5e9)






# Use case 7: Rating 3 (Generally Satisfactory) - Created by Hafsa Robleh

![Your paragraph text (18)](https://github.com/user-attachments/assets/1086fd09-3ea5-4314-91f1-8d76928e4f31)





# Use case 8: Rating 4 (Good) - Created by Hafsa Robleh


![Your paragraph text (20)](https://github.com/user-attachments/assets/8f069082-c82b-4223-b260-975797d34f40)





# Use case 9: Rating 5 (Very Good) - Created by Hafsa Robleh
![Your paragraph text (21)](https://github.com/user-attachments/assets/26959f82-f9d3-424f-9ace-55f83fbed5a6)



# Use case 10: Opening HelpBot - Created by Hafsa Robleh

![Your paragraph text (25)](https://github.com/user-attachments/assets/bc7b1ac6-98d8-4949-ba1e-747fdf4b7bca)


# Use case 11: Using HelpBot Assistance - Created by Hafsa Robleh



![Your paragraph text (26)](https://github.com/user-attachments/assets/24f18406-c947-4ffd-afd9-77817feaa205)




# Use case 12: Consumers or Businesses - Created by Hafsa Robleh

![Your paragraph text (30)](https://github.com/user-attachments/assets/11205c61-4bb3-4c77-903a-13cf446e4c79)



# Use case 13: Consumer Options in HelpBot - Created by Hafsa Robleh

![Your paragraph text (32)](https://github.com/user-attachments/assets/88e3274f-a1f2-4961-9fa6-7b4059ca5592)



# Use case 14: Reporting a Food Safety Issue (Consumers) 

![Your paragraph text (34)](https://github.com/user-attachments/assets/c73eeb29-c181-422f-9ec2-9a6e938304e7)



# Use case 15: Successful Submission of a Report


![Your paragraph text (36)](https://github.com/user-attachments/assets/e2334b0f-5d7e-424d-b41a-469ab11244fa)



# Use case 16:  Returning to the Main Search Interface


![Your paragraph text (37)](https://github.com/user-attachments/assets/326ddec8-93e4-4baa-86db-d1983f7f4122)


# Use case 17: Business Options in HelpBot 

![Your paragraph text (38)](https://github.com/user-attachments/assets/a1dc52f3-6ea2-41be-a332-42ab3db98f02)


# Use case 18: Reporting a Food Safety Incident (Business)


![Your paragraph text (39)](https://github.com/user-attachments/assets/76b7f59d-9061-42b5-83cb-ffc7467d98ba)

# Use case 19: Successful Submission of a Report
![Your paragraph text (36)](https://github.com/user-attachments/assets/e2334b0f-5d7e-424d-b41a-469ab11244fa)


# Use case 20: Returning to the Main Search Interface

![Your paragraph text (37)](https://github.com/user-attachments/assets/326ddec8-93e4-4baa-86db-d1983f7f4122)




