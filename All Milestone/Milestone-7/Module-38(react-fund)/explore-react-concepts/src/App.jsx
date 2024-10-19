
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

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

      <Todo
        task={'react'}
        isDone={true}>
      </Todo>

      <Todo
        task={'angular'}
        isDone={false}>
      </Todo>




      {/* <Trial></Trial>
      <Developer></Developer>
      <Device name="laptop" model="hp"></Device>
      <Device name="mobile" model="mi"></Device>

      <Student sreni="10" roll="3"></Student>
      <Student sreni={5} roll={5}></Student>
      <Student></Student> */}

    </>
  )

}

function Device(props) { // here use props directly
  // console.log(props);
  let name = props.name; // here also can take value in a variable
  return (
    <div>
      <h2>My device is : {name} and model:{props.model}</h2>
      <h2></h2>
    </div>
  )
}

// const {sreni,roll} = {sreni : '9' , roll: '3'} // destructure format

function Student({ sreni = 0, roll = 0 }) { // here use props via destructure format and give default value 0
  return (
    <div className='trial'>
      <h3>This is a student</h3>
      <p>Name:Parosh</p>
      <p>Class: {sreni} & Roll No: {roll}</p>

    </div>
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
    border: '3px solid red',
    marginTop: '5px',
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
