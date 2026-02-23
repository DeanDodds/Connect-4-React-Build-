import style from './Gameboard.module.css';

export default function Gameboard() {
  const Gameboard = [
  [null, null, null, null, null, null, null], 
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],  
  [null, null, null, null, null, null, null]  
]
  
  return (
    <div className={style['gameboard']}>
         {Gameboard.map((row, rowIndex) => (
           <div key={rowIndex} className={style['row']}>
             {row.map((cell, cellIndex) => (
               <div key={cellIndex} className={`${style.cell} ${
      cell === 'red'
        ? style.red
        : cell === 'yellow'
        ? style.yellow
        : ''}`}></div>
             ))}
           </div>
         ))}
    </div>
  )
}