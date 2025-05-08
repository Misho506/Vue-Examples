<script setup lang="ts">
import { defineProp } from 'vue';


</script>
<template>
  <div class="container my-6 mx-4 bg-white/10 backdrop-blur-md rounded-xl shadow-xl overflow-hidden">
    <slot></slot>
  </div>
</template>
<style scoped>
.container {
  width: calc(100vw - 32px);
}
</style>
