import weatherAPI from "../../api/weatherApi";

const state = () => ({
    requireCity: '',
    weatherInfo: [],
    historyOfSearch: [],
    loading: false,
    error: false,
    storageCityList: [],
});

const mutations = {
    SET_STORAGECITYLIST:(state, data)=>{
        state.storageCityList = data
    },
    SET_WEATHERINFO:(state, info)=>{
        state.weatherInfo = info
    },
    SET_REQUIRECITY:(state, data)=>{
        state.requireCity = data
    },
    ADD_CITYTOHISTORY:(state, data)=>{
        if(!state.historyOfSearch.includes(data)){
            state.historyOfSearch.push(data)
            let stringHistoryOfSearch = JSON.stringify(state.historyOfSearch)
            localStorage.setItem('MyCities', stringHistoryOfSearch)
        }
    },
    CHECK_HISTORY: (state)=>{
        let localHistory = localStorage.getItem('MyCities')
        if(localHistory){
            let array = JSON.parse(localHistory)
            array.forEach(element => {
                if(!state.historyOfSearch.includes(element)){
                    state.historyOfSearch.push(element)
                }
            });
        }
        else{localStorage.setItem('MyCities', '')}
    },
    CLEAR_HISTORY:(state)=>{
        state.historyOfSearch = []
        localStorage.setItem('MyCities', '')
    }
    ,
    SET_LOADING:(state,data)=>{
        state.loading = data
    },
    SET_ERROR:(state, data)=>{
        state.error = data
    }
};

const actions = {
    getWeatherFromApi: async({ commit, state })=>{
        commit('SET_LOADING', true)
        const info = await weatherAPI.getWeatherData(state.requireCity)
        if(info === 'error'){
            commit('SET_ERROR', true)
            commit('SET_LOADING', false)
           
        }
        else{
            commit('SET_ERROR', false)
            commit('SET_LOADING', false)
            commit('ADD_CITYTOHISTORY', state.requireCity)
            commit('SET_WEATHERINFO', info.data)
        }
    },
};

const getters = {
    getRequireCity: function(state){
        return state.requireCity
    },
    getHistoryOfSearch: function(state){
        return state.historyOfSearch
    },
    getWeatherInfo: function(state){
        return state.weatherInfo
    },
    getLoading: function(state){
        return state.loading
    },
    getError: function(state){
        return state.error
    },
    getStorageCityList: function(state){
        return state.storageCityList
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};