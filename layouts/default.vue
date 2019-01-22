<template>
  <div class="app__container">
    <Header :subreddit="subreddit" />
    <div class="app__nav-container">
      <nuxt-link class="nav-container__title" to="/">Posts</nuxt-link>
    </div>
    <div class="app__content-container">
      <div class="app__list-container">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '~/components/Header'
  import { SUBREDDIT } from '~/constants'

  export default {
    components: {
      Header,
    },
    data: function() {
      return {
        subreddit: SUBREDDIT
      }
    }
  }
</script>

<style lang="scss">
.app {
  &__container {
    flex-direction: column;
    height: 100%;
  }

  &__content-container {
    flex: 1;
    display: flex;
    padding: 20px 24px;
  }

  &__list-container {
    width: 100%;
    @media (min-width: 992px) {
      width: 70%;
    }
    background-color: #fff;
    padding: 0;
  }

  &__nav-container {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: white;
    min-width: 260px;
    margin: 0px auto;
    width: 100%;

    .nav-container__title {
      font-size: 14px;
      font-weight: 700;
      line-height: 32px;
      display: inline-block;
      padding-bottom: 1px;
      padding-top: 4px;
      padding-left: 8px;
      padding-right: 8px;
      color: rgb(0, 121, 211);
      border-bottom: 3px solid rgb(0, 121, 211);
      margin: 0px 5px;
    }
  }
}
</style>

