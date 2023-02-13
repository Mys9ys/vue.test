<template>
  <form class="form" @submit.prevent>
    <h4>Создание поста</h4>
    <my-input
           v-model="post.title"
           placeholder="Название"
    ></my-input>
    <my-input
           v-model="post.body"
           placeholder="Описание"
    ></my-input>
    <my-button
        style="
        align-self: flex-end;
        margin-top: 15px;"
        @click="createPost"
    >
      Создать
    </my-button>

  </form>
</template>

<script>

export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    }
  },
  methods: {
    createPost() {
      // const newPost = {
      //   title: this.title,
      //   body: this.body
      // }
      // this.news.push(newPost)
      this.post.id = Date.now()

      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }

    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
</style>