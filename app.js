axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Anaheim&units=imperial&appid=fd9bf816bccea251da5069666b264261`)
    .then(res => {
        console.log(res.data)
    })