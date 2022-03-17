import React from 'react';
import styled, { css } from 'styled-components';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useTodoDispatch } from '../TodoProvider';

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  color: #dee2e6;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} { // TodoItemBlock에 hover 했을때 Remove 컴포넌트 보여주기
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 20px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #9BA3C3;
      background-color: #D0A5FF;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 16px;
  cursor: pointer;
  color: #606982;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration:line-through;      
      text-decoration-color: #E1E6F9;
    `}
`;


function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  return(
    <>
      <TodoItemBlock>        
        <Text done={done} onClick={onToggle}>
          <CheckCircle done={done}>
            {done}
          </CheckCircle>            
          {text}
        </Text>
        <Remove onClick={onRemove}>
          <RiDeleteBin5Fill />
        </Remove>
      </TodoItemBlock>
    </>
  );
}

export default React.memo(TodoItem); // 다른 항목이 업데이트 될 때, 불필요한 리렌더링을 방지