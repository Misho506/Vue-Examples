<script setup lang="ts">
import { ref } from "vue";

const remainingTodos = ref(0);
console.log('Todo List component loaded!');
</script>

<template>
  <div id="todo-list">
    <h1>My Vue Todo List ({{ remainingTodos }} remaining)</h1>
  </div>
</template>

<style scoped>
#todo-list {
  padding: 20px;
  font-family: sans-serif;
  text-align: center;
  margin: 10px auto;
  max-width: calc(100% - 40px); /* Responsive width */

  .title {
    color: #42b983;
    margin-bottom: 20px; /* Add some space below heading */
  }
}
</style>
