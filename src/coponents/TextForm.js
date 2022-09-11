import React, { useState } from 'react'

export default function TextForm(props) {

    const newText = (event) =>{
        console.log("clicked");
        setText(event.target.value);
    }

    const click = () =>{

        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase", "success");
    }

    const lclick = () =>{
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase", "success");
    }

    const clear = () =>{
        setText("");
        props.showAlert("Cleared", "success");
    }

    const [text, setText] = useState('');
    

  return (
    <>
    <div className={`container text-${props.mode === "dark"?"light" : "dark"}`}>
        <h2>{props.boxName}</h2>
        <div className="mb-3">
            <textarea style={{backgroundColor: props.mode === "dark" ? "#3c3d6b" : "white", 
                            color: props.mode === "light" ? "grey" : "white"}} className="form-control" id="myBox" value={text} onChange={newText} rows="8"></textarea>
        </div>  
        <button onClick={click} className="btn btn-primary mx-2">
            Convert to upperCase
        </button>

        <button onClick={lclick} className="btn btn-primary my-2 mx-2">
            Convert to lowercase
        </button>

        <button onClick={clear} className="btn btn-primary my-2 mx-2">
            clear text
        </button>

    </div>

    <div className={`container text-${props.mode === "dark" ? "light" : "dark"}`}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} character</p>

        <h3>preview</h3>
        <p>{text.length === 0 ? "Enter text to show" : text}</p>
    </div>
    </>
    
  )
}
