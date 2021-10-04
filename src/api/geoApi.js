import axios from "axios"
import {UrlGeo, Key} from './ApiConfig'

export default {
    async getGeoData(geoInfo){
        try{
            const response = await axios.get(UrlGeo,{
                params: {lat: geoInfo.lat, lon: geoInfo.lon, appid: Key}
            })
            return response
        }
        catch (e){
            console.log(e);
        }
    }
}