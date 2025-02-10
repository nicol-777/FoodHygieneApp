# Design

## User Interface design
### Design Section written by: Hafsa Robleh
TODO: Specify and develop a user interface mockup using a wireframe.


![front 4  (9)](https://github.com/user-attachments/assets/fa611194-2337-4d8d-9d8e-a5b75f53dea4)


![last 5-9 (6)](https://github.com/user-attachments/assets/22e5ff64-8bcf-4f0f-8fdf-9e84cf4f0bcd)



![nearby business (1)](https://github.com/user-attachments/assets/66470052-27e1-48ec-acb8-ae07c2557ef3)



![show list ](https://github.com/user-attachments/assets/fc4ed92d-ba64-4978-a84d-8ad07d97831b)



# User Interface design 

The user interface (UI) for the food hygiene rating web application is designed to be simple, user-friendly, and accessible on various devices. The application allows users to search for food hygiene ratings and view them on an interactive map. Key features include a chatbot for assistance, and forms for business owners and consumers to report issues or request corrections.  

 

# Design goals 

- Users can search for food hygiene ratings by business name, location and hygiene rating. 

- The search results are displayed on a map, with markers showing detailed business information.   

 
- The app employs a modern, clean design using primary greenish-blue (#00796b), paired with white text for readability. 

 
- The interface adapts seamlessly across different screen sizes, ensuring accessibility on both mobile and desktop.
 
  
- Accessiblity features include clear labels, large clickable areas, keyboard navigation, and ARIA attributes for screen readers. 

 
# Key sections of the wireframe:  

## Header section 
The header section contains the title "Food Hygiene Ratings" and a brief description: "Use our online service to find a food business’s hygiene rating."
Additionally, an image is displayed in a circular frame, visually representing food hygiene ratings. This enhances the theme and improves the overall look of the application.
 

## Search section  

- Business name: Allows users to search for businesses by name. 

- Location: Allows users to search by street, town, or postcode. 

- Rating filter: Users can filter results based on the hygiene rating (0-5 scale).

- Search & Reset Buttons: Styled with a rounded edges for a modern aesthetic and easy 
  usability.  

- Dropdown Style: The filter dropdown has a modern UI with custom style, including a 
  shadow effect and a hover transition.



## Search Results & Map section 

The interactive map displays food hygiene ratings as clickable markers, allowing users to explore businesses easily. Clicking a marker reveals a pop-up containing key details such as the business name, address, and hygiene rating. The map also includes geolocation support, enabling users to find nearby businesses based on their current location. If no exact match is found, the system provides a prompt suggesting similar businesses to help users refine their search. Additionally, zero-rated businesses are highlighted in red for quick identification, ensuring that users are aware of potential food safety concerns.




# Show list feature 

- Users can toggle between **Map** View and **List View** using the "Show List" button.

- **Map View (default)**:

   - Displays hygiene ratings as interactive markers.

    - Clicking a marker reveals business details in a pop-up.

- **List View (via "Show List" Button):**

    - Displays businesses in a structured table format.

    - Includes columns for **Business Name, Address, and Hygiene Rating.**

    - Users can scroll through pages for more results.

The **Show List / Show Map** button automatically updates based on the user's selection.





## Geolocation   
The web app uses **geolocation** to help users find food businesses near them.  

- **If geolocation is allowed:**  
  - The map centres on the user’s location.  
  - A **blue marker** labelled **"You are here!"** appears to show their position.  
  - Nearby businesses within **500 metres** are shown.  

- **If geolocation is denied:**   
  - The **blue "You are here!" marker disappears**.
  - The map shows all hygiene rating markers across the Bristol area.
  - Users can still **see all restaurant hygiene markers** and **click them to 
    view details**.
    

## Chatbot (HelpBot)  
The HelpBot is positioned in the bottom-right corner of the screen to assist users with navigation and common queries. Designed for accessibility, it supports keyboard navigation and screen reader compatibility, making it user-friendly for a diverse audience. Users can minimise or close the chatbot as needed to avoid distractions.
The chatbot also offers structured conversation options, allowing users to choose between consumer and business-related queries for a more efficient support experience. To enhance engagement, it features an animated icon with a speech bubble, making it visually appealing and easy to locate on the interface.

  
## Consumer and business forms  
Consumers and business owners can report issues through dedicated forms accessible via the chatbot. Consumers can report food safety concerns, labelling issues, unregistered businesses, and food-related crimes, while business owners have the option to report similar concerns or request rating corrections. The forms are designed with clear labels, structured spacing, and input validation to ensure a seamless and error-free user experience.



## Accessing forms 
Both consumers and business owners can access the forms through the chatbot. When users select either “Consumer” or “Business,” only the relevant options are displayed, ensuring a clear and organised interface. This helps prevent confusion and streamlines the reporting process by displaying only the necessary fields for each user type.


## Form structure  

- Each form requests the user’s name, email, and a description of the issue.
- Clear labels, accessible placeholders, and structured spacing ensure that the forms are easy to complete.
- All form elements are labelled, and a back button is included in the chatbot to help users navigate smoothly.

 

## Confirmation message  

Once a form is successfully submitted, a confirmation message appears at the top of the screen, informing users that their request has been received and is being reviewed. This message improves visibility and reassures users that their concerns are being addressed, enhancing overall user confidence in the system.




