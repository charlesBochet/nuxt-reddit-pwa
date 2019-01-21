<template>
  <section class="container">
    <h1>{{ post.title }}</h1>
    <div
      class="comment"
      v-for="comment in comments"
      :key="comment.id"
    >
      <Comment :comment="comment" />
    </div>
  </section>
</template>

<script>
import { getComments } from '~/services/redditClient.js'
import Comment from '~/components/comment'

export default {
  components: {
    Comment
  },
  data: () => ({
    comments: [],
    post: {}
  }),
  mounted: async function() {
    const [[post], comments] = await getComments('pwa', 'a408bd/you_need_neither_pwa_nor_amp_to_make_your_website')
    this.post = post
    this.comments = comments
  }
}
</script>

<style>
.comment {
  margin: 25px;
}
</style>

