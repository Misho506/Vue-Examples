<script setup lang="ts"></script>
<template>
  <header class="app-header w-full">
    <div class="links-container">
      <router-link class="link p-2 rounded hover:text-blue-300 transition-colors" to="/">Calculator</router-link>
      <router-link class="link p-2 rounded hover:text-blue-300 transition-colors" to="/todoList">Todo List</router-link>
    </div>
  </header>
</template>
<style scoped>
.app-header {
  padding: 10px;
  text-align: center;
  box-shadow: 0 0 10px 0px white;

  .links-container {
    display: flex; /* Use flexbox for layout */
    justify-content: center; /* Center the links */
    gap: 20px; /* Space between links */

    .link {
      color: white; /* White text color */
      text-decoration: none; /* Remove underline from links */
      font-size: 18px; /* Font size for links */
      &:hover {
        background-color: #335f8c;
      }
    }
  }
}
</style>
