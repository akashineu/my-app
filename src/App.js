
import { useState, useTransition } from 'react';
import './Appa.css';
import Alert from './coponents/Alert';
import Navbar from './coponents/Navbar';
import TextForm from './coponents/TextForm';



function App() {

  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      message : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggle = ()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "#3c3d6b";
      showAlert("Dark Mode enabled", "success");
      document.title = 'TextUtils-darkMode';
       
    }else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode enabled", "success");
      document.title = 'TextUtils-lightMode';

    }
  }

  return (
   <>
   
    <Navbar title="TextUtils" about="About us" mode={mode} toggle={toggle}/>

    <Alert alert={alert}/>

    <div className="container">
        

        

          <TextForm showAlert={showAlert} boxName="Enter your text" mode={mode}/>
        
    </div>
    
            
   </>
        

        
        
    
        
            
          
            


    
   
  );
}

export default App;
