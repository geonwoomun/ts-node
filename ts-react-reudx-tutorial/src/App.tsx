import React from 'react';
import TodoInsert from './components/TodoInsrt';
import TodoList from './components/TodoList';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <TodoInsert />
      <TodoList />
      {/* <Counter /> */}
    </>
  );
}

export default App;
