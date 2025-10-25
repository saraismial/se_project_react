# WTWR (What to Wear Right Now)

**WTWR** is a responsive weather-based wardrobe application built with React, the Context API, and the OpenWeather API.  
The app fetches real-time weather data, determines the time of day, and dynamically updates the interface and clothing recommendations based on temperature and weather conditions.

---

## Overview

WTWR provides users with real-time weather insights and outfit suggestions. It demonstrates a complete React workflow including API integration, state management through context, and conditional rendering for a dynamic user experience.

This project was developed focusing on applying React fundamentals, asynchronous data handling, and clean component architecture.

---

## Features

- **Live Weather Data**  
  Retrieves current temperature, location, and weather conditions using the OpenWeather API.

- **Dynamic Weather Cards**  
  Weather visuals and background themes change automatically depending on the time of day and weather condition.

- **Clothing Recommendations**  
  Items are displayed dynamically based on the current temperature range (cold, warm, or hot).

- **Temperature Unit Toggle**  
  A Context-based toggle switch allows seamless conversion between Fahrenheit (°F) and Celsius (°C).

- **Responsive and Modular Design**  
  Fully responsive UI built with component-based architecture for scalability and maintainability.

---

## Technology Stack

- **Frontend:** React, JavaScript (ES6+), JSX, HTML5, CSS3
- **State Management:** React Hooks, Context API
- **Data Handling:** Fetch API, Async/Await
- **API Integration:** OpenWeather API
- **Development Tools:** Vite, npm, Git, VS Code
- **Design Principles:** Responsive design, modular components, semantic structure, accessibility considerations

---

## Technical Highlights

- Implemented asynchronous API requests to fetch and display live weather data.
- Created reusable and styled components (`WeatherCard`, `ToggleSwitch`, `WeatherIcons`) using clean prop structures.
- Utilized the Context API for managing global temperature unit state across multiple components.
- Designed a configuration file (`weatherCardConfig.js`) to map API weather values to specific UI visuals.
- Built logical temperature segmentation:
  - Below 66°F — cold
  - 66°F to 86°F — warm
  - Above 86°F — hot
- Applied conditional rendering and stateful updates for UI reactivity.

---

## How It Works

1. The app requests real-time weather data from the OpenWeather API using predefined coordinates.
2. The weather response (`weather[0].main`, `sys.sunrise`, `sys.sunset`, etc.) is processed to determine both the **current condition** and **time of day**.
3. The `WeatherCard` component updates its design dynamically based on these values.
4. The `Main` component filters and displays appropriate clothing items based on the current temperature range.
5. The Context-powered toggle switch provides real-time conversion between Fahrenheit and Celsius.

---

## Skills Demonstrated

- Frontend architecture and component reusability
- API consumption and error handling in React
- State and context management with Hooks
- Conditional rendering and dynamic styling
- Responsive interface development
- Code organization and modular structure
- Debugging and testing React components
- Version control and project documentation best practices
