const express = require('express');
const app = express();
app.use(express.static("src"));
require('dotenv').config()

// lets user know process is running properly
console.log(process.env)

// get port and API key from .env file
const port = process.env.PORT || 3000;
const apiKey = process.env.OPENWEATHER_API_KEY;

app.get("/weather", function(req, res) {
   // get user inputted city and state
   const city = req.query.city;
   const state = req.query.state;
  
   // use city and state to get lat and lon from server
   fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=${apiKey}`)
      .then(response => response.json())  
      // run through geo data
      .then(data => {
         if (data.length > 0) {
            const lat = data[0].lat;
            const lon = data[0].lon;

            // use lat and lon to get weather data from server
            return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
               .then(response => response.json())  
               // run through weather data
               .then(weatherData => {

                  // package desired data
                  const weather = {
                     temp: weatherData.main.temp,
                     wind: weatherData.wind.speed,
                     desc: weatherData.weather[0].description,
                     main: weatherData.weather[0].main,
                     icon: weatherData.weather[0].icon
                  };
         
                  // return json data
                  res.json(weather);
                  
               })
               // error handling
               .catch(error => {
                  console.error("Error fetching city data:", error);
                  res.status(500).send("Error fetching city data.");
               });
         } 
         else {
            // error handling
            res.status(404).send("City not found.");
         }

      })
      // error handling
      .catch(error => {
         console.error("Error fetching city data:", error);
         res.status(500).send("Error fetching city data.");
      });
});

// lets user know the server is running properly
app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});