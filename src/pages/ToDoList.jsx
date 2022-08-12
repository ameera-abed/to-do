import React,{useState,useEffect} from 'react'; 
import FormToDo from '../components/FormToDo';
import { v4 as uuid } from 'uuid';
import ToDo from '../components/ToDo'

function ToDoList() {
const [toDos,setToDos]=useState(JSON.parse(localStorage.getItem('Todos')) ?? []);
useEffect(()=>{
  localStorage.setItem('Todos',JSON.stringify(toDos));
},[toDos]);

 const addToDo =(text)=>{
        const unique_id = uuid();
       let id = unique_id.slice(0,8);
       let todo ={
        id:id,
        text:text,
        completed:false
       }
       setToDos([...toDos,todo]); 
    }

 const deleteToDo= (id)=>{
       const removeElement=toDos.filter(ele=>ele.id !== id);
       setToDos(removeElement)
       
       
    }

const updateToDo=(id)=>{
const updateToDo =toDos.map(ele=>{
    if(ele.id === id)
    ele.completed =!ele.completed
    return ele;
})
setToDos(updateToDo);
    }

const displayToDoes=()=>{
        console.log("hello");
        return toDos.map(ele=> {
         const {id,text,completed} = ele;
            return <ToDo  key={id} text={text} deleteToDo={deleteToDo} id={id} updateToDo={updateToDo} completed={completed}/>})
    }

  return (
    <div className="toDolist">
        <h1>To Do List </h1>
        <FormToDo   addToDo={addToDo}/>
        {toDos?.length > 0 ? displayToDoes():<div>no to do </div>}
        
        
    </div>
  )
}

export default ToDoList