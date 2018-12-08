<template>
  <section class="container">
  </section>
</template>

<script>
import { getComments } from '~/services/redditClient.js'

export default {
  components: {
  },
  mounted: async function() {
    let comments = await getComments('pwa', 'a408bd/you_need_neither_pwa_nor_amp_to_make_your_website')
    console.log(comments)
  }
}
</script>

<style>
</style>

