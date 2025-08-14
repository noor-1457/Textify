import React, { useState } from "react";

export default function TextForm(props) {
  let mystyle = {
    color: props.mode === "dark" ? "white" : "#304a76",
    backgroundColor: props.mode === "dark" ? "#304a76" : "white",
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase, success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase, success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared text, success");
  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
    props.showAlert("Converted to Bold, success");
  };

  const handleCopyClick = () => {
    console.log("i am copy");
    const textArea = document.getElementById("myBox");
    textArea.select();
    textArea.setSelectionRange(0, 9999); // for mobile support
    navigator.clipboard.writeText(textArea.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard, success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/).filter(Boolean).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed, success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);

  // Word and character count logic
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="mb-4">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#304a76" : "white",
              color: props.mode === "dark" ? "white" : "black",
              fontWeight: isBold ? "bold" : "normal",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleBoldClick}>
          Bold Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {wordCount} words and {charCount} characters
        </p>
        <p>{(0.008 * wordCount).toFixed(2)} Minutes read</p>
        <h2>Preview</h2>
        <p style={{ fontWeight: isBold ? "bold" : "normal" }}>
          {text.length > 0 ? text : "Nothing to preview"}
        </p>
      </div>

      <hr />
      <hr />

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
        id="about"
      >
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={mystyle}
              >
                <strong>Analyze your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                Textify give you a way to analye your text efficiently and
                quickly.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={mystyle}
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                Textify is a free character counter tool that provides instant
                character count, word count, case change and much more.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={mystyle}
              >
                <strong>Browser compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                this worrd counter works on any browser such as chrome, opera,
                firefox, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
