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
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex';

export default {
    name: 'WeatherAppHistory',
    setup() {
        const store = useStore()
        const historySearch = computed(()=>{
            return store.getters['weatherStore/getHistoryOfSearch']
        })

        function chooseCity(el){
            store.commit('weatherStore/SET_REQUIRECITY',el)
            store.dispatch('weatherStore/getWeatherFromApi')
        }

        function removeCitiesFromHistory(){
            setTimeout(()=>{store.commit('weatherStore/CLEAR_HISTORY')},300)
        }

        function checkHistory(){
            store.commit('weatherStore/CHECK_HISTORY')
        }

        onMounted(()=>{
            checkHistory()
        })
        return{
            historySearch,
            chooseCity,
            removeCitiesFromHistory
        }
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
            padding: 5px;
            margin-top: auto;
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