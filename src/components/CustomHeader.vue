<script setup lang="ts"></script>
<template>
  <header class="app-header">
    <div class="links-container">
      <router-link class="link" to="/">Calculator</router-link>
      <router-link class="link" to="/todoList">Todo List</router-link>
    </div>
  </header>
</template>
<style scoped>
.app-header {
  background-color: #4CAF50; /* Green background */
  padding: 10px; /* Padding around the header */
  text-align: center; /* Center the text */

  .links-container {
    display: flex; /* Use flexbox for layout */
    justify-content: center; /* Center the links */
    gap: 20px; /* Space between links */
  }
  .link {
    color: white; /* White text color */
    text-decoration: none; /* Remove underline from links */
    font-size: 18px; /* Font size for links */
  }
}
</style>
