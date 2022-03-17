import React from 'react';
import styled from 'styled-components';
import { FaCheck } from "react-icons/fa";


const TodoHeadBlock = styled.div`
  background-color : #AF7EEB;  
  display: flex;
  height: 40px;  
  padding: 20px;
  color: #fff;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .check-icon{
    height: 40px;
  }
  h1{
    margin-left:10px;
    font-size: 20px;
    line-height: 40px;
  }  
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <FaCheck className="check-icon" /><h1>To Do list 📝</h1>
    </TodoHeadBlock>
  );
}

export default TodoHead;