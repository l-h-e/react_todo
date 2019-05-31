export const ADD_TODO = 'ADD_TODO'

const initialState = {
  todos: []
}

export default function create(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    default:
      return state
  }
}

export const addTodo = todo => ({ type: ADD_TODO, payload: todo })
