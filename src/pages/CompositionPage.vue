<template>
  <div>
    <h2>Composition</h2>
    <h4>{{ likes }}</h4>

    <button @click="addLike">addLike</button>

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
    <!--    // подгрузка следующих элементов-->
    <!--        ref="observer" -->
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import {ref} from "vue";
import {usePost} from "@/hooks/usePost";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
import PostList from "@/components/PostList";

export default {
  name: "CompositionPage",
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'title'},
        {value: 'body', name: 'body'}
      ]
    }
  },

  components: {
    PostList
  },
  setup(props){
    console.log(props)

    const {posts, isPostLoading, totalPages} = usePost(10)
    const {sortedPosts, selectedSort} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)
    const likes = ref(0)

    const addLike = () => {
      likes.value += 1
    }

    return {
      posts,
      isPostLoading,
      totalPages,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
      likes,
      addLike
    }
  }
}
</script>

<style scoped>

</style>