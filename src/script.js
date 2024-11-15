// add event listener for submission of form
document.getElementById('weather-form').addEventListener('submit', fetchWeather)

// asynchronus function, runs once weather data is fetched
async function fetchWeather(event) {

    event.preventDefault();

    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const url = `http://localhost:3000/weather?city=${city}&state=${state}`;
    document.getElementById('location').innerText = "Weather in " + city;

    // get weather data from server as a json file
    fetch(url)
        .then(response => response.json())
        // run through json data
        .then(data => {

            // make output section visible
            document.getElementById('weather-output').style.visibility = "visible";

            // Update the weather output section with the fetched data
            document.getElementById('weather').innerText = `Weather: ${data.desc}`;
            document.getElementById('temp').innerText = `Temperature: ${data.temp}°F`;
            document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind} mph`;

            // Set the weather icon (using OpenWeather icon code)
            const iconUrl = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
            document.getElementById('weather-icon').src = iconUrl;
            document.getElementById('weather-icon').style.visibility = "visible";

            // Change bakground color to match weather
            const main = data.main;
            if(main === "Clear"){
                document.body.style.backgroundColor = "lightblue";
                document.body.style.color = "black";
                document.getElementById('weather-output').style.borderColor = "black";
            }
            else if(main === "Clouds"){
                document.body.style.backgroundColor = "grey";
                document.body.style.color = "black";
                document.getElementById('weather-output').style.borderColor = "black";
            }
            else if(main === "Rain" || main === "Drizzle"){
                document.body.style.backgroundColor = "#9090aa";
                document.body.style.color = "white";
                document.getElementById('weather-output').style.borderColor = "white";
            }
            else if(main === "Snow"){
                document.body.style.backgroundColor = "#e1fbff";
                document.body.style.color = "black";
                document.getElementById('weather-output').style.borderColor = "black";

            }
            else{
                document.body.style.backgroundColor = "#3c3b5a";
                document.body.style.color = "white";
                document.getElementById('weather-output').style.borderColor = "white";
            }
        })
        // if unable to retreive weather data, a message is given to the user
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Could not retrieve weather data. Please try again.");
        });

};

 

