<template>
  <div v-if="posts.length > 0">
    <h4>Список пользователей</h4>
    <post-item
        v-for="(post) in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else>Список пуст</h2>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  name: "PostList",
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
.post {
  display: block;
  padding: 10px 15px;
  border: 2px solid teal;
  margin-top: 10px;
}
</style>