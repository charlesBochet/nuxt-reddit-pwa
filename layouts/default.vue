<template>
  <div>
    <Header />
    <div class="nav-container" style="max-width:100%">
      <div>
        <nuxt-link class="nav-container__title" to="/">Posts</nuxt-link>
      </div>
    </div>
    <nuxt/>
  </div>
</template>

<script>
  import Header from '~/components/Header'

  export default {
    components: {
      Header,
    }
  }
</script>

<style>

a {
  text-decoration: none;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.nav-container {
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  min-width: 260px;
  margin: 0px auto;
}

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

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

