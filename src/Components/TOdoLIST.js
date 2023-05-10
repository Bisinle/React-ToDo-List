import React from 'react'
import Styles from './TOdoLIST-Styles/Styles.css'
import {useState, useEffect} from 'react'
export default function TOdoLIST({dummyDATA}) {
  const [reducedList, setReducedList] = useState(dummyDATA)
  
  //function to delete any chosen element from the list
  function removeList(id){
  let newlyReducedList = reducedList.filter((l)=>l.id !==id)
 setReducedList(newlyReducedList);   

 }

 console.log(reducedList);
 

 //useEffect to initialise the porps into the useState
  useEffect(()=>{
    setReducedList(dummyDATA) 
  },[dummyDATA])


  let listDisplay = reducedList.map((list) =>{
    return (
        <li className='TOdoLIST-LI' key={list.id}> 
        {list.content} 

          <span className='edit'>
            <i class="ri-pencil-fill"></i>
          </span>

          <span className='delete' 
          onClick={()=>removeList(list.id)}>
            <i class="ri-delete-bin-5-fill"></i>
          </span> 
      </li>
     
    )
  })




  return (
    <div className='TOdoLIST-DIV'>
       {
        listDisplay
       }
    </div>
  )
}



