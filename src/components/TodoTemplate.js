import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 400px;
  height: 500px;  
  position: relative;    
  margin: 0 auto;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
`

function TodoTemplate({ children }) {
  return (
  <TodoTemplateBlock>
    {children}
  </TodoTemplateBlock>
  );
}

export default TodoTemplate;