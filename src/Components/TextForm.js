import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase, success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase, success");
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("Cleared text, success");
  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
    props.showAlert("Converted to Bold, success");
  };

  const handleCopyClick = () => {
    const textArea = document.getElementById('myBox');
    textArea.select();
    textArea.setSelectionRange(0, 9999); // for mobile support
    navigator.clipboard.writeText(textArea.value);
     props.showAlert("Copied to clipboard, success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/).filter(Boolean).join(' ');
    setText(newText);
    props.showAlert("Extra spaces removed, success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);

  // Word and character count logic
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
              fontWeight: isBold ? 'bold' : 'normal',
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleBoldClick}>
          Bold Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>{wordCount} words and {charCount} characters</p>
        <p>{(0.008 * wordCount).toFixed(2)} Minutes read</p>
        <h2>Preview</h2>
        <p style={{ fontWeight: isBold ? 'bold' : 'normal' }}>{text.length > 0 ? text : 'Nothing to preview'}</p>
      </div>
    </>
  );
}
