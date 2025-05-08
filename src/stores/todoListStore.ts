import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { TodoItem } from '@/utils/types'

// This is your initial data source
const todoListData: TodoItem[] = [
  { id: 1, title: 'Learn Vue.js', completed: false },
  { id: 2, title: 'Learn Pinia', completed: false },
  { id: 3, title: 'Build a Todo App', completed: false },
  { id: 4, title: 'Deploy the App', completed: false }
]

export const useTodoListStore = defineStore('todoList', () => {
  // --- State ---
  // Initialized as empty, would need setTodoList to be called with todoListData
  const todoList = ref<TodoItem[]>([])

  // --- Getters ---
  const allTodos = computed(() => todoList.value)
  const completedTodos = computed(() => todoList.value.filter((todo) => todo.completed))
  const incompleteTodos = computed(() => todoList.value.filter((todo) => !todo.completed))

  // --- Actions ---
  const setTodoList = (newTodoList: TodoItem[]) => {
    todoList.value = newTodoList
  }

  const addTodoItem = (newTodoItem: TodoItem) => {
    todoList.value.push(newTodoItem)
  }

  const removeTodoItem = (todoId: number | string) => { // Renamed param for clarity
    todoList.value = todoList.value.filter((todo) => todo.id !== todoId)
  }

  const updateTodoItem = (updatedItem: TodoItem) => {
    todoList.value = todoList.value.map((todo) =>
      updatedItem.id === todo.id ? updatedItem : todo
    )
  }

  // Action to initialize the store with default data (if not done at ref creation)
  function initializeWithDefaultData() {
    if (todoList.value.length === 0) { // Only initialize if empty
        setTodoList([...todoListData]); // Use a copy
    }
  }
  // Call it once if you want the store to self-initialize
  // initializeWithDefaultData(); // Or call this from App.vue or a root component

  return {
    todoList,
    allTodos,
    completedTodos,
    incompleteTodos,
    setTodoList,
    addTodoItem,
    removeTodoItem,
    updateTodoItem,
    initializeWithDefaultData // Expose if needed externally
  }
})
