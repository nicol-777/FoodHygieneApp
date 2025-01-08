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
