import React from 'react';
import './App.css';
import ClassCounter from './components/UseStateHook/ClassCounter';
import HookCounter from './components/UseStateHook/HookCounter';
import HookCounterPrevState from './components/UseStateHookPrevState/HookCounterPrevState';

function App() {
  return (
    <div className="App">
      <h1>React Hooks Tutorials</h1>
      <ClassCounter />
      <HookCounter />
      <HookCounterPrevState />
    </div>
  );
}

export default App;
