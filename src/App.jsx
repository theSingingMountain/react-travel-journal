import './App.css'
import Navbar from './components/Navbar'
import Location from './components/Location'
import travelData from './components/travelData'
function App() {

  const locations = travelData.map( x => { return (
    <Location key={x.id} {...x} />
  )
  })

  return (
    <>
      <Navbar />
      <section className="locations-list">
        {locations}
      </section>
    </>
  )
}

export default App
