type CalculatorButtons = {
  label: string | number;
  type: "special" | "operator" | "number";
  disabled?: boolean;
  isWide?: boolean;
}


// type CalculatorKey = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '+' | '-' | '*' | '/' | '=' | '.' | 'Enter' | 'Backspace' | 'Delete' | 'Escape';


type CalculatorKeyPayload = {
  label: string | number;
  type: string;
};

type CalculatorKeyMap = {
  [key: string]: CalculatorKeyPayload;
};

type TodoItem = {
  id: number | string
  title: string
  completed: boolean
}

export type {
  CalculatorButtons,
  CalculatorKeyMap,
  TodoItem,
  CalculatorKeyPayload
}
