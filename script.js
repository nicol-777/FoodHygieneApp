// Initialize the map and set its view to Bristol's coordinates
var map = L.map('map').setView([51.4545, -2.5879], 12);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Variable to store markers globally
let geojsonLayer;
let zeroRatedLayer = L.layerGroup().addTo(map);  // Layer for 0-rated markers
let originalData;  // Store original data for reset functionality

// Function to display markers on the map
function displayMarkers(data) {
    // Remove any existing markers
    if (geojsonLayer) {
        map.removeLayer(geojsonLayer);
    }

    // Add GeoJSON data with circle markers
    geojsonLayer = L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            const isZeroRated = feature.properties.RATING === 0;
            return L.circleMarker(latlng, {
                radius: 5,
                fillColor: isZeroRated ? "#ff0000" : "#007bff",  // Red for 0-rated, blue for others
                color: isZeroRated ? "#ff0000" : "#007bff",
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

// Add zero-rated businesses as red markers
function addZeroRatedMarkers(data) {
    zeroRatedLayer.clearLayers(); // Clear previous zero-rated markers

    L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            if (feature.properties.RATING === 0) {
                return L.circleMarker(latlng, {
                    radius: 7,
                    fillColor: "#ff0000",  // Red fill for urgent
                    color: "#ff0000",
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.9
                });
            }
        },
        onEachFeature: function (feature, layer) {
            var popupContent = `<b>Business Name:</b> ${feature.properties.BUSINESS_NAME}<br>
                                <b>Address:</b> ${feature.properties.ADDRESS}<br>
                                <b>Rating:</b> 0 (Urgent Improvement Necessary)<br>
                                <b>Rating Date:</b> ${feature.properties.RATING_DATE || 'N/A'}<br>
                                <img src="${feature.properties.RATING_GRAPHIC_URL}" alt="Rating Badge">`;
            layer.bindPopup(popupContent);
        }
    }).addTo(zeroRatedLayer);
}

function loadGeoJSONData() {
    console.log("🔄 Loading GeoJSON Data...");

    fetch('Food_Hygiene_Ratings.geojson')
        .then(response => response.json())
        .then(data => {
            console.log("✅ GeoJSON Loaded! Total Features:", data.features.length);

            // 🔹 Debugging: Log first 3 features
            console.log("🛠 First 3 features:", data.features.slice(0, 3));

            originalData = data;
            displayMarkers(data);
        })
        .catch(error => {
            console.error('❌ Error loading GeoJSON:', error);
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
    const ratingFilter = document.getElementById('rating-filter').value;

    // Clear existing map layers
    if (geojsonLayer) map.removeLayer(geojsonLayer);
    zeroRatedLayer.clearLayers();

    const filteredData = {
        type: "FeatureCollection",
        features: originalData.features.filter(feature => {
            const nameMatches = feature.properties.BUSINESS_NAME.toLowerCase().includes(businessName);
            const locationMatches = feature.properties.ADDRESS.toLowerCase().includes(location);

            // Handle filtering for 0-rated businesses
            if (ratingFilter === '0') {
                return Number(feature.properties.RATING) === 0 && nameMatches && locationMatches;
            }

            const rating = feature.properties.RATING !== undefined ? String(feature.properties.RATING) : '';
            const ratingMatches = ratingFilter === '' || rating == ratingFilter;

            return nameMatches && locationMatches && ratingMatches;
        })
    };

    // Display filtered markers
    displayMarkers(filteredData);

    // Handle zero-rated markers separately
    if (ratingFilter === '0') {
        const zeroFiltered = {
            type: "FeatureCollection",
            features: filteredData.features.filter(feature => feature.properties.RATING === 0)
        };
        addZeroRatedMarkers(zeroFiltered);
    }
});

// Reset the map when reset button is clicked
document.getElementById('reset-btn').addEventListener('click', function () {
    document.getElementById('search-form').reset();
    displayMarkers(originalData);
    addZeroRatedMarkers(originalData);  // Reset zero-rated markers
});

// Populate the dropdown with ratings
function populateDropdown() {
    const ratingFilter = document.getElementById('rating-filter');
    ratingFilter.innerHTML = `
        <option value="">All Ratings</option>
        <option value="5">5 (Very Good)</option>
        <option value="4">4 (Good)</option>
        <option value="3">3 (Generally Satisfactory)</option>
        <option value="2">2 (Improvement Necessary)</option>
        <option value="1">1 (Major Improvement Necessary)</option>
        <option value="0"> 0 (Urgent Improvement Necessary)  </option>
    `;
}
populateDropdown();









































































































































































































































document.addEventListener("DOMContentLoaded", function () {
    const issueForm = document.getElementById('issue-form');
    const confirmation = document.getElementById('confirmation-message');
    const chatbotContainer = document.getElementById('chatbot-forms-container');

    if (issueForm) {
        issueForm.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent form refresh

            console.log("Form submitted!");  // Debugging check

            // Force chatbot container and confirmation message to show
            chatbotContainer.style.display = 'block';
            confirmation.style.display = 'block';

            // Optionally hide the form after submission
            issueForm.style.display = 'none';

            // Smooth scroll to chatbot container
            window.scrollTo({
                top: chatbotContainer.offsetTop,
                behavior: 'smooth'
            });

            // Reset form fields for future submissions
            issueForm.reset();
        });
    } else {
        console.error("Form not found!");
    }
});











































































































































document.getElementById('issue-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('consumer-name').value.trim();
    const email = document.getElementById('consumer-email').value.trim();
    const details = document.getElementById('consumer-issue-details').value.trim();

    const confirmationMessage = document.getElementById('confirmation-message');
    const form = document.getElementById('issue-form');

    // Check if all fields are filled
    if (name && email && details) {
        form.style.display = 'none';
        confirmationMessage.style.display = 'block';
        
        // Reset the form after 5 seconds
        setTimeout(() => {
            confirmationMessage.style.display = 'none';
            form.style.display = 'block';
            form.reset();
        }, 5000);
    } else {
        alert("Please complete all fields before submitting.");
    }
});







































































































































































































































































































































































































function handleFormSubmission(event) {
    event.preventDefault(); // Stop form from submitting

    // Get form and create confirmation message
    const form = event.target;
    const confirmationMessage = document.createElement('div');

    // Style the confirmation message with a modern card-like appearance
    confirmationMessage.innerHTML = `
        <div style="
            max-width: 600px;
            margin: 200px auto;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
            background: white;
            text-align: center;
            font-family: 'Arial', sans-serif;
        ">
            <h2 style="color: #4CAF50; margin-bottom: 20px;">Submission Successful</h2>
            <p style="font-size: 1.1em; color: #555;">
                Thank you! Your report has been received. Our team will review it soon.
            </p>
            <p style="font-size: 0.9em; color: #777;">
        </div>
    `;

    // Append the message below the map
    const mapContainer = document.getElementById('map');
    mapContainer.parentNode.insertBefore(confirmationMessage, mapContainer.nextSibling);

    // Hide the form immediately
    form.style.display = 'none';

    // Trigger scroll to top before reload
    window.onbeforeunload = () => {
        window.scrollTo(0, 0);  // Force scroll to top before reload
    };

    // Simulate page restart after 3 seconds
    setTimeout(() => {
        window.location.reload();  // Full page reload
    }, 3000);  // Delay for 3 seconds
}






































































































































































































































































































































































































































































































































function displayMarkers(data) {
    // Remove existing markers
    if (geojsonLayer) {
        map.removeLayer(geojsonLayer);
    }

    // Clear previous messages
    document.getElementById('searchMessage').innerHTML = '';

    // Check if no exact results were found
    if (data.features.length === 0) {
        const selectedRating = parseFloat(document.getElementById('rating-filter').value);

        if (selectedRating === 0) {
            return;
        }

        // Show message for no matches
        document.getElementById('searchMessage').innerHTML = 
            "No exact matches found. Here are some nearby businesses.";

        // Trigger alert every time
        alert("No exact matches found. Suggesting nearby businesses.");

        // Display nearby businesses (no alerts inside)
        displayNearbyBusinesses();
    } else {
        // Display exact match markers
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
    const nearbyRadius = 500;
    const userLocation = map.getCenter();

    // Filter businesses within the nearby radius
    const nearbyBusinesses = {
        type: "FeatureCollection",
        features: originalData.features.filter(feature => {
            const featureLocation = L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
            return userLocation.distanceTo(featureLocation) <= nearbyRadius;
        })
    };

    // Display nearby business markers
    if (nearbyBusinesses.features.length > 0) {
        displayMarkers(nearbyBusinesses);
    } else {
        document.getElementById('searchMessage').innerHTML = 
            "No nearby businesses found.";
    }
}





















































