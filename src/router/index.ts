import { createRouter, createWebHistory } from 'vue-router'
import CalculatorView from '@/views/CalculatorView.vue'
import TodoListView from '@/views/TodoListView.vue'

const routes = [
  {
    path: '/', // The default route
    name: 'Calculator',
    component: CalculatorView
  },
  {
    path: '/todoList',
    name: 'TodoList',
    component: TodoListView
    // component: () => import('../views/TodoListView.vue') // Lazy load (optional)
  }
  // Add more routes here later if needed
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Use HTML5 history mode
  routes // short for `routes: routes`
})

export default router
