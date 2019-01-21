<template>
  <div class="stats">
    <span v-if="post.num_comments" class="stats__comments">{{ post.num_comments }} comments - </span>
    <span class="stats__ups">{{ post.ups }} upvotes</span>
  </div>
</template>
<script>
export default {
  props: ['post']
}
</script>
<style lang="scss">
.stats {
  color: #aaa;
  margin-top: 5px;
}
</style>