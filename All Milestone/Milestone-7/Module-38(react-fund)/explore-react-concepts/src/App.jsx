
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Trial></Trial>
      <Developer></Developer>
      <Device name="laptop"></Device>
      <Device name="mobile"></Device>

    </>
  )

}

function Device(){
  return (
    <h2>My device is : laptop</h2>
  )
}

function Trial() {
  const age = 24
  return (
    <div className='trial'>
      <h3>Trial content </h3>
      <p>my age is {age}</p>
    </div>
  )
}


function Developer() { // here use css style by using object format
  const developerStyle = {
    border:'3px solid red',
    marginTop:'5px',
    borderRadius: '10px'

  }
  return (
    <div style={developerStyle}>
      <h3>Parosh Sarkar</h3>
      <p>Trying to add css format</p>
    </div>
  )
}

export default App
