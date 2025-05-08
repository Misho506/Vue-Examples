type CalculatorButtons = {
  label: string | number;
  type: "special" | "operator" | "number";
  disabled?: boolean;
  isWide?: boolean;
}

type CalculatorKeyMap = {
  [key: string]: CalculatorButtons;
}

type TodoItem = {
  id: number | string
  title: string
  completed: boolean
}

export type {
  CalculatorButtons,
  CalculatorKeyMap,
  TodoItem
}

