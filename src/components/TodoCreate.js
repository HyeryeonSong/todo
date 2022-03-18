import React, { useState } from 'react';
import styled from 'styled-components';
import { RiAddFill, RiCloseFill } from 'react-icons/ri';
import { useTodoDispatch, useTodoNextId } from '../TodoProvider';

const TodoCreateBlock = styled.div`  
  background: #AF7EEB;  
  &:hover {
    background:  #C6A0F4;
  }
  &:active {
    background:  #BC8EF4;
  }
  
  border-radius: 20px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  color: #fff;
  cursor: pointer;
  width: 120px;
  height: 45px;
  line-height: 45px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }

  transition: 0.1s all ease;    
`

const DeleteButton = styled.div`
  display: flex;
  background: #FF4949;  
  border-radius: 20px;
  text-align: center;  
  justify-content: center;
  .icon{
    margin: auto 5px;
    margin-left: -8px;
  }
`

const StatusButton = styled.div`
  display: flex;
  text-align: center;  
  margin-left: -8px;
  justify-content: center;
  .icon{
    margin: auto 5px;
  }
`

const FormBlock = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`

const InsertForm = styled.form`
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 30px;
  padding-bottom: 50px;
`
const Input = styled.input`
  width: 100%;
  padding: 10px;  
  outline: none;
  border: 1px solid #dee2e6;
  border-radius: 4px;  
  box-sizing: border-box;
`

function TodoCreate(){  
  const [open, setOpen] = useState(false);  
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => {
    setOpen(open => !open);
  }
  const onChange = e => setValue(e.target.value); 
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return(
    <>      
      {open && (
        <FormBlock>
          <InsertForm onSubmit={onSubmit}>
            <Input 
              autoFocus 
              placeholder="할 일을 입력 후, Enter를 누르세요."
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </FormBlock>
      )}      
      <TodoCreateBlock onClick={onToggle} open={open}>
        {!open && ( // open이 false일때 New Task 추가버튼 활성화
          <StatusButton>
            <RiAddFill className="icon" />
            <p className="buttonText">New task</p>
          </StatusButton>
        )}        
        {open &&( // form이 open돼있을 때 Delete 버튼 활성화
          <DeleteButton>
            <RiCloseFill className="icon" />
            <p className="buttonText">Delete</p>
          </DeleteButton>
        )}
      </TodoCreateBlock>
    </>
  )
}

export default TodoCreate;