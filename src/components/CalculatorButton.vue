<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  label: {
    type: [String, Number],
    required: true
  },
  type: { // To distinguish between numbers, operators, special keys
    type: String,
    default: 'number' // 'number', 'operator', 'special'
  },
  isWide: { // Optional prop for wider buttons like '0' or '='
    type: Boolean,
    default: false
  }
});

// Define events this component can emit
const emit = defineEmits(['button-click']);

const handleClick = () => {
  // Emit an event named 'button-click' with the button's label and type
  emit('button-click', { label: props.label, type: props.type });
}
</script>

<template>
  <button @click="handleClick" :class="['calculator-button', `button-type-${type}`, { 'wide-button': isWide }]">
    {{ label }}
  </button>
</template>

<style scoped>
.calculator-button {
  font-size: 1.5em;
  padding: 20px;
  border: 1px solid white;
  background-color: #f9f9f9;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s ease;
  min-width: 70px;
  box-sizing: border-box;

  &:active {
    background-color: #ddd;
  }
}

.button-type-operator {
  background-color: #467dff;
  border: 1px solid #0f4c8a;
  /* Orange for operators */
  color: white;

  &:hover, &:active {
    background-color: #2358d5;
  }
}


.button-type-special {
  background-color: #0079bf;
  border: 1px solid #005f8c;
  color: white;
  &:hover, &:active {
    background-color: #005e95;
  }
}


.wide-button {
  grid-column: span 2;
}

.button-type-number {
  background-color: white;
  color: black;

  &:hover {
    background-color: #dddddd;
  }
}
</style>
