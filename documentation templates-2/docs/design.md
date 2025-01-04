# Design

## User Interface design
### Design Section written by: Hafsa Robleh
TODO: Specify and develop a user interface mockup using a wireframe.




![front 4  (3)](https://github.com/user-attachments/assets/dd8c1741-bf2b-4f59-8da9-08a76e272ad0)


![last 5-9](https://github.com/user-attachments/assets/db8963c7-0249-4da2-a47e-77d37e78c357)





 

# User Interface design 

The user interface (UI) for the food hygiene rating web application is designed to be simple, user-friendly, and accessible on various devices. It provides users with an easy way to search for food hygiene ratings and view them on an interactive map. Key features include a chatbot for assistance and forms for business owners and consumers to report issues or request corrections.  

 

# Design goals  
● Users can search for food hygiene ratings by business name, location and hygiene rating. The search results are displayed on a map, with markers showing detailed business information.   

 
● The app uses a clear layout with a modern colour scheme. The primary colour is greenish-blue #00796b, which pairs well with the white text for readability. All buttons and links use this colour to create a consistent experience.  

 
● The web app is designed to adjust seamlessly across different screen sizes, such as phones and computers, ensuring a good user experience on all devices. 

 
● The app is designed to be accessible to everyone, with clear labels, large clickable areas, and ARIA attributes for screen readers. All buttons and forms are keyboard- navigable, making the app easy for individuals with disabilities.  

 

 

 

 

 

# Key sections of the wireframe:  

## Header section 

Title: “Food Hygiene Ratings” 

Description: “Use our online service to find a food business’s hygiene rating.” 

Image: An image representing food hygiene ratings is displayed in a circular frame for a modern look. The image complements the theme and enhances visual interest.  

 

## Search section  

Business name: Allows users to search for businesses by name. 

Location: Allows users to search by street, town, or postcode. 

Rating filter: Users can filter results based on the hygiene rating (e.g., 5 for very good, 0 for urgent improvement necessary).   

Buttons: Search and reset buttons are included for easy user interaction. The buttons are styled with a rounded look for modern appeal and easy identification.  

 

## Map section 

The interactive map displays food hygiene ratings as clickable markers. Each marker includes details about the business, such as name, address and rating filter shown in a popup. If users enable geolocation (with permission), the map will zoom to their current location, displaying a “you are here” marker. This feature enhances user interaction by providing a personalised view of nearby businesses with hygiene ratings.  

 

## Chatbot (HelpBot)  

The HelpBot appears in the bottom-right corner of the screen to assist users with navigating the app and answering common questions. The chatbot can minimise or close as needed and supports accessibility, including keyboard navigation and screen reader compatibility. Each button in the chatbot is labelled for clarity, and ARIA attributes are used to ensure all features are accessible to users.  

 

## Consumer and business forms 

The web app includes separate forms for consumers and business owners to report various issues. Consumers can report food safety issues, product labelling issues, unregistered businesses, problems with food hygiene ratings, or report food-related crimes and whistleblowing. Business owners can report similar issues or request corrections to their business’s hygiene rating.  


 
## Accessing forms 

Both consumers and business owners can access the forms through the chatbot. When users select “Consumer” or “Business” in the chatbot, only the relevant options are displayed, keeping the choices clear and organised.  

 

## Form layout  

Each form requests the user’s name, email, and a description of the issue. Clear labels, accessible placeholders, and spacing ensure that the forms are easy to fill out. All form elements are labelled, and a back button is included in the chatbot to help users navigate smoothly.  

 


## Confirmation message  

Once the form is submitted, a confirmation message appears to let the users know their request was successful and is being reviewed. This message is displayed at the top of the screen to improve visibility and provide reassurance to users.  
