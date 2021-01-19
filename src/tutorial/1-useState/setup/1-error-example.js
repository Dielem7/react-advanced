import React from 'react';

const ErrorExample = () => {
const title = 'Random Title';
const handleClick = ()=> {
  ;
}

  return (
    <div>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>Change Title</button>
    </div>
  
  );
};

export default ErrorExample;
