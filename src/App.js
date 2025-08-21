//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//import About from './Components/About';
import React, {  useState} from "react";
import Alert from './Components/Alert';
//import Theme from './Components/Theme';
//import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  let [mode, setMode]= useState('dark');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
setAlert({
  msg: message, 
  type: type
})
setTimeout(() => {
  setAlert(null)
}, 3000);

  }
  let toggleMode= ()=>{
    if(mode==="light"){
      setMode("dark")
    document.body.style.background="#152238";
    showAlert("Dark mode enabled, success");
    }
      else{
        setMode("light")
        document.body.style.background="white";
         showAlert("light mode enabled, success");
      }
  }
  return (
    <>
     {/*<BrowserRouter>*/}
     <Navbar title="textify" mode={mode} toggleMode={toggleMode}/>
     {/*<Theme/>*/}
     <Alert alert={alert}/>
     <div className="container my-3">
       {/*<Routes>*/}
            {/*<Route exact path="/About" element={<About/>} />*/}
          {/*</Routes>
          <Routes>
            <Route
             exact path="/"
              element={*/}
                <TextForm showAlert={showAlert}heading="Try Textify- Word Counter, Character Counter, Remove Extra Spaces"mode={mode} />   
          {/*</Routes>*/}
    {/*<About/>*/}
     </div>
       {/*</BrowserRouter>*/}
    </>
  );
}

export default App;
