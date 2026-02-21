import './App.css'
import Header from './components/Header/Header/Header'
import Players from './components/Players/Players'

function App() {
  return (
    <>
    <div className="app">
      <Header/>
    </div>
    <div id="game-container">
      <Players/>
      <Players/>
    </div>
    </>
  )
}

export default App
