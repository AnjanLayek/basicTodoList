import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [text,setText] = useState('');
  const[list,setList] = useState([]);
  const listUpdater = ()=>{
    setList((item) => {
      return [...item,text]
    })
    setText('')
  }
  const deleteList = ((e) =>{
    setList((items)=>{
     return items.filter((elmt,i)=>{
        return e.target.id != i
      })
    })
  })
  return (
    <div className="App">
     <input type='text' placeholder='Enter Text'value={text} onChange={(e)=>  {setText(e.target.value)}}></input>
     <button onClick={listUpdater}>Add</button>
     
     <div>
      <ol>
        {list.map((e,i) => <><li key={i}>{e}</li>
        <button onClick={deleteList} id={i}>Delete</button>
        </>)}
        </ol>
        </div>
    </div>
  );
}

export default App;
