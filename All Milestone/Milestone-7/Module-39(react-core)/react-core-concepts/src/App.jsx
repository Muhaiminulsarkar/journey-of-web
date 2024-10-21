

import './App.css'
import Counter from './Counter'

function App() {

  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  return (
    <>

      <h1>React core concept</h1>
      <Counter></Counter>




      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => alert('third clicked')}>Click 3 </button>

    </>
  )
}

export default App
