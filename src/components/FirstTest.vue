<template>
  <h1>{{ msg }}</h1>

  <div id="counter" >
    Счётчик: {{ counter }}
  </div>

  <p>{{ message }}</p>
  <input v-model="message" />
  <br>
  <button v-on:click="reverseMessage">Перевернуть сообщение</button>
  <br>
  <span v-if="seen">Сейчас меня видно</span>
  <br>
  <button v-on:click="changeSeen">{{seenBTNname}}</button>

  <br>
  <ol>
    <li  v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
    </li>
  </ol>

  <br>

  <ol>
    <!--
      Теперь можно передавать каждому компоненту todo-item объект с информацией
      о задаче, который может динамически изменяться. Также каждому компоненту
      определяем "key", назначение которого разберём далее в руководстве.
    -->
    <li-item
        v-for="item in groceryList"
        :todo="item"
        :key="item.id"
    ></li-item>
  </ol>

<!--  <p-test :class="[isActive ? activeClass : '', errorClass]"></p-test>-->
<!--  <div :class="{activeClass: isActive}">dfasfdasf</div>-->


<!--  <div :class="[isActive ? activeClass : '']">svgs</div>-->
<!--  <div :class="{activeClass: isActive}">svgs sssws</div>-->

</template>

<script>
import LiItem from "@/components/LiItem";
// import PTest from "@/components/PTest";

export default {
  name: "FirstTest",
  props: {
    msg: String
  },
  data() {
    return {
      counter: 12,
      message: 'Привет, Vue.js!',
      seen: true,
      seenBTNname: 'Скрыть',

      todos: [
        { text: 'Learn JavaScript'},
        { text: 'Learn Vue', id: 1},
        { text: 'Build something awesome', id: 2}
      ],

      groceryList: [
        { text: 'Vegetables' },
        { text: 'Cheese' },
        { text: 'Whatever else humans are supposed to eat' }
      ],

      isActive: true
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
          .split('')
          .reverse()
          .join('')
    },
    changeSeen(){
      this.seen = !this.seen,
      this.seenBTNname = "Отобразить"
    }
  },
  components: {
    LiItem,
    // PTest
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}

</script>

<style scoped>
  .activeClass{
    color: red;
  }
</style>