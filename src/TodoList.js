import React from 'react'
//import styled from 'styled-components'

const TodoList = props => {
  let id = 1
  return (
      <div>{props.todos.map(todo => (
        <div>{id++}:{todo}</div>
      ))}</div>
      )
}

TodoList.defaultProps = {
  todos: []
}

export default TodoList
