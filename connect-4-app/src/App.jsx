import './App.css'
import Header from './components/Header/Header/Header'
import Players from './components/Players/Players'
import Gameboard from './components/Gameboard/Gameboard'

function App() {
  return (
    <>
    <div className="app">
      <Header/>
    </div>
    <div id="game-container">
      <Players/>
      <Gameboard/>
      <Players/>
    </div>
    </>
  )
}

export default App
