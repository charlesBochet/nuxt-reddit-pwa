<template>
  <span
    class="post"
    :href="post.permalink"
  >
    <div class="post__thumbnail">
      <img v-if="post.thumbnail !== 'self'" :src="post.thumbnail">
    </div>
    <div class="post__content">
      <Details :post="post" />
      <div class="post__title">
        {{ post.title }}
      </div>
      <Stats :post="post" />
    </div>
  </span>
</template>

<script>
import Details from './Details'
import Stats from './Stats'

export default {
  components: {
    Details,
    Stats
  },
  props: ['post'],
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

    &__title {
      font-weight: bold;
    }
  }
</style>

