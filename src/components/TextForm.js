import React, { useState } from "react";
//import Alert from "./Alert";

export default function TextForm(props) {
  const toupCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const tolowCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
 
  return (
    <>
    
    <div 
    style = 
    {
        {
           backgrounColor:(props.mode === "light")?"white":"black",
           color:(props.mode === "light")?"black":"white"
        }
     }className="container">
      <h1>{props.heading}</h1>
      <textarea
        name=""
        id=""
        cols="150"
        rows="10"
        value={text}
        onChange={handleOnChange}
        style={
          {
            backgroundColor:(props.mode === "light")?"white":"grey"
            ,color:(props.mode === "light")?"black":"white"
          }
       }
      ></textarea>
      <br />
      <button className="btn btn-primary my-2" onClick={()=>{toupCase();props.showAlert('converted to uppercase','danger');}}>
        Uppercase
      </button>
      <button className="btn btn-primary my-2" onClick={()=>{toupCase();props.showAlert('converted to lowercase','warning');}}>
        LowerCase
      </button>
       </div>
    <div className="container">
      <h1>summary</h1>
      <p>NO.of char:{text.length}</p>
      <p>NO.of words:{text.split(" ").length}</p> 
      
    </div>
    <div className="container">
      <h1>Preview</h1>
       <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  );
}
