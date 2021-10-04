<template>
  <div class="home">
    <div class="title">VUE приложение прогноза погоды</div>
    <div class="vue"></div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
};
</script>
<style lang="scss" scoped>
.home {
  user-select: none;
  .title {
    font-size: 30px;
    font-weight: 900;
    cursor:default;
     animation: titleMain 1000ms ease-in-out backwards;
  }
}
*,*:before,*:after {
  box-sizing: border-box;
}
.vue {
  width: 300px;
  height: 260px;
  margin: 50px auto;
  position: relative;
  border-style: solid;
  border-width: 260px 150px 0 150px;
  border-color: #3eb37f transparent transparent transparent;
  animation: vueMain 500ms ease-in-out backwards;
  &::before,
  &::after {
    content: "";
    display: block;
    border-style: solid;
    position: absolute;
    top: -260px;
    left: 50%;
    transform: translateX(-50%);
  }
  &::before {
    border-width: 155px 90px 0 90px;
    border-color: #33465a transparent transparent transparent;
    animation: vuePseudo 500ms ease-in-out backwards 250ms;
  }
  &::after {
    border-width: 60px 35px 0 35px;
    border-color: #fff transparent transparent transparent;
    animation: vuePseudo 500ms ease-in-out backwards 500ms;
  }
}

@keyframes titleMain{
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes vueMain {
  from {
    transform: translateY(-25px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes vuePseudo {
  from {
    transform: translateX(-50%) translateY(-25px);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
}
</style>
