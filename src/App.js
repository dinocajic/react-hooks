import React from 'react';
import './App.css';
import ClassCounter from './components/UseStateHook/ClassCounter';
import HookCounter from './components/UseStateHook/HookCounter';

function App() {
  return (
    <div className="App">
      <h1>React Hooks Tutorials</h1>
      <ClassCounter />
      <HookCounter />
    </div>
  );
}

export default App;
