<template>
  <ul v-if="posts" class="posts__container">
    <li
      v-for="(post, index) in posts"
      :key="index"
      class="posts__item">
      <post
        :post="post" />
    </li>
  </ul>
</template>

<script>
import { getNewPosts } from '~/services/redditClient.js'
import Post from '~/components/Post'

export default {
  components: {
    Post,
  },
  data() {
    return {
      posts: null
    }
  },
  mounted: async function () {
    this.posts = await getNewPosts('pwa')
    console.log(this.posts)
  }
}
</script>
<style lang="scss">
.posts{
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