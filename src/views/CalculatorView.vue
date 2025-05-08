<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import CalculatorDisplay from '../components/CalculatorDisplay.vue';
import CalculatorKeypad from '../components/CalculatorKeypad.vue';
import Container from '../components/Container.vue'
import { useCalculatorStore } from '@/stores/calculatorStore';
import { keyMap } from '@/utils/calculatorData';

// --- Lifecycle Hooks ---
onMounted(() => {
  // Good place for initial setup, like fetching data or adding listeners
  window.addEventListener('keydown', handleKeyPress);
});

onBeforeUnmount(() => {
  // Good place for cleanup, like removing listeners
  window.removeEventListener('keydown', handleKeyPress);
});

// Get the store instance
const calculatorStore = useCalculatorStore();

// Handler for keypad events
const handleKeypadPress = (payload) => {
  const { label, type } = payload;

  if (type === 'number') {
    calculatorStore.handleNumber(label);
  } else if (type === 'operator') {
    calculatorStore.handleOperator(label);
  } else if (type === 'special') {
    calculatorStore.handleSpecial(label); // Pass the label (e.g., 'AC', '=')
  }
}

// --- Bonus: Keyboard Support ---
const handleKeyPress = (event) => {
  const key = event.key;
  if (keyMap[key]) {
    handleKeypadPress(keyMap[key]);
  }
}
</script>

<template>
  <Container>
    <div class="calculator-container pt-5 mx-auto">
      <h1 class="mb-4 text-3xl text-white text-center font-bold">Vue Calculator</h1>
      <!-- Bind the displayValue from the store to the 'value' prop of CalculatorDisplay -->
      <CalculatorDisplay :value="calculatorStore.displayValue" />
      <!-- Listen for the 'key-press' event from CalculatorKeypad -->
      <CalculatorKeypad @key-press="handleKeypadPress" />
    </div>
  </Container>
</template>

<style>
.calculator-container {
  max-width: 400px;
}
</style>
