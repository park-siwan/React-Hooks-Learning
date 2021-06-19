import React from 'react';
import Count from './hooks/Count';
import UseInput from './hooks/UseInput';
import UseTabs from './hooks/UseTabs';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>React hooks 예제</h1>
      <h2>#1 UseState</h2>
      <th>
        <Count />
      </th>
      <br />
      <h2>#1.1 UseInput</h2>
      <th>
        <UseInput />
      </th>
      <br />
      <th>
        <UseTabs />
      </th>
      <h2>#2 UseEffect</h2>
    </div>
  );
}

export default App;
