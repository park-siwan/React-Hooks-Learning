import React, { useState } from 'react';

function Count() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className='count'>
      <h1>카운트 : {item}</h1>
      <h2 class='subtitle'>useState를 이용한 카운팅 기능</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
}

export default Count;
