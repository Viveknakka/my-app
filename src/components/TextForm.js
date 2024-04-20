import React, { useState } from "react";

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
    <div>
      <h1>{props.heading}</h1>
      <textarea
        name=""
        id=""
        cols="150"
        rows="10"
        value={text}
        onChange={handleOnChange}
      ></textarea>
      <br />
      <button className="btn btn-primary m-2" onClick={toupCase}>
        Uppercase
      </button>
      <button className="btn btn-primary m-2" onClick={tolowCase}>
        LowerCase
      </button>
    </div>
    <div className="container">
      <h1>summary</h1>
      <p>NO.of char:{text.length}</p>
      <p>NO.of words:{text.split(" ").length}</p> 
      
    </div>
    </>
  );
}
