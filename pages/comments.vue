<template>
  <section class="container">
  </section>
</template>

<script>
import { getComments } from '~/services/redditClient.js'

export default {
  components: {
  },
  mounted() {
    getComments('pwa', 'a408bd/you_need_neither_pwa_nor_amp_to_make_your_website')
  }
}
</script>

<style>
</style>

