import { decrement, increment } from "./actions";

type Action = ReturnType<typeof increment | typeof decrement>
const initialState: any = 0

const counterReducer = (state: any = initialState , action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      state;
  }
}

export default counterReducer;