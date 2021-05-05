const express = require('express');
const app = express();
// require('dotenv').config();
const cors = require('cors')
app.use(cors())
const wetherData = require('./asstes/Weather.json');
const PORT=process.env.PORT ||3020



app.get('/', function (req, res) {
    res.send('Hello hi World')
});

app.get('/Weather', (req, res) => {
    const infoarr = wetherData.data.map(data => new Weather(data))
    res.send(infoarr);

  
});

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