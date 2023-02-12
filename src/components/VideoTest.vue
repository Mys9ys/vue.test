<template>
  <div class="container">
    <post-form
        @create="createPost"
    />
    <post-list
        :posts="posts"
        @remove="removePost"
    />
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";

export default {
  components: {
    PostList,
    PostForm
  },
  name: "VideoTest",

  data() {
    return {
      title: '',
      body: '',
      posts: [
        {id: 0, title: "post", body: "body"},
        {id: 1, title: "post 1", body: "body 1"},
        {id: 2, title: "post 2", body: "body 2"}
      ]
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post)
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  }
}
</script>

<style scoped>
.container {
  width: 400px;
  margin: 0 auto;
}

*{
  box-sizing: border-box;
}

</style>