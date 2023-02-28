import './App.css';
import { useState } from 'react';


const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const updateCount = () => setCount(count + multiplier);


  return (
    <div className="App">
      <h1> Samosa Selector </h1>
      <h2> Count: {count} </h2>
      <img className='samosa' src='https://toppng.com/uploads/preview/transparent-samosas-for-your-blog-frozen-samosa-11562922780nxujrishko.png' onClick={updateCount}></img>
    </div>
  )
}



export default App
