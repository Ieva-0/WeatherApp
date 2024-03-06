# WeatherApp

Project functionality: display weather forecast for chosen city and a specified length of time. City can be chosen in the side menu. Forecast duration can be chosen in dropdown in forecast page. Forecast element for each day can be expanded to show hourly information. Project uses https://open-meteo.com/en/docs for API calls. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

## Development server

To run app: 
- Clone repository to a folder (or download it as archive and extract it to a folder)
- Run `npm install` in terminal in project directory
- Run `ng serve` for a dev server.
- Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project structure

Project main app directory contains these folders:
- classes - data classes
- elements - forecast and icon components - elements used within pages
- menus - side menu and top menu components
- pages - weather forecast page component (if the app is expanded in the future, other pages would also be placed here)
