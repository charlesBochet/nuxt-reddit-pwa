<template>
  <ul v-if="posts" class="posts__container">
    <router-link tag="li"
      :to="'/comments/' + post.id"
      v-for="(post, index) in posts"
      :key="index"
      class="posts__item">
      <post
        :post="post" />
    </router-link>
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
  asyncData: async function () {
    let posts = await getNewPosts()
    return { posts: posts }
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
