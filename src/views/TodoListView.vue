<script setup lang="ts">
import { ref, computed } from "vue";
import { storeToRefs } from 'pinia'
import { useTodoListStore } from '@/stores/todoListStore'
import { XCircle, Plus, Check, ListTodo } from 'lucide-vue-next';
import Container from '../components/Container.vue'
import type { TodoItem } from '@/utils/types'

const todoStore = useTodoListStore()
const { allTodos, completedTodos, incompleteTodos } = storeToRefs(todoStore)
const { removeTodoItem, addTodoItem, updateTodoItem } = todoStore

const selectedFilter = ref<'All' | 'Active' | 'Completed'>('All');
const newItemTitle = ref('');
const remainingTodos = computed(() => incompleteTodos.value.length);

const todos = computed(() => {
  if (selectedFilter.value === 'Active') {
    return incompleteTodos.value;
  } else if (selectedFilter.value === 'Completed') {
    return completedTodos.value;
  }
  return allTodos.value;
})

const filters = ref([
  'All',
  'Active',
  'Completed'
])

const addNewItem = (item: TodoItem) => {
  if (newItemTitle.value.trim().length > 0) {
    addTodoItem({id: todos.value.length ,title: newItemTitle.value.trim(), completed: false});
    newItemTitle.value = '';
  }
}

const setFilter = (filter: 'All' | 'Active' | 'Completed')  => {
  selectedFilter.value = filter;
}

</script>

<template>
  <Container>
    <div class="todo-list">
      <div class="p-5 border-b border-white/20 flex items-center justify-between">
        <div class="flex items-center">
          <ListTodo :size="24" />
          <h1 class="text-xl ml-4 font-semibold">My Tasks</h1>
        </div>
        <span class="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
          {{ remainingTodos }} remaining items
        </span>
      </div>
      <div class="button-group">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="setFilter(filter as 'All' | 'Active' | 'Completed')"
          class="filter-btn p-2 m-2 rounded action-button"
        >
          {{ filter }}
        </button>
      </div>
      <form>
        <input
          type="text"
          v-model="newItemTitle"
          placeholder="Add a new todo"
          class="new-todo-item w-1/2 p-2 rounded"
        />
        <button
          type="button"
          @click="addNewItem({ id: todos.length, title: newItemTitle, completed: false })"
          class="add-btn p-2 h-full rounded action-button ml-2"
        >
          Add Todo
        </button>
      </form>
      <ul class="w-full flex flex-col self-center justify-self-center divide-y divide-white/10 mb-6">
        <li
          v-for="todo in todos"
          :key="todo.id"
          :class="['todo-item grid grid-cols-3 items-center gap-3 m-1 p-3 rounded-lg hover:bg-white/5 transition-colors', { 'opacity-60': todo.completed }]"
        >
        <div @click="updateTodoItem({...todo, completed: !todo.completed})"
              class="cursor-pointer p-1 flex items-center"
          >
            <Check v-if="todo.completed" :size="20" class="text-green-400" />
            <div v-else class="w-5 h-5 border-2 border-white/40 rounded-sm"></div>
          </div>
          <span :class="['align-middle', { 'line-through': todo.completed }]"
                @click="updateTodoItem({...todo, completed: !todo.completed})"
                class="cursor-pointer"
          >
            {{ todo.title }}
          </span>
          <!-- Delete button area -->
          <button
            @click="removeTodoItem(todo.id)"
            class="text-white/40 hover:text-red-400 transition-colors justify-self-end p-1"
          >
            <XCircle :size="20" />
          </button>
        </li>
      </ul>

      <span class="text-white/60 text-sm">
        Tip: Click a task to mark it as completed
      </span>
    </div>
  </Container>
</template>

<style scoped>
.todo-list {
  padding: 20px;
  font-family: sans-serif;
  text-align: center;
  width: calc(100% - 40px);

  .filter-active {
    background-color: #0079bf;
  }

  .action-button  {
    color: white;

    &:hover, &:active {
      background-color: #0079bf;
    }
  }

  .new-todo-item {
    border: 1px solid white;
    color: white;

    ::placeholder {
      color: white;
    }
  }

  .action-button {
    background-color: #155afc
  }

  .todo-item {
    color: white;

    .delete-btn {
      background-color: red;
      color: white;

      &:hover {
        background-color: darkred;
      }
    }
  }

  .title {
    color: white;
    margin-bottom: 20px; /* Add some space below heading */
  }
}
</style>
