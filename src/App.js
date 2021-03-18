import React, {useState} from 'react'

import './App.css';

function App() {
  const [on, setOn] = useState(false)

  const handleClick = () => {
    setOn(!on)
  }

  return (
    <div className="App">
     <h1>Light Switch</h1>
     <div className='light-switch' style={{backgroundColor:'brown', padding:'50px', display:'flex'}}>
          <div  style={{backgroundColor:on? 'white' : 'gray', width:'300px', height:'100px',border:'1px solid rgba(0,0,0,0.5)', color:'red', fontSize:'50px', fontWeight:800, padding:30}}>{on ? 'ON' : 'OFF'} </div>
          {/* <div style={{backgroundColor:'transparent', width:'300px', height:'100px', cursor:'pointer', border:'1px solid rgba(0,0,0,0.5)'}}></div> */}
          <button type='button' onClick={handleClick}>Switch</button>
     </div>
    </div>
  );
}

export default App;
