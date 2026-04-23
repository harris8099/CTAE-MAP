***

# CTAE Campus Map - Technical Documentation

This document outlines the core architecture, data structures, and functions used in the CTAE Campus Map interactive web application. The application is built using standard web technologies (HTML, CSS, JavaScript) and relies on the Leaflet.js library for map rendering.

## 📦 Dependencies

* **Leaflet.js (v1.9.4)**: Used for core map rendering, interactions, and GeoJSON layer management.
* **FontAwesome (v6.5.1)**: Used for UI iconography (search, bookmark, history icons).
* **Google Satellite Hybrid**: Used as the base satellite tile layer.
* **MapTiler / OpenStreetMap**: Used as the base street tile layer.

---

## 🗄️ Core Data Structures

### `Department_array`
An array of objects containing detailed, hardcoded metadata for major campus buildings and departments.
* **Properties**: `id`, `name`, `floor` (2D array of rooms per floor), `detail` (description), `contact` (Dean/Phone, Email), `website`, and `imageUrl`.

### `jsonArray`
An array of GeoJSON `FeatureCollection` objects containing the polygon coordinates and basic properties (name, id, imageUrl) for every building on the campus map.

### `allLocations`
A dynamic array created at runtime. It merges the rich data from `Department_array` with any remaining buildings found in the `jsonArray` that lack detailed metadata, ensuring every mapped polygon has a corresponding search and list entry.

### `featureLayerMap`
A dictionary (object) used to map location IDs (strings) directly to their corresponding Leaflet polygon layers. This allows the map to quickly programmatically zoom to a specific building when selected from the UI.

---

## 🛠️ Functions & Methods

### Initialization & Setup

* **`buildFeatureLayerMap()`**
    * **Description**: Iterates through all rendered GeoJSON layers on the map and maps their Leaflet layer instance to the `featureLayerMap` object using the location's ID or name. 
    * **Usage**: Called once during initialization to enable the "zoom-to-building" functionality.

### Search & Filtering

* **`getMatchingLocations(query)`**
    * **Parameters**: `query` (String) - The search input text.
    * **Returns**: Array of location objects.
    * **Description**: Normalizes the search query and filters the `allLocations` array, returning only locations whose names include the search string.

* **`searchBox()`**
    * **Description**: Event handler for the search bar. Reads the current input, calls `getMatchingLocations()`, updates the sidebar list via `renderLocationList()`, and updates feedback messages. If an exact single match is found, it automatically selects it.

### UI Rendering (Sidebar & Panels)

* **`renderLocationList(items)`**
    * **Parameters**: `items` (Array) - Defaults to `allLocations`.
    * **Description**: Clears the current sidebar location list and dynamically generates HTML buttons for each item in the provided array. Attaches a click listener to trigger `selectDepartment()`.

* **`updateSearchFeedback(message)`**
    * **Parameters**: `message` (String).
    * **Description**: Updates the brief text beneath the "Campus locations" heading to provide feedback to the user (e.g., "Found 2 matches").

* **`setActiveTab(tabName)`**
    * **Parameters**: `tabName` (String) - Accepts `'overview'`, `'floor'`, or `'contact'`.
    * **Description**: Toggles CSS classes to hide/show the corresponding content cards and updates the active state of the tab buttons.

* **`updateOverview(department)`**
    * **Parameters**: `department` (Object).
    * **Description**: Updates the DOM elements within the Overview tab, including the building name, description, total floor count, and the background image of the panel.

* **`updateFloorOptions(department)`**
    * **Parameters**: `department` (Object).
    * **Description**: Populates the `<select>` dropdown menu with available floors for the selected department. Disables the dropdown if no floor data is available. Triggers `renderFloorDetails()` for the default floor.

* **`renderFloorDetails(department, index)`**
    * **Parameters**: `department` (Object), `index` (Number/String) - The array index of the floor.
    * **Description**: Reads the 2D `floor` array from the department object and renders an HTML list (`<ul>`) of rooms/facilities located on that specific floor.

* **`renderContact(department)`**
    * **Parameters**: `department` (Object).
    * **Description**: Injects the contact information (Phone, Website) into the Contact tab DOM element.

* **`highlightSelectedLocation(selectedId)`**
    * **Parameters**: `selectedId` (String).
    * **Description**: Iterates over the rendered sidebar list items and applies an `.active` CSS class to the item that matches the currently selected location.

### State Management & Interaction

* **`selectDepartment(department)`**
    * **Parameters**: `department` (Object).
    * **Description**: The primary state controller for selecting a location. It caches the `currentDepartment`, calls all UI updaters (`updateOverview`, `updateFloorOptions`, `renderContact`), sets the active tab back to Overview, highlights the list item, and utilizes `featureLayerMap` to pan and zoom the map (`map.fitBounds()`) to the selected building's polygon.

* **`detailPane(idOrName)`**
    * **Parameters**: `idOrName` (String).
    * **Description**: Acts as a bridge between map interactions (polygon clicks) and the UI. It looks up the clicked building's ID or name in `allLocations` and, if found, passes the full department object to `selectDepartment()`.

---

## 🖱️ Event Listeners Map

* **Map Features (Polygons)**:
    * `mouseover`: Changes polygon fill color/opacity and opens a tooltip with the building name.
    * `mouseout`: Restores original polygon styling and closes the tooltip.
    * `click`: Triggers `detailPane()` with the feature's ID to load details into the sidebar.
* **Search Input (`#search-input`)**: Listens to `input` (typing) and `keydown` (Enter key) to trigger `searchBox()`.
* **Search Button (`#search-btn`)**: Listens to `click` to trigger `searchBox()`.
* **Tabs (`.tab-button`)**: Listen to `click` to trigger `setActiveTab()`.
* **Floor Select (`#flr`)**: Listens to `change` events to trigger `renderFloorDetails()` for the newly selected floor.
* **Geolocation Control**: A custom top-left control button that triggers Leaflet's native `map.locate()` function to find the user's current GPS location.