import React, { useState } from 'react';
import './App.css';//CSS stylesheet imported here.
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// For react we can only return one element with one fucntion. Just like below div element.
// Instead we can use the JSX Fragment: <> </> to wrap multiple elements together.***IMP POINT***
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= 'black' // dark mode color
      document.title="TextUtils-Dark Mode"
    }else{
      setMode('light');
      document.body.style.backgroundColor='white' // light mode color
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} homeText="Home" aboutUsText="About"/><TextForm heading="Enter Your Text to Analyze:" mode={mode} /></>
    },
    {
      path:"/about",
      element:<><Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} homeText="Home" aboutUsText="About"/><About/></>,
    }
  ]);

  return (
    <>
     <RouterProvider router={router} />
    </>
    
  );
}

export default App;
