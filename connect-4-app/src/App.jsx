import './App.css'
import Header from './components/Header/Header/Header'
import Players from './components/Players/Players'
import Gameboard from './components/Gameboard/Gameboard'
import Timer from './components/Timer/Timer'

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
    <Timer/>
    </>
  )
}

export default App
