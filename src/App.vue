<template>
  <weather-app-header/>
  <router-view/>
  <weather-app-footer/>
</template>

<script>
import WeatherAppFooter from './components/Footer.vue'
import WeatherAppHeader from './components/Header.vue'
export default {
  components:{
    WeatherAppFooter,
    WeatherAppHeader
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  width: 100%;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
