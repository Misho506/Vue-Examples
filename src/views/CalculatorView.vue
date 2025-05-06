<script setup lang="ts">
console.log('Calculator component loaded!');
</script>

<template>
  <div class="calculator-container">
    <h1 class="title">Vue Calculator</h1>
  </div>
</template>

<style>
.calculator-container {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  .title {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
}


</style>
