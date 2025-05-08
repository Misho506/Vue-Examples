<script setup lang="ts">
import CustomHeader from '@/components/CustomHeader.vue';
import { onMounted } from 'vue';

// Lifecycle hooks here are for the *overall App layout*
onMounted(() => {
  console.log("App Layout Mounted");
});

// Note: Calculator-specific logic and imports have been moved to CalculatorView.vue
</script>

<template>
  <div id="app-layout" class="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-900 text-white flex flex-col items-center">
    <CustomHeader />
    <main>
      <!-- RouterView will render the component based on the current URL -->
      <router-view />
    </main>
    <!-- You could add a TheFooter component here later -->
  </div>
</template>

<style>
/* You can add layout-specific styles here if needed */
#app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

main {
  display: flex;
  flex-grow: 1; /* Allows the main content area to take up remaining space */
  padding: 0; /* Remove default padding if App.vue had it */
   /* background-color: #e9e9e9; /* Moved global background to App.vue if desired */
}

 /* Reset default browser margin/padding - often done in style.css or index.css */
body {
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

</style>
