import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import T from 'prop-types'
//import styled from 'styled-components'
import { addTodo } from './redux/modules/todo/create'
import TodoList from './TodoList'


class Todo extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: ''
      }
    }
  
    static defaultProps = {
      todos: []
    }
    register() {
      const { add } = this.props
      add(this.state.name)
      this.setState({ name: '' })
    }
  
    setName(name) {
      this.setState({ name: name })
    }
  
    render() {
      const { todos } = this.props
      const { name } = this.state
  
      const Button = () => <button onClick={() => this.register()}>追加</button>
  
      return (
        <Fragment>
          <input
            type="text"
            placeholder="タイトル"
            value={name}
            onChange={e => this.setName(e.target.value)}
          />
          <Button />
          <TodoList todos={todos} />
        </Fragment>
      )
    }
  }
  
  /*Todo.propTypes = {
    todos: T.array,
    addTodo: T.func
  }*/
  
  const mapStateToProps = state => ({
    todos: state.todoCreate.todos
  })
  
  const mapDispatchToProps = dispatch => ({
    add: todo => dispatch(addTodo(todo))
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Todo)
  