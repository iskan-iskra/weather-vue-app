<template>
    <div class="searchWrapper">
        <input ref="input" type="text" v-model="searchCity" @keypress.enter="enterInput">
        <div class="buttonViewList" @click="clearSearchCity" :class="{active:activeCityList}"></div>
        <div class="cityList" :class="{active:activeCityList}">
            <div class="cityLink" v-for="city in requireCity" :key="city.index" @click="chooseCity(city)">{{city}}</div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
    name: 'WeatherAppSearch',
    data() {
        return {
            searchCity: '',
        };
    },
    computed: {
        ...mapGetters('weatherStore',{getCityList: 'getStorageCityList'}),
        storageCity: function(){
            return this.getCityList
        },
        activeCityList: function() {
            if(this.searchCity !==''){
                return true
            }
            else{return false}
        },
        requireCity: function() {
            let query = this.searchCity
            return this.storageCity.filter((el)=>{return el.toLowerCase().indexOf(query.toLowerCase()) > -1;})
        }
    },
    mounted() {
        this.mountCityList(['Aktobe','Almaty','Atyrau','East Kazakhstan', 'Jambyl', 'Karaganda', 'Kostanay','Kyzylorda','Mangystau','North Kazakhstan', 'Astana', 'Pavlodar','Turkistan','West Kazakhstan'])
    },
    methods: {
        ...mapActions('weatherStore', {getWeather: 'getWeatherFromApi'}),
        ...mapMutations('weatherStore', {setCity:'SET_REQUIRECITY', setCityList: 'SET_STORAGECITYLIST'}),
        clearSearchCity: function(){
            this.searchCity = '';
        },
        chooseCity: function(el){
            this.searchCity = ''
            this.setCity(el)
            this.getWeather()
        },
        mountCityList: function(data){
            this.setCityList(data)
        },
        enterInput: function(){
            this.$refs.input.blur()
            this.chooseCity(this.reqiureCity[0])
        }
    },
};
</script>

<style lang="scss" scoped>
    .searchWrapper{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 20px auto;
        min-width: 300px;
        width: 80%;
        max-width: 600px;
        position: relative;
        input{
            width: calc(100% - 50px);
            padding: 5px 10px;
            outline: none;
            border: 2px solid #2c3e50;
            border-radius: 10px;
            &:focus{
                border-color: #42b983;
            }
        }
        .buttonViewList{
            width: 12px;
            height: 12px;
            border-left: 3px;
            border-bottom: 3px;
            border-right: 0;
            border-top: 0;
            border-style: solid;
            border-color: #2c3e50;
            transform: rotate(45deg);
            transition: transform .2s linear;
            &.active{
                border-color: #42b983;
                transform: rotate(-45deg);
            }
        }
        .cityList{
            display: flex;
            flex-direction: column;
            z-index: -1000;
            opacity: 0;
            visibility: hidden;
            position: absolute;
            top: 100%;
            width: 100%;
            min-height: 100px;
            height:fit-content;
            overflow-y: scroll;
            background-color: white;
            transition: visibility, opacity .5s;
            &.active{
                z-index: 1;
                opacity: 1;
                visibility: visible;
            }
            .cityLink{
                text-align: start;
                cursor: pointer;
                padding: 5px;
                text-transform: capitalize;
                color: #2c3e50;
                border: 1px solid white;
                &:hover{
                    border: 1px solid #42b983;
                }
            }
        }
    }
</style>