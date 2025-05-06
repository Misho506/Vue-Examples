<script setup lang="ts"></script>
<template>
  <header class="app-header">
    <div class="links-container">
      <router-link class="link p-2 rounded " to="/">Calculator</router-link>
      <router-link class="link p-2 rounded " to="/todoList">Todo List</router-link>
    </div>
  </header>
</template>
<style scoped>
.app-header {
  padding: 10px; /* Padding around the header */
  text-align: center; /* Center the text */
  background: #0079bf;
  background: radial-gradient(circle,rgba(0, 121, 191, 1) 0%, rgba(0, 101, 189, 1) 45%, rgba(3, 0, 0, 1) 100%);

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
