# Implementation

## Introduction
The web app allows users to view and search for food hygiene ratings for various food businesses based in Bristol. Users can search by business name, location, or filter by rating. Additionally, it includes chatbot support for consumers and businesses.  

## Dataset 

The web application uses a GeoJSON dataset (Food_Hygiene_Ratings.geojson) that contains information about business addresses, hygiene ratings, and inspection dates. A backup GeoJSON file is also available to ensure the application continues to function in case loading the main dataset fails.  

## Known issues  

● The dataset may not always display the most up-to-date information if inspections are not logged promptly. 
● Some businesses might be missing from the dataset or have incomplete information.  


## Configuration data  

The web application uses geolocation to centre the map on your current location, helping you easily find businesses nearby.  It also allows you to search and filter results by business name, location, or hygiene rating.  

## Customisation options

Customisation options are available in the app’s settings menu, where users can manage geolocation permission and choose default filters for searches. Additionally, developers can adjust various app behaviours through other configuration methods, such as modifying the app’s setting or using environment variables to enable the backup dataset, setting API endpoints, or defining default map centring behaviour. These settings are designed to ensure flexibility and control for both end-users and developers, allowing the app to function according to user preferences and the developer’s needs

## Project Structure
TODO: Provide an outline of the project folder structure and the role of each file within it.
provide a table listing the number of jslint warnings/reports for each module.

## Software Architecture
TODO: Describe the major components of your architecture. Are any particular architectural styles being used?

![Insert your component Diagram here](images/component.png)

## Bristol Open Data API
TODO: Document each query to Bristol Open Data

![UML Class diagrams representing JSON query results](images/class1.png)
TODO: Repeat as necessary

# User guide
TODO: Explain how each use-case works by providing step-by-step screenshots for each use-case. This should be based on a tested scenario.
