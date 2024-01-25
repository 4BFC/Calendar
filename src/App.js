import { useState } from 'react';
import './styled.css';

function App() {
  const [month, setMonth] = useState(1)
  function test(e) {
    setMonth(e.target.value);
  }
  return (
    <>
      <header>
        <div>
          profile
        </div>
      </header>
      <div className='container'>
        <div className='m_btn'>
          <button value={1} onClick={test}>1</button>
          <button value={2} onClick={test}>2</button>
          <button value={3} onClick={test}>3</button>
          <button value={4} onClick={test}>4</button>
          <button value={5} onClick={test}>5</button>
          <button value={6} onClick={test}>6</button>
          <button value={7} onClick={test}>7</button>
          <button value={8} onClick={test}>8</button>
          <button value={9} onClick={test}>9</button>
          <button value={10} onClick={test}>10</button>
          <button value={11} onClick={test}>11</button>
          <button value={12} onClick={test}>12</button>
        </div>
        <div className='month'>
          <h1>{month}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
