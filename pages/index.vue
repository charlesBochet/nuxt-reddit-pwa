<template>
  <section class="container">
  </section>
</template>

<script>
import { getNewListings } from '~/services/redditClient.js'

export default {
  components: {
  },
  mounted() {
    getNewListings('pwa')
  }
}
</script>

<style>
</style>

