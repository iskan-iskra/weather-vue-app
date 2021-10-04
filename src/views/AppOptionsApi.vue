<template>
    <weather-app-search/>
    <div class="componentsWrapper">
        <weather-app-mylocation/>
        <weather-app-history/>
    </div>
    <weather-app-maindata/>
</template>

<script>
import WeatherAppSearch from '../components/OptionsApiComponents/Search.vue'
import WeatherAppHistory from '../components/OptionsApiComponents/History.vue'
import WeatherAppMylocation from '../components/OptionsApiComponents/MyLocation.vue'
import WeatherAppMaindata from '../components/OptionsApiComponents/MainData.vue'
export default {
    name: 'WeatherVueAppAppoptionsapi',
    components:{
        WeatherAppSearch,
        WeatherAppHistory,
        WeatherAppMylocation,
        WeatherAppMaindata
    },
    data() {
        return {
            
        };
    },

    mounted() {
        window.scrollTo(0,0)
    },

    methods: {
        
    },
};
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