import axios from "axios"
import {UrlWeather, Key} from './ApiConfig'


export default{
    async getWeatherData(searchCity){
        try {
            const response = await axios.get(UrlWeather,{
                params: { q: searchCity, units: 'metric', lang: 'ru',appid: Key }
            })
            return response
        }
        catch (e){
            console.log(e);
            return 'error'
        }
    },
   
}