<template>
  <span
    class="post"
    :href="post.permalink"
  >
    <div class="post__thumbnail">
      <img v-if="post.thumbnail !== 'self'" :src="post.thumbnail">
    </div>
    <div class="post__content">
      <div class="post__details">
        <span class="post__details__subreddit">{{ post.subreddit_name_prefixed }}</span>
        <span class="post__details__time">{{ post.created_utc | fromNow }}</span>
        <span class="post__details__author">{{ post.author }}</span>
      </div>
      <div class="post__title">
        {{ post.title }}
      </div>
      <div class="post__stats">
        <span class="post__stats__comments">{{ post.num_comments }} comments</span> -
        <span class="post__stats__ups">{{ post.ups }} upvotes</span>
      </div>
    </div>
  </span>
</template>

<script>
import moment from 'moment'

export default {
  props: ['post'],
  filters: {
    fromNow(date) {
      return moment.unix(date).fromNow();
    }
  }
}
</script>

<style lang="scss">
  .post {
    @media (min-width: 992px) {
      font-size: 25px;
    }
    font-size: 14px;

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

