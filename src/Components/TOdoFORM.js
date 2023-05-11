import React from 'react'
import {useState} from 'react'
import TOdoLIST from './TOdoLIST'



export default function TOdoFORM({Updater}) {
  
 

  const [enteredTask,setEnteredTask] = useState('');

  //function to update the task entered
  function captureENTEREDvalue(event){
    setEnteredTask(event.target.value)
  }

 

  function listADD(event){
    event.preventDefault();
     //randomly generating an ID for the ID section
  let generatedID = Math.floor(Math.random()*1000)  
    const capturedValues = {
      id:generatedID,
      content: enteredTask
    }
    if( enteredTask ==='' ){
      alert("Invalid input!!!")
    }
    else{
      Updater(capturedValues);
    } 
    setEnteredTask('') 
  }




  return (
    <>
    <form onSubmit={listADD} className='form'>
    <input 
    type="text" 
    className="input" 
    placeholder="TO DO TASKS"
    onChange={captureENTEREDvalue}
    value={enteredTask}/>

    <button type='submit' className='btn' >Add</button>
    </form>
    
    
    </>
  )
}
