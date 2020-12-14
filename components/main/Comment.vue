<template>
  <el-card class="comment">
    <div class="comment-header">
      <span>Person name</span>
      <small><i class="el-icon-time">{{ new Date().toLocaleString() }}</i></small>
    </div>
    <div class="comment-text">
      Lorem ipsum dolor sit amet.
    </div>
  </el-card>
</template>

<script>
export default {
  props: ['comment']
}
</script>

<style scoped>
.comment {
  margin-bottom: 1rem;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: .5rem;
  font-size: .8rem;
}

.comment-text {
  white-space: pre-line;
}
</style>
