<template>
  <li
    class="listing"
    :href="listing.permalink"
  >
    <div class="listing__thumbnail">
      <img v-if="listing.thumbnail !== 'self'" :src="listing.thumbnail">
    </div>
    <div class="listing__content">
      <div class="listing__details">
        <span class="listing__subreddit">{{ listing.subreddit_name_prefixed }}</span>
        <span class="listing__time">{{ listing.created_utc | fromNow }}</span>
        <span class="listing__author">{{ listing.author }}</span>
      </div>
      <div class="listing__title">
        {{ listing.title }}
      </div>
      <div class="listing__stats">
        <span class="listing__comments">{{ listing.num_comments }}</span>
        <span class="listing__upvotes">{{ listing.ups }}</span>
      </div>
    </div>

  </li>
</template>

<script>
import moment from 'moment'

export default {
  props: ['listing'],
  filters: {
    fromNow(date) {
      return moment(date).fromNow();
    }
  }
}
</script>

<style lang="scss">
  .listing {
    font-size: 14px;
    font-weight: bold;
    list-style: none;
    padding: 10px 10px;
    border-bottom: 1px solid #ccc;
    min-height: 100px;

    &__thumbnail {
      width: 30%;
      display: inline-block;
      img {
        width: 100%;
      }
    }
    &__content {
      padding: 5px;
      width: 65%;
      display: inline-block;
      vertical-align: top;
    }
  }
</style>

