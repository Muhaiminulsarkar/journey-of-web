
import './App.css'
import LineCharts from './components/LineCharts/LineCharts'
import NavBar from './components/Navbar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {



  return (
    <>

      <h1 className='text-4xl'>Vite + React</h1>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <br />
      <LineCharts></LineCharts>
      <Phones></Phones>

    </>
  )
}

export default App
