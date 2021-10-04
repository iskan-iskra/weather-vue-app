<template>
     <div class="MainDataWrapper">
        <div class="MainData" v-if="weatherInfo
                                    && weatherInfo.main
                                    && weatherInfo.wind
                                    && weatherInfo.weather">
            <div class="CityName">{{requireCity}}</div>
            <div class="Info">{{todayDate}}</div>
            <div class="Info">Температура: {{weatherInfo.main.temp}}℃</div>
            <div class="Info">Ощущается: {{weatherInfo.main.feels_like}}℃</div>
            <div class="Info">Влажность: {{weatherInfo.main.humidity}}%</div>
            <div class="Info">Скорость ветра: {{weatherInfo.wind.speed}}м/с</div>
            <div class="Info">Восход: {{sunRiseTime}}</div>
            <div class="Info">Закат: {{sunSetTime}}</div>
            <div class="Info">{{weatherInfo.weather[0].description}}</div>
        </div>
        <div v-if="isLoading || isError" class="loadingWrapper">
            <div class="loadingBlurBg"></div>
            <div class="loadingIcon" v-if="isLoading"></div>
            <div class="ErrorIcon" v-if="isError">404 the weather didn't get</div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'WeatherAppMaindata',
    setup() {
        const store = useStore()


        const requireCity = computed(()=>{
            return store.getters['weatherStore/getRequireCity']
        }) 
        const weatherInfo = computed(()=>{
            return store.getters['weatherStore/getWeatherInfo']
        }) 
        const isLoading = computed(()=>{
            return store.getters['weatherStore/getLoading']
        })
        const isError = computed(()=>{
            return store.getters['weatherStore/getError']
        }) 

    
        function timeView(el){
            let date = new Date(el*1000)
            return date.getHours()+':'+date.getMinutes()
        }
        function dateView(el){
            let date = new Date(el*1000)
            return date.getDate()+' | '+(1+date.getMonth())+' | '+date.getFullYear()
        }


        const sunRiseTime = computed(()=>{
            if(weatherInfo.value.sys){
                return timeView(weatherInfo.value.sys.sunrise)
            }
            else{
                return 'Утром'
            }
        })
        const sunSetTime = computed(()=>{
            if(weatherInfo.value.sys){
                return timeView(weatherInfo.value.sys.sunset)
            }
            else{
                return 'Вечером'
            }
        })
        const todayDate = computed(()=>{
            if(weatherInfo.value.dt){
                return dateView(weatherInfo.value.dt)
            }
            else{
                return dateView()
            }
        })
        return{
            requireCity,
            weatherInfo,
            isLoading,
            isError,
            sunRiseTime,
            sunSetTime,
            todayDate
        }
    },
};
</script>

<style lang="scss" scoped>
@keyframes rotationLoading {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}
.MainDataWrapper{
    position: relative;
    min-height: 200px;
    width: 80%;
    max-width: 600px;
    margin: 0 auto;
    .MainData{
        .CityName{
            text-align: center;
            font-size: 20px;
            font-weight: 900;
        }
        .Info{
            padding: 20px;
        }
    }
    .loadingWrapper{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .loadingBlurBg{
            z-index: 50;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            backdrop-filter: blur(2px);
            background: rgba(255,255,255,.3);
        }
        .loadingIcon{
            z-index: 100;
            width: 30px;
            height: 30px;
            border: 10px solid #2c3e50;
            border-top:10px solid #42b983;
            border-radius: 50%;
            animation: rotationLoading .5s infinite linear;
        }
        .ErrorIcon{
            z-index: 100;
            color: #42b983;
            font-size: 20px;
            text-align: center;
            padding: 20px;
            background-color: #2c3e50;
            border-radius: 20px;
        }
    }
}
</style>