<template>
  <ul v-if="listings" class="listings__container">
    <li
      v-for="(listing, index) in listings"
      :key="index"
      class="listings__item">
      <listing
        :listing="listing" />
    </li>
  </ul>
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
.listings{
  &__container {
    width: 100%;
    @media (min-width: 992px) {
      width: 70%;
    }
    margin: auto;
    margin-bottom: 20px;
    background-color: #fff;
    padding: 0;
  }

  &__item {
    list-style: none;
    padding: 10px 10px;
    border-bottom: 1px solid #ccc;
    min-height: 100px;
    cursor: pointer;
  }
}
</style>