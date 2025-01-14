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

![Use Case 1 Enabling Location Access](https://github.com/user-attachments/assets/476e5bab-a24a-4d87-829e-9e9d04713986)



# Use Case 2: Searching by Business Name  - Created by Hafsa Robleh

![Your paragraph text (1)](https://github.com/user-attachments/assets/e311d051-9e3a-4ef1-9df8-b76114bce364)


