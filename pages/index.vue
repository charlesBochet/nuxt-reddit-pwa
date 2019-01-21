<template>
  <section class="container">
    <ul class="homepage" v-if="listings">
      <listing
        v-for="(listing, index) in listings"
        :key="index"
        :listing="listing"
      >
      </listing>
    </ul>
  </section>
</template>

<script>
import { getNewListings } from '~/services/redditClient.js'
import Listing from '~/components/Listing'

export default {
  components: {
    Listing,
  },
  data() {
    return {
      listings: null
    }
  },
  mounted: async function () {
    this.listings = await getNewListings('pwa')
    console.log(this.listings)
  }
}
</script>

<style lang="scss">
  .container {
    width: 100%;
    height: 100%;

    .homepage {
      width: 100%;
      background-color: #fff;
      padding: 0;

      &__listing {
        font-size: 14px;
        font-weight: bold;
        list-style: none;
        padding: 10px 10px;
        border-bottom: 1px solid #ccc;
      }
    }
  }
</style>

