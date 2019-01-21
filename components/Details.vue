<template>
  <div class="details">
    <span v-if="!hideSubreddit" class="details__subreddit">{{ post.subreddit_name_prefixed }}</span>
    <span class="details__time">{{ post.created_utc | fromNow }}</span>
    <span class="details__author">{{ post.author }}</span>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  props: ['post', 'hideSubreddit'],
  filters: {
    fromNow(date) {
      return moment.unix(date).fromNow();
    }
  }
}
</script>
<style lang="scss">
.details {
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
</style>