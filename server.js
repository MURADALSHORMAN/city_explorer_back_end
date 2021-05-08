const express = require('express');
const app = express();
const superagent=require('superagent')
require('dotenv').config();
const cors = require('cors')
app.use(cors())
// const wetherData = require('./asstes/Weather.json');
const PORT=process.env.PORT ||3010
const WEATHER_BIT_KEY=process.env.WEATHER_BIT_KEY;


app.get('/', function (req, res) {
    res.send('Hello hi World')
});

app.get('/Weather', (req, res) => {
  const weatherBiturl=`http://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_BIT_KEY}&lat=${req.query.lat}&lon=${req.query.lon}`	
    // const infoarr = wetherData.data.map(data => new Weather(data))
    superagent.get(weatherBiturl).then(Weatherdata=>{
      const infoarr = Weatherdata.body.data.map(data => new Weather(data))
      res.send(infoarr);
    })
   

  
});


app.get('/moive', (req, res) => {
  req.query.region='amman'
  const moviesurl=`https://api.themoviedb.org/3/search/movie?api_key=275e78fad9e703d08d9f411595db162c&query=${req.query.query}`	
    // const infoarr = wetherData.data.map(data => new Weather(data))
    // res.send(moviesurl);
    superagent.get(moviesurl).then(moviesdata=>{
      const moviesarr = moviesdata.body.results.map(data => new Moives(data))
      res.send(moviesarr);
      // console.log(moviesarr); 
    })
   
   

  
});

class Moives {
  constructor(data){
    this.original_language = data.original_language;
    this.original_title = data.original_title;
    this.overview = data.overview;
    this.poster_path = data.poster_path;
    // console.log(data);
    // console.log(this.date);
    // console.log(this.description);
  }

}

class Weather {
  constructor(data){
    this.date = data.valid_date;
    this.description = data.weather.description;
    // console.log(data);
    // console.log(this.date);
    // console.log(this.description);
  }

}



app.listen(PORT)

// const express = require('express')
// const weather = require('./asstes/Wether.json')
// const cors = require('cors')

// const app = express()
// require('dotenv').config();
// app.use(cors())

// const PORT = process.env.PORT ||3020

// app.get('/', function (req, res) {
//   res.send('Hello World')
// });

// app.get('/Weather', (req, res)=>{
//   const arrayOfData = weather.data.map(data => new Weather(data));
//   res.send(arrayOfData);

// });

// class Weather {
//   constructor(data){
//     this.date = data.valid_date;
//     this.description = data.weather.description;
//   }
// }
 
// app.listen(PORT)