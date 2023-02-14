<template>
  <div class="container">
    <h2>Страница</h2>
    <my-input v-model="searchQuery" placeholder="Поиск..."/>
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
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div class="page__wrapper">
      <div
          class="page"
          :class="{
            'curent_page': page === pageNumber
          }"
          v-for="pageNumber in totalPages"
          :key="pageNumber">{{ pageNumber }}
      </div>
    </div>
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
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
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
    showDialog() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',
            {
              params: {
                _page: this.page,
                _limit: this.limit
              }
            })
        this.totalPages = Math.ceil(response.headers["x-total-count"] / this.limit)
        this.posts = response.data

      } catch (e) {
        alert('error')
      } finally {
        this.isPostLoading = false
      }
    }
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  }
  // watch:{
  //   selectedSort(newValue){
  //     this.posts.sort((post1, post2) => {
  //       return post1[newValue]?.localeCompare(post2[newValue])
  //     })
  //   }
  // }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
}

.app_btns {
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
  margin-right: 5px;
}

.curent_page {
  border: 2px solid peru;
}

</style>