import React, { useState } from 'react'
import "./App.css"
import Todoinput from './components/todoinput'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [listtodo, setListtodo] = useState([])
  const [edittext, setEdittext] = useState(null)
  const [editindex, setEditindex] = useState(null)
  const [ctask, setCtask] = useState([])
  const addlist = (inputtext) => {
    if (inputtext !== "") { setListtodo([...listtodo, inputtext]) }

  }
  const dellist = (key) => {
    let newlist = [...listtodo]
    newlist.splice(key, 1)
    setListtodo([...newlist])
  }
  const startEdit = (key) => {
    setEditindex(key)
    setEdittext(listtodo[key])
  }
  const saveEdit = () => {
    const updatedList = [...listtodo];
    updatedList[editindex] = edittext;
    setListtodo(updatedList);
    setEditindex(null);
    setEdittext("");
  }
  const completetask = (task) => {
    setCtask([...ctask, task])
    setListtodo(listtodo.filter(t => t !== task));

  }
  const cdellist=(key)=>{
     let newdellist=[...ctask]
     newdellist.splice(key,1)
     setCtask([...newdellist])
  }
  return (
    <div>
    <div className='container'>
      <h3>TODO LIST</h3>
      <Todoinput addlist={addlist} />
      {
        listtodo.map((listitem, i) => (
          <li key={i}>{editindex === i ? (
            <input
              className='editbox'
              type='text'
              value={edittext}
              onChange={(e) => setEdittext(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") saveEdit();
              }}
            />
          ) :
            (listitem)
          }

            <i className="fa-solid fa-trash" onClick={() => dellist(i)}></i>
            <i className="fa-solid fa-pen-to-square" onClick={() => startEdit(i)}></i>
            <i className="fa-solid fa-check" onClick={() => completetask(listitem)}></i>


          </li>

        )
        )
      }
    </div>
    <div className='container'>
       <h3>COMPLETED LIST</h3>
       {
       ctask.map((item,i)=>(
        <li key={i}>{item}
        <i className="fa-solid fa-trash" onClick={() => cdellist(i)}></i>
        </li>


       ))
}
    </div>
    </div>
  )

}

export default App;
