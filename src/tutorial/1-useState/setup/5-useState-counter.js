import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  }
  
  const complexIncrease = () => {
    setTimeout(() =>{
      setValue(value + 1);
    }, 2000);
  }
  
  return (
<>
  <section style={{margin: '4rem 0'}}>
    <h2>Regular Counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value - 1)}>decrease</button>
    <button className='btn' onClick={reset}>Reset</button>
    <button className='btn' onClick={() => setValue(value + 1)}>Increase</button>
    </section>
 <hr />
    <section style={{margin: '4rem 0'}}>
    <h2>Regular Counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={complexIncrease}>Increase Delayed</button>
    
    </section>
</>
  );
};

export default UseStateCounter;
