import React from 'react'; 
import { BsTrashFill,BsCheckCircleFill } from "react-icons/bs";
function toDo({text,deleteToDo,id,updateToDo,completed}) {
    
  return (
    <div className="todo">
        <h2 className={completed ? "done":"not-dont"}>{text}</h2>
        <div className="icons" >
            <BsTrashFill  onClick={()=>deleteToDo(id)}/>
        <BsCheckCircleFill  onClick={()=>updateToDo(id)} /> 
        </div>
    </div>
  )
}

export default toDo