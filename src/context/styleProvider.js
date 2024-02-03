import React,{useState} from "react";

import styleContext from "./styleContext";


const StyleProvider=(props)=>{
    const[theme, setTheme] =useState({
        backgroundColor: "red",
        color: "white",
        border: "10px solid black"
    })
    return(
           <styleContext.Provider value={{
            theme,
            darkMode: () =>setTheme({backgroundColor: "white",
            color: "red",
            border: "10px solid green"}),
            lightMode: ()=>setTheme({backgroundColor: "red",
            color: "white",
            border: "10px solid black"})
           }}>
              {props.children}
           </styleContext.Provider>
    )
}
export default StyleProvider;