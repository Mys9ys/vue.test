<template>
  <div class="container">
<!--      <h2>{{ $store.state.post.limit }}</h2>-->
<!--      <h1>{{$store.state.likes}}</h1>-->
<!--      <h1>{{$store.getters.doubleLikes}}</h1>-->

      <h2>Страница store</h2>
      <my-input
          :model-value="searchQuery"
          @update:model-value="setSearchQuery"
          placeholder="Поиск..."/>
      <div class="app_btns">
        <my-button
            @click="showDialog"
        >
          Создать пользователя
        </my-button>
        <my-select
            :model-value="selectedSort"
            @update:model-value = "setSelectedSort"
            :options="sortOptions"
        >
        </my-select>
      </div>


<!--      <my-dialog v-model:show="dialogVisible">-->
<!--        <post-form-->
<!--            @create="createPost"-->
<!--        />-->
<!--      </my-dialog>-->

    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />

<!--          v-if="!isPostLoading"-->
<!--      />-->

<!--      <div v-else>Идет загрузка...</div>-->
<!--      <div v-intersection="loadMorePosts" class="observer"></div>-->

  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
import PostList from "@/components/PostList";
export default {
  name: "PostElemWithStore",
  data() {
    return {
      dialogVisible: false
    }
  },
  components:{
    PostList
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),

  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  }

}
</script>

<style scoped>


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

.observer {
  height: 30px;
  background: peru;
}
</style>