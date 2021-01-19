import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };
  return (
<div>
  <h1>{text}</h1>
  <button type='button' className='btn' onClick={handleClick}>Change Title</button>
</div>

    );

};

export default UseStateBasics;
