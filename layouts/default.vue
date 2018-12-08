<template>
  <div>
    <Header />
    <div class="nav-container" style="max-width:100%">
      <div>
        <nuxt-link class="nav-container__title" to="/comments">Posts</nuxt-link>
      </div>
    </div>
    <div class="content__container">
      <nuxt/>
    </div>
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

html, body {
  width: 100%;
  margin: 0;
  background-color: rgb(218, 224, 230);
}

.nav-container {
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: white;
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

.content__container {
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  max-width: 1248px;
  margin: 0px auto;
  padding: 20px 24px;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

