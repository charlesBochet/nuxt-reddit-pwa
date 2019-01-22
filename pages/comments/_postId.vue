<template>
  <section class="comments">
    <div class="comments__post">
      <Post :post="post" />
    </div>
    <div
      class="comments__comment"
      v-for="comment in comments"
      :key="comment.id"
    >
      <Comment :comment="comment" />
    </div>
  </section>
</template>

<script>
import { getComments } from '~/services/redditClient.js'
import Comment from '~/components/Comment'
import Post from '~/components/Post'

export default {
  components: {
    Comment,
    Post
  },
  data: () => ({
    post: {},
    comments: [],
    isError: false,
  }),
  async asyncData ({ params }) {
    const [[post], comments] = await getComments(params.postId)
    return {
      post,
      comments
    }
  }
}
</script>

<style lang="scss">
.comments {
  &__post {
    padding: 10px 10px;
    min-height: 100px;
    border-bottom: 1px solid #ccc;
  }

  &__comment {
    margin: 25px;
  }
}
</style>

