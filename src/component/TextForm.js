import React, {useState} from 'react'

export default function TextForm(props) {
    
    var addTextIntoBox = (event)=>{
      //console.log('clicked');
      setText(event.target.value);
    }

    var chageToUpperCase = ()=>{
      let newText = text.toUpperCase();
      setText(newText);
    }

    var chageToLowerCase = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
    }

    var clearText = ()=>{
      setText('');
    }
    var copyText = ()=>{
      var textEle = document.getElementById('formBox');
      textEle.select();
      navigator.clipboard.writeText(textEle.value);

    }

    var removeExtraSpace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    const [text,setText] = useState('');
  return (
    
    <div className='container'>
      <h2>{props.heading}</h2>
    <div className="mb-3">
    <label htmlFor="formBox" class="form-label">Please Enter your Message Here...</label>
    <textarea className="form-control" id="formBox" rows="8" value={text} onChange={addTextIntoBox}></textarea>
    <button className='btn btn-primary mt-2' onClick={chageToUpperCase}>UpperCase</button>
    <button className='btn btn-primary mt-2 mx-2' onClick={chageToLowerCase}>LowerCase</button>
    <button className='btn btn-primary mt-2 ' onClick={clearText}>Clear</button>
    <button className='btn btn-primary mt-2 mx-2' onClick={copyText}>Copy Text</button>
    <button className='btn btn-primary mt-2 mx-2' onClick={removeExtraSpace}>Remove Space</button>
    </div>
    <div className='container'>
      <h2>Entered Message Details</h2>
      <p>your entered messages is : {text}</p>
      <p>you have entered {text.split(' ').length-1} words and {text.length} charactes</p>
    </div>
    </div>
  )
}
