# Design

## User Interface design
### Design Section written by: Hafsa Robleh
TODO: Specify and develop a user interface mockup using a wireframe.



![front 4  (7)](https://github.com/user-attachments/assets/004c597f-1faa-4a55-811f-5d398c2467ac)





![last 5-9 (3)](https://github.com/user-attachments/assets/d408920b-e8c8-487f-a089-06432997c393)





![nearby business](https://github.com/user-attachments/assets/9840537f-f9a2-4865-858e-1b89d5578a1c)






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




