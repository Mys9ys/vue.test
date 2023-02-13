<template>
  <div class="post" >
    <div>
      <div>{{post.id}}<b>название:</b> {{ post.title }}</div>
      <div><b>описание:</b> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button
          @click="$emit('remove', post)"
      >
        Удалить
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  display: flex;
  padding: 10px 15px;
  border: 2px solid teal;
  margin-top: 10px;
  flex-direction: row;
}
</style>