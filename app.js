

document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()



    let city = document.getElementById('city').value

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=fd9bf816bccea251da5069666b264261`)
        .then(res => {
            document.getElementById('weather').innerHTML = `
          <h1>${res.data.name}</h1>
          <h4>Weather: ${res.data.weather[0].description}</h4>
          <h4>Temperature: ${res.data.main.temp}</h4>
          <h4>Humidity: ${res.data.main.humidity}</h4>
          <h4>Wind Speed: ${res.data.wind.speed}</h4>
            `
        })

})

