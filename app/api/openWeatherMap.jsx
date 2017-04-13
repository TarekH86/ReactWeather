import * as axios from 'axios';

const OPEN_WEATHER_MAP_RUL = 'http://api.openweathermap.org/data/2.5/weather?appid=bd5ccff83ff4bfbb3940ca42a9d695cf&units=metric';



 module.exports = {
  getTemp: (location) => {
        const encodedLocation = encodeURIComponent(location); // using encodeURI to remove spaces from location if it exists
        const requestUrl = `${OPEN_WEATHER_MAP_RUL}&q=${encodedLocation}`;

      return axios.get(requestUrl).then( res => {
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else{
                return res.data.main.temp;
            }
        }, err => {
            throw new Error(err.data.message);
        }); 
    }
}

