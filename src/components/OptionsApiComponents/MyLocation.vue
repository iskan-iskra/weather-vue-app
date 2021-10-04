<template>
  <div class="Wrapper">
    <div class="Title">Текущее местоположение:</div>
    <div class="ModalError">ДАННАЯ ФУНКЦИЯ ВРЕМЕННО НЕ ДОСТУПНА</div>
  </div>
</template>

<script>
export default {
  name: "WeatherAppMylocation",

  data() {
    return {};
  },

  mounted() {
    // this.getMyLocation();
  },

  methods: {
    // getMyLocation: function() {
    //   window.onload = function() {
    //     var startPos;
    //     var geoSuccess = function(position) {
    //       startPos = position;
    //       document.getElementById("startLat").innerHTML =
    //         startPos.coords.latitude;
    //       document.getElementById("startLon").innerHTML =
    //         startPos.coords.longitude;
    //     };
    //     navigator.geolocation.getCurrentPosition(geoSuccess);
    //   };
    // },
  },
};
</script>

<style lang="scss" scoped>
.Wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 45%;
  margin-top: 20px;
  min-height: 100px;
  position: relative;
  .Title {
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    text-align: center;
  }
  .ModalError{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0,0,0,.3);
      backdrop-filter: blur(2px);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
  }
}
</style>
