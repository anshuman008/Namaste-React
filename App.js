
    
    
    
    const parrent = React.createElement(
    "div",
    {id: "parrent"},
    React.createElement("div",{id:"child"},
   [React.createElement("h1",{},"Im a h1 tag"),React.createElement("h1",{},"Im a h2 tag")]
    ));



    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parrent);
