<template>
  <div id="nav">
    <div class="linksWrapper" :class="{active:activeBurger}" >
        <router-link @click="activeBurger=!activeBurger" v-for="route in Routes" :key="route.index" :to="route.path">{{route.name}} </router-link>
    </div>
    <div v-if="activeBurger" class="Modal" @click="activeBurger = !activeBurger"></div>
    <div class="burgerBtn" @click="activeBurger = !activeBurger" :class="{active:activeBurger}">
        <div class="burgerBtnLine upperPart"></div>
        <div class="burgerBtnLine middlePart"></div>
        <div class="burgerBtnLine downPart"></div>
    </div>
  </div>
</template>

<script>
import {routes} from '../router/index'
export default {
  name: "WeatherAppHeader",
  data() {
    return {
        activeBurger: false,
        Routes: routes
    };
  },
};
</script>

<style lang="scss" scoped>
#nav {
  z-index: 1000;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  background-color: white;
  .burgerBtn{
    display: none;
  }
  .linksWrapper {
    display: flex;
    width: 500px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
@media screen and (max-width: 560px) {
  #nav {
    justify-content: flex-end;
    position: relative;
    .burgerBtn{
        display: flex;
        z-index: 100;
        position: fixed;
        margin-top: 12px;
        min-width: 20px;
        min-height: 20px;
        padding: 10px;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 50%;
        background: rgba(255,255,255,.3);
        backdrop-filter: blur(2px);
        .burgerBtnLine{
            width: 100%;
            height: 2px;
            border-radius: 1px;
            background-color: #42b983;
            transition: .2s linear;
        }
        &.active{
            .burgerBtnLine{
                background-color: #2c3e50;
                width: 120%;
                &.upperPart{
                    transform-origin: right;
                    transform: rotate(-45deg);
                }
                &.middlePart{
                    opacity: 0;
                }
                &.downPart{
                    transform-origin: right;
                    transform: rotate(45deg);
                }
            
            }
        }
    }
    .linksWrapper {
        z-index: -1000;
        opacity: 0;
        display: none;
        visibility: hidden;
        transition: .2s;
        &.active{
            display: flex;
            z-index: 1000;
            opacity: 1;
            visibility:visible;
            position: fixed;
            left: 0;
            top: 0;
            flex-direction: column;
            align-items: flex-start;
            padding-left: 76px;
            padding-top: 30px;
            padding-bottom: 30px;
            width: calc(100% - 76px);
            background-color: white;
            z-index: 50;
            a{
                padding: 5px;
            }
        }
    }
    .Modal{
        z-index: 1;
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,.3);
        backdrop-filter: blur(2px);
        filter: blur(2px);
        }
  }
}
</style>
