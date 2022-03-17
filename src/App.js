import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoProvider';


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;    
  }

  body {
    background: #E3E9FF;        
  }  
`;

function App() {

  return (
    // 프로젝트 모든 곳에서 Todo 관련 Context 들을 사용 할 수 있도록, 모든 내용을 TodoProvider 로 감싸준다.
    <TodoProvider>      
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoCreate />
        <TodoList />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
