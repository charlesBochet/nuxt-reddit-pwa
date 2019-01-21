<template>
    <div>
        <div class="header__container">
            <nuxt-link class="header__link" to="/">
                <Logo />
            </nuxt-link>
        </div>
        <div class="sub-header__container">
            {{ subreddit }}
        </div>
    </div>
</template>
<script>
import Logo from './Logo.vue'

export default {
    props: ['subreddit'],
    components: {
        Logo,
    }
}
</script>
<style scoped>
    .header__container {
        padding: 0 20px;
        display: flex;
        flex-direction: row;
        background-color: white;
    }
    .header__link {
        display: flex;
        align-items: center;
        flex-direction: row;
        cursor: pointer;
    }
    .sub-header__container {
        display: block;
        text-align: center;
        color: white;
        line-height: 64px;
        font-weight: bold;
        font-size: 24px;
        height: 64px;
        min-width: 260px;
        background: center top rgb(51, 168, 255);
        background-position: center top;
        margin: 0px auto;
    }
</style>

