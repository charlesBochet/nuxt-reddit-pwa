<template>
  <section class="container">
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

<style>
</style>

