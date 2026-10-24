import { useState } from "react";

function Todoinput(props) {
   const [inputtext,setInputtext]=useState("")
   
     

     return (
      <div className="inputbox">
           <input className="inputfield" value={inputtext} placeholder="Enter Your Todo" 
           onChange={(e)=>
            {setInputtext(e.target.value)}}></input>
            <span> {console.log(inputtext)}</span>
           <button className="plusbutton" 
           onClick={()=>{props.addlist(inputtext);
            setInputtext('');}}
           
            >+</button>
      </div>
     )
}

export default Todoinput;
