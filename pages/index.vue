<template>
  <section class="container">
    <div class="homepage__left-container"></div>
    <div class="homepage__right-container"></div>
  </section>
</template>

<script>
import { getNewListings } from '~/services/redditClient.js'

export default {
  components: {
  },
  mounted: async function () {
    let listings = await getNewListings('pwa')
    console.log(listings)
  }
}
</script>

<style lang="scss">
.container {
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  max-width: 1248px;
  position: relative;
  margin: 0px auto;

}
.homepage {
  &__left-container {
    width: 648px;
    background-color: white;
  }
  &__right-container {
    margin-left: 24px;
    width: 312px;
    flex: 0 0 312px;
    background-color: white;
  }
}
</style>

