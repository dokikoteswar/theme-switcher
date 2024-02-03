import React,{useContext, useState, useEffect} from "react";
import styleContext from "../context/styleContext";

const Hello = () => {
    const[mode, setMode] =useState(false)
    const{theme, darkMode, lightMode} = useContext(styleContext)
    useEffect(()=>{
        let current= localStorage.getItem("isDark");
        if(current=="false"){
            lightMode();
            setMode(false);
           
        }else{
            darkMode();
           setMode(true);
        }

    },[])
  
    function handelMode(){
        if(!mode){
            darkMode();
            setMode(true)
        }else{
            lightMode();
            setMode(false);
        }
        localStorage.setItem("isDark", !mode);
    }


  return(
    <div>
    <div style={
    {color: theme.color,
    backgroundColor: theme.backgroundColor,
     border: theme.border}
    }>
    <h1>Hello   </h1>
    <p>
      Lorem34 What is the difference between preventDefault and prevent
      propagation? preventDefault() prevents the default browser behavior for a
      given element. stopPropagation() stops an event from bubbling or
      propagating up the DOM tree. Whereas, return false is a combination of
      both preventDefault() and stopPropagation()
      <ul>
        <li>Help</li>
        <li>About</li>
        <li>About</li>
      </ul>
    </p>
    <button  onClick={handelMode} >Mode</button>
  </div>
 

  {/* <button  onClick={darkMode} >dark </button>
  <button  onClick={lightMode} >Light mode</button> */}
  </div>
  )
};


export default Hello;