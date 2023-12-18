import React from "react";
import  ReactDOM  from "react-dom/client";
    
//     const parrent = React.createElement(
//     "div",
//     {id: "parrent"},
//     React.createElement("div",{id:"child"},
//    [React.createElement("h1",{},"Im div not A tag"),React.createElement("h1",{},"Im a h2 tag")]
//     ));


const Conatainer = () => {
   return (
    <div>
        <h2>im form  Container</h2>
    </div>
   )
}

// functional components

const HeadingComp = () =>  {
    return (<div>
        hello world!!
        {Conatainer()}
        <Conatainer/>
    </div>)
}

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<HeadingComp/>);
