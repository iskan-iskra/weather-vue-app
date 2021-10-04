<template>
    <div class="wrapper">
        <div class="pageTitle">О приложении</div>
        <div class="content">
            <div class="info">Приложение показывает погоду с openweathermap api, реализация компонентов в двух подходах: compositionApi и optionsApi</div>
            <div class="title">В приложении ипсользовались технологии:</div>
            <ul>
                <li><a href="https://v3.vuejs.org/">VUE JS 3</a> - фреймворк в качестве основы приложения</li>
                <li><a href="https://vuex.vuejs.org/">VUEX</a> - хранилище для установления паттерна управления состоянием</li>
                <li><a href="https://router.vuejs.org/">VUE router</a> - в качестве маршрутизации по приложению</li>
                <li><a href="https://www.npmjs.com/package/axios">AXIOS</a> - для выполнения запросов (поддержка ES6)</li>
            </ul>
        </div>
        <div class="content">
            <a href="https://v3.vuejs.org/api/composition-api.html">
                <div class="title">Compositions Api</div>
            </a>
            <ul>
                <li>Функциональный подход, более близок к "ванильному" javascript-у</li>
                <li>Возможность писать не реактивные переменные</li>
                <li>Возможность писать свои "хуки"</li>
                <li>Более быстрый так как исходный код фремворка был переписан на typescript</li>
                <li>proxy с учотом ES6</li>
            </ul>
        </div>
        <div class="content">
            <a href="https://v3.vuejs.org/api/options-api.html">
                <div class="title">Options Api</div>
            </a>
            <ul>
                <li>Более строгий подход</li>
                <li>Более стабильный, большое количество готовых решений в интернете</li>
                <li>Более привычный</li>
            </ul>
        </div>
        <div class="aboutApp">
            <div class="version">Версия: 1.0.0</div>
            <div class="author">Разработчик: Искандер</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WeatherAppAboutpage',

    data() {
        return {
            
        };
    }
};
</script>

<style lang="scss" scoped>
    .wrapper{
        width: 80%;
        max-width: 500px;
        margin: auto;
        padding-bottom: 30px;
        .pageTitle{
            font-size: 30px;
            font-weight: 700;
            padding: 10px;
            cursor: default;
        }
        .content{
            padding: 10px;
            text-align: center;
            .title{
                font-size: 20px;
                font-weight: 600;
                text-align: center;
            }
            a{
                text-decoration: none;
                color: #2c3e50;
                transition: .2s;
                &:hover{
                    color:#42b983;
                }
            }
            li{
                text-align: left;
                padding: 3px;
            }
        }
    }
</style>