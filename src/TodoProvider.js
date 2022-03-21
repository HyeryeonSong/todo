import React, { useReducer, createContext, useContext, useRef } from 'react';
// Context API : App 안에서 전역적으로 데이터 관리(단점: 컴포넌트 재사용이 어려울 수 있음)
// useContext : Context로 공유한 데이터를 받아오는 역할

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기', 
    done: true 
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: false
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
];

// concat, map, filter 메소드 사용
function todoReducer(state, action) { // 첫번째인자 : state, 두번째인자 : state를 변화시키는 함수
  switch (action.type) { // 입력변수(TodoItem에서 지정한 type)
    case 'CREATE': // 조건식(변수와 case가 일치하면 해당 코드와 이후의 조건문 모두 실행 )
      return state.concat(action.todo); // 기존 배열에 새로운 배열 추가
      // 해당하는 case만 실행하고 싶으면 break; 추가
    case 'TOGGLE':
      return state.map(todo => // 배열 내의 모든 요소를 호출한결과를 모아 새로운 배열 반환
        todo.id === action.id ? { ...todo, done: !todo.done } : todo // 선택한요소의 done 상태를 true면 false로, false면 true로 변환
      );
    case 'REMOVE':       
      return state.filter(todo => todo.id !== action.id); // 클릭한 요소를 제외한 요소만 모아서 새로운 배열으로 반환             
    case 'EDIT':
      return state.concat(action.todo);
    default: // 주어진 case가 없을 때 실행
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos); // todoReducer : 상태 업데이트 함수, initialTodos : 초기상태  
  const nextId = useRef(5);  // nextID : 새로운 항복을 추가할 때 사용할 고유 ID / useRef를 사용하여 관리

  return (    
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}