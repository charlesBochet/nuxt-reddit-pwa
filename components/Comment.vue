<template>
  <div>
    {{ comment.body }}
  </div>
</template>
<script>
export default {
  props: {
    comment: Object
  },
  mounted: function () {console.log('this.comment', this.comment)}
}
</script>
