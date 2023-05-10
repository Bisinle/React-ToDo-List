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
//we might not really need to do all of this mutliple components
  function App() {

    const [list, setList] = useState (dummyLIST);
     
    const FormUPDATER = (UPDATEDlist) => {
      setList(() => {
        return [...list, UPDATEDlist];
      })
    }
    // console.log(list);
  
    
  return (
  
    <div className="App">
      <h1 className='header'>React To Do List App</h1>
    
      <TOdoFORM Updater={FormUPDATER}/>
      <TOdoLIST dummyDATA={list}/>
      
      
    </div>


  );
}

export default App;
