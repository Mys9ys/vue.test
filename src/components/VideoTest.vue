<template>
  <div class="container">
    <form class="form" @submit.prevent>
      <h4>Создание поста</h4>
      <input type="text"
             :value="title"
             @input="title = $event.target.value"
             class="input"
             placeholder="Название"
      >
      <input type="text"
             :value="body"
             @input="body = $event.target.value"
             class="input"
             placeholder="Описание"
      >
      <button @click="createPost">Создать</button>
    </form>
    <div class="post" v-for="(post, index) in news" :key="index">
      <div><b>:</b>{{ post.title }}</div>
      <div><b>:</b>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoTest",

  data() {
    return {
      title: '',
      body: '',

      news: [
        {title: "post", body: "body"},
        {title: "post 1", body: "body 1"},
        {title: "post 2", body: "body 2"}
      ]
    }
  },
  methods: {
    createPost(){
      const newPost = {
        title: this.title,
        body: this.body
      }
      this.news.push(newPost)

      this.title= this.body=''

    }
  }
}
</script>

<style scoped>
.container {
  width: 400px;
  margin: 0 auto;
}
.form{
  display: flex;
  flex-direction: column;
}

.post {
  display: block;
  padding: 10px 15px;
  border: 2px solid teal;
  margin-top: 10px;
}
</style>