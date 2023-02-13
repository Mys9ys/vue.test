<template>
  <div class="container">
    <h2>Страница</h2>
    <div class="app_btns">
      <my-button
          @click="showDialog"
      >
        Создать пользователя
      </my-button>
      <my-select
      v-model="selectedSort"
      :options="sortOptions"
      >
      </my-select>
    </div>

    <my-button @click="fetchPosts">Выгрузить</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <post-list
        :posts="posts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import axios from "axios";

export default {
  components: {
    PostList,
    PostForm
  },
  name: "VideoTest",

  data() {
    return {
      dialogVisible: false,
      posts: [
      //   {id: 0, title: "post", body: "body"},
      //   {id: 1, title: "post 1", body: "body 1"},
      //   {id: 2, title: "post 2", body: "body 2"}
      ],
      isPostLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'title'},
        {value: 'body', name: 'body'}
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog(){
      this.dialogVisible = true
    },
    async fetchPosts(){
      try{
        this.isPostLoading = true
        setTimeout(async ()=>{
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          this.posts = response.data
          this.isPostLoading = false
        }, 1000)

      } catch (e) {
        alert('error')
      }
    }
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
}

.app_btns{
  display: flex;
  justify-content: space-between;
}


</style>