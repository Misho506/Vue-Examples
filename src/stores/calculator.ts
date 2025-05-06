import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCalculatorStore = defineStore('calculator', () => {
  // --- State ---
  const currentInput = ref<string>('0')
  const previousInput = ref<string | null>(null)
  const operator = ref<string | null>(null)
  const operatorClicked = ref<boolean>(false)

  // --- Getter ---
  const displayValue = computed<string>(() => currentInput.value)

  // --- Actions ---
  const clear = (): void => {
    currentInput.value = '0'
    previousInput.value = null
    operator.value = null
    operatorClicked.value = false
  }

  const handleNumber = (number: string | number): void => {
    const inputStr = String(number)

    if (currentInput.value === '0' || operatorClicked.value) {
      currentInput.value = inputStr
      operatorClicked.value = false
    } else {
      if (inputStr === '.' && currentInput.value.includes('.')) return
      currentInput.value += inputStr
    }
  }

  const handleOperator = (op: string): void => {
    if (operator.value && operatorClicked.value) {
      operator.value = op
      return
    }

    if (previousInput.value !== null && !operatorClicked.value) {
      calculateResult()
    }

    previousInput.value = currentInput.value
    operator.value = op
    operatorClicked.value = true
  }

  const calculateResult = (): void => {
    console.log('Action: calculateResult')

    if (!operator.value || previousInput.value === null) return

    const prev = parseFloat(previousInput.value)
    const current = parseFloat(currentInput.value)
    let result = 0

    switch (operator.value) {
      case '+':
        result = prev + current
        break
      case '-':
        result = prev - current
        break
      case '*':
        result = prev * current
        break
      case '/':
        if (current === 0) {
          alert('Cannot divide by zero!')
          clear()
          return
        }
        result = prev / current
        break
      default:
        return
    }

    currentInput.value = String(result)
    previousInput.value = null
    operator.value = null
    operatorClicked.value = false
  }

  const handleSpecial = (type: string): void => {
    console.log('Action: handleSpecial', type)
    if (type === 'AC') {
      clear()
    } else if (type === '=') {
      calculateResult()
    }
  }

  return {
    currentInput,
    previousInput,
    operator,
    operatorClicked,
    displayValue,
    clear,
    handleNumber,
    handleOperator,
    calculateResult,
    handleSpecial
  }
})
