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
        <span class="listing__details__subreddit">{{ listing.subreddit_name_prefixed }}</span>
        <span class="listing__details__time">{{ listing.created_utc | fromNow }}</span>
        <span class="listing__details__author">{{ listing.author }}</span>
      </div>
      <div class="listing__title">
        {{ listing.title }}
      </div>
      <div class="listing__stats">
        <span class="listing__stats__comments">{{ listing.num_comments }} comments</span> -
        <span class="listing__stats__ups">{{ listing.ups }} upvotes</span>
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
      return moment.unix(date).fromNow();
    }
  }
}
</script>

<style lang="scss">
  .listing {
    cursor: pointer;
    @media (min-width: 992px) {
      font-size: 25px;
    }
    font-size: 14px;
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
      margin-left: 2%;
      width: 65%;
      display: inline-block;
      vertical-align: top;
    }

    &__details {
      font-weight: 100;
      color: #aaa;
      overflow: hidden;
      word-break: break-all;
      height: 1.5em;
      &__subreddit {
        font-weight: bold;
      }
      &__time {
        font-size: 0.8em;
      }
      &__author {
        font-size: 0.9em;
      }
    }

    &__title {
      font-weight: bold;
    }

    &__stats {
      color: #aaa;
      margin-top: 5px;
    }
  }
</style>

