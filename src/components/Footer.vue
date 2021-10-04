<template>
    <div class="FooterWrapper">
        <div class="linksContainer">
            <a href="https://github.com/iskan-iskra">
                <div class="icon githubIcon"></div>
            </a>
            <a href="https://www.instagram.com/iskan_iskra">
                <div class="icon instagramIcon"></div>
            </a>
            <a href="https://telegram.me/iskan_iskra">
                <div class="icon telegramIcon"></div>
            </a>
            <a href="https://vk.com/iskan_iskra">
                <div class="icon vkIcon"></div>
            </a>
        </div>
        <div class="primiryData">
            This is test app for getting weather info from https://api.openweathermap.org
        </div>
        <div class="secondaryData">
            <div>{{ new Date().getFullYear() }}</div>
            <div>-</div>
            <div>Iskander Test App</div>
         </div>
    </div>
</template>

<script>
export default {
    name: "WeatherAppFooter",
};
</script>

<style lang="scss" scoped>
    .FooterWrapper{
        margin-top: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        .linksContainer{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            max-width: 200px;
            width: 30%;
            min-width: 150px;
            .icon{
                min-width: 30px;
                height: 30px;
                mask-position: center;
                mask-size: cover;
                mask-repeat: none;
                background-color: #2c3e50;
                transition: background-color .2s;
                &:hover{
                    background-color: #42b983;
                }
            }
            .githubIcon{
                mask-image: url('../assets/githubIcon.svg');
            }
            .instagramIcon{
                mask-image: url('../assets/instagramIcon.svg');
            }
            .telegramIcon{
                mask-image: url('../assets/telegramIcon.svg');
            }
            .vkIcon{
                mask-image: url('../assets/vkIcon.svg');
            }
        }
        .primiryData{
            width: 80%;
            padding-top: 20px;
        }
        .secondaryData{
            display: flex;
            flex-direction: row;
            padding: 20px 0;
        }
    }
</style>
