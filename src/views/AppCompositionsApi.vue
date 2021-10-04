<template lang="">
    <weather-app-search/>
    <div class="componentsWrapper">
        <weather-app-mylocation/>
        <weather-app-history/>
    </div>
    <weather-app-maindata/>
</template>
<script>
import WeatherAppHistory from '../components/CompositionApiComponents/History.vue'
import WeatherAppMaindata from '../components/CompositionApiComponents/MainData.vue'
import WeatherAppSearch from '../components/CompositionApiComponents/Search.vue'
import WeatherAppMylocation from '../components/CompositionApiComponents/MyLocation.vue'
export default {
    name:'WeatherVueAppAppcompositionsapi',
    components:{
        WeatherAppHistory,
        WeatherAppMaindata,
        WeatherAppSearch,
        WeatherAppMylocation
    },
    setup() {
        
    }
}
</script>
<style lang="scss" scoped>
    .componentsWrapper{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width:80%;
        max-width:600px;
        margin: 20px auto;
    }
    @media screen and (max-width:600px) {
        .componentsWrapper{
            flex-direction: column;
            div{
                width: 100%;
                align-items: center;
            }
        }
    }
</style>