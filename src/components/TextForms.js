import React, {useState} from 'react';

export default function TextForms(props) {

    const handleUpperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleonChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
        <div>
            <h1>{props.heading}</h1>

            <div className="mb-3">
                <textarea className="form-control" value={text} onChange= {handleonChange} id="myBOx" rows="8"></textarea>
            </div>

            <button className='btn btn-primary mx-1' onClick={handleUpperCase}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowerCase}>Convert to LowerCase</button>
        </div>

        <div className='container my-3'>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>

        <h2>Preview</h2>
        <p>{text}</p>
        </>
    );
}
