import {useState} from 'react'
import TOdoLIST from "./Components/TOdoLIST";
import TOdoFORM from "./Components/TOdoFORM";
import appStyle from './App.css'



const dummyLIST= [
  {
    id:1,
    content:"code"
  },
  {
    id:2,
    content:"play ball"
  },
  {
    id:3,
    content:"pray"
  },
  {
    id:4,
    content:"Appion"
  }

]

  function App() {

    const [list, setList] = useState (dummyLIST);
     
    const FormUPDATER = (UPDATEDlist) => {
      setList(() => {
        return [UPDATEDlist,...list];
      })
    }
  
  
    const ListUpdater =(newlyReducedList)=>{
      setList(newlyReducedList)
    }
     
  return (
  
    <div className="App">
      <h1 className='header'>React To Do List App</h1>
    
      <TOdoFORM Updater={FormUPDATER}/>
      <TOdoLIST dummyDATA={list} funky ={ListUpdater}/>
      
      
    </div>


  );
}

export default App;
