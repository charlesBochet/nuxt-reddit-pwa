<template>
  <section class="comments">
    <div class="comments__post">
    <Listing :listing="post" />
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
import Listing from '~/components/Listing'

export default {
  components: {
    Comment,
    Listing
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

