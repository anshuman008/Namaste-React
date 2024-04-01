import React from "react";
import  ReactDOM  from "react-dom/client";
import HeaderComp from "./components/Header";
import BodyComp from "./components/Body";
   // first highLevel Component

   const AppLayOut = () =>{
    return  (
        <div style={{background:"black"}}>
         <HeaderComp/>
         <BodyComp/>
        </div>
    )
   }

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<AppLayOut/>);
