import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoProvider';

const TodoListBlock = styled.div`
  background-color: #fff;
  bottom: 0;
  height: 100%;
  margin-top: 20px;
  padding: 30px;
  padding-bottom: 140px;
`

function TodoList(){
  const todos = useTodoState();

  return(
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;

