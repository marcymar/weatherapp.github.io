

document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()

  // let locationIcon = document.querySelector('.weather-icon');
  // const {icon} = data.weather[0];

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

  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=fd9bf816bccea251da5069666b264261`)
    .then(res => {
      let weekday1 = res.data.list
      console.log(weekday1)
      {
        document.getElementById('weekday1').innerHTML = `
        <p>${weekday1[4].weather[0].icon}</p>
        <div id="weekday1" class="card col-sm" style="width: 14rem;">Date:${weekday1[4].dt_txt}
        <p>Weather: ${weekday1[4].weather[0].description}</p>
        <p>Temperature: ${weekday1[4].main.temp}</p>
        <p>Humidity: ${weekday1[4].main.humidity}</p>
        <p>Wind Sp: ${weekday1[4].wind.speed}</p>
        </div>
        `
      }
    }
    )
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=fd9bf816bccea251da5069666b264261`)
    .then(res => {
      let weekday2 = res.data.list
      console.log(weekday2)
      {
        document.getElementById('weekday2').innerHTML = `
        <p>${weekday2[12].weather[0].icon}</p>
        <div id="weekday2" class="card col-sm" style="width: 14rem;">Date:${weekday2[12].dt_txt}
        <p>Weather: ${weekday2[12].weather[0].description}</p>
        <p>Temperature: ${weekday2[12].main.temp}</p>
        <p>Humidity: ${weekday2[12].main.humidity}</p>
        <p>Wind Sp: ${weekday2[12].wind.speed}</p>
        </div>
        `
      }
    }
    )
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=fd9bf816bccea251da5069666b264261`)
    .then(res => {
      let weekday3 = res.data.list
      console.log(weekday3)
      {
        document.getElementById('weekday3').innerHTML = `
        <p>${weekday3[20].weather[0].icon}</p>
        <div id="weekday3" class="card col-sm" style="width: 14rem;">Date:${weekday3[20].dt_txt}
        <p>Weather: ${weekday3[20].weather[0].description}</p>
        <p>Temperature: ${weekday3[20].main.temp}</p>
        <p>Humidity: ${weekday3[20].main.humidity}</p>
        <p>Wind Sp: ${weekday3[20].wind.speed}</p>
        </div>
        `
      }
    }
    )
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=fd9bf816bccea251da5069666b264261`)
    .then(res => {
      let weekday4 = res.data.list
      console.log(weekday4)
      {
        document.getElementById('weekday4').innerHTML = `
        <p>${weekday4[28].weather[0].icon}</p>
        <div id="weekday4" class="card col-sm" style="width: 14rem;">Date:${weekday4[28].dt_txt}
        <p>Weather: ${weekday4[28].weather[0].description}</p>
        <p>Temperature: ${weekday4[28].main.temp}</p>
        <p>Humidity: ${weekday4[28].main.humidity}</p>
        <p>Wind Sp: ${weekday4[28].wind.speed}</p>
        </div>
        `
      }
    }
    )
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=fd9bf816bccea251da5069666b264261`)
    .then(res => {
      let weekday5 = res.data.list
      console.log(weekday5)
      {
        document.getElementById('weekday5').innerHTML = `
        <p>${weekday5[36].weather[0].icon}</p>
        <div id="weekday5" class="card col-sm" style="width: 14rem;">Date:${weekday5[36].dt_txt}
        <p>Weather: ${weekday5[36].weather[0].description}
        <p>Temperature: ${weekday5[36].main.temp}</p>
        <p>Humidity: ${weekday5[36].main.humidity}</p>
        <p>Wind Sp: ${weekday5[36].wind.speed}</p>
        </div>
        `
      }
    }
    )


  let searchHistory = JSON.parse(localStorage.getItem('city')) || []

  let historyElem = document.createElement('li')
  document.getElementById('searchHistory').append(historyElem)

  historyElem.innerHTML = `${city}`

})
