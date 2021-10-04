<template>
    <div class="Wrapper">
        <div class="Title">История поиска:</div>
        <div class="Item" v-for="city in historySearch" :key="city" @click="chooseCity(city)">
            {{city}}
        </div>
        <div class="Indicatore" v-if="historySearch.length<=0">Пусто</div>
        <div class="ClearBtn" v-if="historySearch.length>0" @click="removeCitiesFromHistory">Очистить</div>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
    name: 'WeatherAppHistory',
    data() {
        return {
        };
    },
    computed: {
        ...mapGetters('weatherStore', {historySearch: 'getHistoryOfSearch'}),
    },
    mounted() {
        this.checkLocalHistory()
    },
    methods: {
        ...mapActions('weatherStore', {getWeather: 'getWeatherFromApi'}),
        ...mapMutations('weatherStore', {setCity: 'SET_REQUIRECITY', clearHistory: 'CLEAR_HISTORY', checkHistory: 'CHECK_HISTORY'}),
        chooseCity: function(el){
            this.setCity(el)
            this.getWeather()     
        },
        removeCitiesFromHistory: function(){
            setTimeout(()=>{this.clearHistory()},300)
        },
        checkLocalHistory: function(){
            this.checkHistory()
        },
    },
};
</script>

<style lang="scss" scoped>
    .Wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 45%;
        margin-top: 20px;
        .Title{
            font-size: 16px;
            font-weight: 600;
            width: 100%;
            text-align: center;
        }
        .Item{
            padding: 10px 0;
            cursor: pointer;
            color: #2c3e50;
            transition: .2s;
            &:hover{
                color:#42b983;
            }
        }
        .Indicatore{
            padding: 10px 0;
            text-align: center;
            color: #2c3e50;
            align-self: center;
        }
        .ClearBtn{
            margin-top: auto;
            padding: 5px;
            width: calc(100% - 10px);
            align-self: center;
            cursor: pointer;
            color: #2c3e50;
            border: 2px solid #2c3e50;
            border-radius: 10px;
            transition: .2s;
            &:hover{
                border-color: #42b983;
                color: #42b983;
            }
        }
    }
</style>