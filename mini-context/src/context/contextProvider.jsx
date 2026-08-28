import React from "react";
import Usercontext from "./context";

const contextProvider= ({children})=>{
    const[num,setNum]=React.useState(null);
    <Usercontext.Provider value={num,setNum}>
        {children}
        </Usercontext.Provider>
   
}

export default contextProvider;
