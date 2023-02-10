<template>

  <video-test></video-test>
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

  <div :class="classObject">gdsgdf</div>

<!--  <p-test :class="[isActive ? activeClass : '', errorClass]"></p-test>-->
<!--  <div :class="{activeClass: isActive}">dfasfdasf</div>-->


  <div :class="[isActive ? 'activeClass' : '']">svgs</div>
<!--  <div :class="{activeClass: isActive}">svgs sssws</div>-->

  <input @keyup.enter="clickEnter" value="dasdw">

  <br>

  <input type="checkbox" id="jack" value="Джек" v-model.lazy="checkedNames" />
  <label for="jack">Джек</label>
  <input type="checkbox" id="john" value="Джон" v-model="checkedNames" />
  <label for="john">Джон</label>
  <input type="checkbox" id="mike" value="Майк" v-model="checkedNames" />
  <label for="mike">Майк</label>
  <br />
  <span>Отмеченные имена: {{ checkedNames }}</span>




</template>

<script>
import LiItem from "@/components/LiItem";
import VideoTest from "@/components/VideoTest";
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

      isActive: true,
      error: null,

      checkedNames: []
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
      this.error = 'err'
    },
    clickEnter(){
      alert('click enter')
    }
  },
  components: {
    LiItem,
    VideoTest
    // PTest
  },
  computed: {
    classObject() {
      return {
        active: this.isActive && !this.error,
        'activeClass': this.error
      }
    }
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