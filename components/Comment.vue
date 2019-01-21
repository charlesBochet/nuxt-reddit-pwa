<template>
  <div>
    <Details :hideSubreddit="true" :post="comment" />
    {{ comment.body }}
    <Stats :post="comment" />
  </div>
</template>
<script>
import Details from './Details'
import Stats from './Stats'

export default {
  components: {
    Details,
    Stats
  },
  props: {
    comment: Object
  },
  mounted: function () {console.log('this.comment', this.comment)}
}
</script>
