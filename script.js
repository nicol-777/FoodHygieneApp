// Initialize the map and set its view to Bristol's coordinates
var map = L.map('map').setView([51.4545, -2.5879], 12);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Variable to store markers globally
let geojsonLayer;
let originalData; // Store original data for reset functionality

// Function to display markers on the map
function displayMarkers(data) {
    // Remove any existing markers
    if (geojsonLayer) {
        map.removeLayer(geojsonLayer);
    }

    // Add GeoJSON data with circle markers
    geojsonLayer = L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: 5,  // Circle size
                fillColor: "#007bff",  // Blue fill
                color: "#007bff",      // Blue border
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
        },
        onEachFeature: function (feature, layer) {
            var popupContent = `<b>Business Name:</b> ${feature.properties.BUSINESS_NAME}<br>
                                <b>Address:</b> ${feature.properties.ADDRESS}<br>
                                <b>Rating:</b> ${feature.properties.RATING || 'No Rating'}<br>
                                <b>Rating Date:</b> ${feature.properties.RATING_DATE || 'N/A'}<br>
                                <img src="${feature.properties.RATING_GRAPHIC_URL}" alt="Rating Badge">`;
            layer.bindPopup(popupContent);
        }
    }).addTo(map);
}

// Load the initial data (GeoJSON file or API) to populate the map
function loadGeoJSONData() {
    fetch('Food_Hygiene_Ratings.geojson')  // Ensure the correct path to the GeoJSON file
        .then(response => response.json())
        .then(data => {
            originalData = data; // Save original data for reset functionality
            displayMarkers(data);
        })
        .catch(error => {
            console.error('Error loading GeoJSON:', error);
        });
}

// Load data on initial load
loadGeoJSONData();

// Automatically use geolocation when the page loads
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        map.setView([latitude, longitude], 14);  // Zoom to user's location

        // Add a marker for the user's current location
        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('You are here!')
            .openPopup();
    }, () => {
        console.error('Geolocation permission denied or not available.');
    });
} else {
    console.error('Geolocation is not supported by this browser.');
}

// Handle form submission for search and filter by rating
document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const businessName = document.getElementById('business-name').value.toLowerCase();
    const location = document.getElementById('location').value.toLowerCase();
    const ratingFilter = document.getElementById('rating-filter').value;  // This is a string

    // Filter the original GeoJSON data based on the search inputs
    const filteredData = {
        type: "FeatureCollection",
        features: originalData.features.filter(feature => {
            const nameMatches = feature.properties.BUSINESS_NAME.toLowerCase().includes(businessName);
            const locationMatches = feature.properties.ADDRESS.toLowerCase().includes(location);

            // Ensure feature.properties.RATING exists and is compared as a string
            const rating = feature.properties.RATING ? String(feature.properties.RATING) : '';
            const ratingMatches = ratingFilter ? rating === ratingFilter : true;  // Compare with selected rating

            return nameMatches && locationMatches && ratingMatches;
        })
    };

    displayMarkers(filteredData);  // Display only the filtered markers
});

// Handle reset functionality
document.getElementById('reset-btn').addEventListener('click', function () {
    // Reset form values
    document.getElementById('search-form').reset();
    
    // Display original data (reset the map to show all businesses again)
    displayMarkers(originalData);
});




// Function to toggle chatbot
function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'none' ? 'block' : 'none';
}

// Respond to chatbot help request
function respondHelp(needHelp) {
    const chatbotBody = document.getElementById('chatbot-body');
    chatbotBody.innerHTML = ''; // Clear existing content
    
    if (needHelp) {
        chatbotBody.innerHTML = `<p>How can I assist you?</p>
                                 <p><button onclick="navigateToCorrection()">I want to request a correction</button></p>
                                 <p><button onclick="searchHelp()">I need help with searching</button></p>`;
    } else {
        chatbotBody.innerHTML = `<p>Okay, let me know if you need help later.</p>
                                 <p><button onclick="resetChat()">Ask for help</button></p>`;
    }
}

// Show the correction form
function navigateToCorrection() {
    toggleChat(); // Close the chatbot
    document.getElementById('request-correction').style.display = 'block'; // Show the form
    window.scrollTo({ top: document.querySelector('#request-correction').offsetTop, behavior: 'smooth' });
}

// Provide search help
function searchHelp() {
    const chatbotBody = document.getElementById('chatbot-body');
    chatbotBody.innerHTML = `<p>To search, enter the business name or location and click "Search".</p>
                             <p><button onclick="resetChat()">Back</button></p>`;
}

// Reset chatbot content
function resetChat() {
    const chatbotBody = document.getElementById('chatbot-body');
    chatbotBody.innerHTML = `<p>Hi! Do you need any help today?</p>
                             <p><button onclick="respondHelp(true)">Yes</button>
                             <button onclick="respondHelp(false)">No</button></p>`;
}






















































// Function to show the form for a selected consumer issue
function showConsumerForm(issueType) {
    // Set the form title based on the selected issue
    const formTitleMap = {
        'food-safety': 'Report a Food Safety Issue',
        'product-labelling': 'Report a Product Labelling Issue',
        'unregistered-business': 'Report an Unregistered Food Business',
        'rating-problem': 'Report a Problem with a Food Hygiene Rating',
        'whistleblowing': 'Whistleblowing'
    };

    // Update the form title and show the form container
    document.getElementById('consumer-form-title').textContent = formTitleMap[issueType];
    document.getElementById('consumer-options').style.display = 'none';
    document.getElementById('consumer-form-container').style.display = 'block';

    // Optionally, scroll to the form
    scrollToBottom();
}

// Function to go back to consumer options
function goBackToConsumerOptions() {
    document.getElementById('consumer-form-container').style.display = 'none';
    document.getElementById('consumer-options').style.display = 'block';
}











// Function to show the form for a selected consumer issue
function showConsumerForm(issueType) {
    // Set the form title based on the selected issue
    const formTitleMap = {
        'food-safety': 'Report a Food Safety Issue',
        'product-labelling': 'Report a Product Labelling Issue',
        'unregistered-business': 'Report an Unregistered Food Business',
        'rating-problem': 'Report a Problem with a Food Hygiene Rating',
        'whistleblowing': 'Whistleblowing'
    };

    // Update the form title and show the form container
    document.getElementById('consumer-form-title').textContent = formTitleMap[issueType];
    document.getElementById('consumer-options').style.display = 'none';
    document.getElementById('consumer-form-container').style.display = 'block';

    // Scroll to the form smoothly
    window.scrollTo({
        top: document.getElementById('consumer-form-container').offsetTop,
        behavior: 'smooth'
    });
}

// Function to go back to consumer options
function goBackToConsumerOptions() {
    document.getElementById('consumer-form-container').style.display = 'none';
    document.getElementById('consumer-options').style.display = 'block';
}











function displayMarkers(data) {
    // Remove existing markers
    if (geojsonLayer) {
        map.removeLayer(geojsonLayer);
    }

    // Display markers or suggest nearby businesses if no results found
    if (data.features.length === 0) {
        displayNearbyBusinesses();
    } else {
        geojsonLayer = L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 5,
                    fillColor: "#007bff",
                    color: "#007bff",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            },
            onEachFeature: function (feature, layer) {
                const popupContent = `<b>Business Name:</b> ${feature.properties.BUSINESS_NAME}<br>
                                      <b>Address:</b> ${feature.properties.ADDRESS}<br>
                                      <b>Rating:</b> ${feature.properties.RATING || 'No Rating'}<br>
                                      <b>Rating Date:</b> ${feature.properties.RATING_DATE || 'N/A'}<br>
                                      <img src="${feature.properties.RATING_GRAPHIC_URL}" alt="Rating Badge">`;
                layer.bindPopup(popupContent);
            }
        }).addTo(map);
    }
}

function displayNearbyBusinesses() {
    // Example radius for nearby suggestions (e.g., 500 meters)
    const nearbyRadius = 500;
    const userLocation = map.getCenter(); // Use current map center or user location

    // Filter original data for businesses within nearbyRadius
    const nearbyBusinesses = {
        type: "FeatureCollection",
        features: originalData.features.filter(feature => {
            const featureLocation = L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
            return userLocation.distanceTo(featureLocation) <= nearbyRadius;
        })
    };

    // Notify user and display nearby businesses
    alert("No exact matches found. Here are some nearby businesses:");
    displayMarkers(nearbyBusinesses);
}
























function loadGeoJSONData() {
    fetch('Food_Hygiene_Ratings.geojson')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            originalData = data;
            displayMarkers(data);
    


        })
        .catch(error => {
            console.error('Error loading GeoJSON:', error);
            alert("Data could not be loaded. Please try again later.");


            // Optionally, load backup data source or display alternative message
            loadBackupData();
        });
}

function loadBackupData() {
    fetch('Backup_Food_Hygiene_Ratings.geojson')
        .then(response => response.json())
        .then(data => {
            displayMarkers(data);
            alert("Displaying data from an alternative source.");
        })
        .catch(error => {
            console.error('Error loading backup data:', error);
            alert("Sorry, no data available at this time.");
        });
}



function performSearch() {
    const startTime = performance.now();

    // Insert search functionality here (e.g., filtering data)
    const filteredData = {
        type: "FeatureCollection",
        features: originalData.features.filter(/* filter logic */)
    };

    displayMarkers(filteredData);

    const endTime = performance.now();
    const timeTaken = endTime - startTime;

    // Check if the operation is within 2 seconds
    if (timeTaken > 2000) {
        console.warn("Search operation took too long:", timeTaken.toFixed(2), "ms");
    } else {
        console.log("Search completed in:", timeTaken.toFixed(2), "ms");
    }
}


















































































































// Function to show the form and scroll to it
function showForm(issueType, isConsumer) {
    // Set the form title based on the selected issue and user type
    const formTitleMap = {
        'food-safety': isConsumer ? 'Report a Food Safety Issue' : 'Report a Food Safety Incident',
        'product-labelling': 'Report a Product Labelling Issue',
        'unregistered-business': 'Report an Unregistered Food Business',
        'rating-problem': 'Report a Problem with a Food Hygiene Rating',
        'whistleblowing': 'Whistleblowing and reporting a food crime'
    };
    
    // Update the form title based on the issueType and user type
    document.getElementById('consumer-form-title').textContent = formTitleMap[issueType];
    
    // Show the form
    const formContainer = document.getElementById('consumer-form-container');
    formContainer.style.display = 'block';
    
    // Smoothly scroll to the form
    window.scrollTo({
        top: formContainer.offsetTop,
        behavior: 'smooth'
    });
}
























































// Define the custom icon for the marker (Food Rating Badge)
var customIcon = L.icon({
    iconUrl: 'images/rating-badge.png',  // Path to your FSA rating badge image
    iconSize: [50, 50],  // Adjust the size of the image as needed
    iconAnchor: [25, 50],  // Anchor the image at the bottom-center
    popupAnchor: [0, -50]  // Set popup position if needed
});

// Adding marker with the custom FSA rating badge icon
L.marker([51.505, -0.09], { icon: customIcon }).addTo(map);
