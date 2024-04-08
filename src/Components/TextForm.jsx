import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState("");
    
    //UpperCase Method onClick:
    const UpperCase=()=>{
      //For confirmation that the button is clicked:
      console.log("UpperCase button clicked.")
      let UText= text.toUpperCase();
      setText(UText);//Method to update the setText method. ***Important***  
    }

    //LowerCase Method:
    const LowerCase=()=>{
      //For confirmation of the button click.
      console.log("LowerCase Button Clicked.");
      let Ltext=text.toLowerCase();
      setText(Ltext);
    }

    //OnChange method to text area:
    const handleOnchange=(event)=>{
      //For confirmation that the button is clicked:
      console.log("Onchange method is initiaited.");
      setText(event.target.value);
    }

    //FUnction to CLear all the written text:
    const Clear=()=>{
     let clearText="";
     setText(clearText);
    }

   //Copy Text:
   const Copy=()=>{
    var text= document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
   }

   //Remove Extra Spaces:
   const removeSpaces=()=>{
    let newtext=text.split(/[ ]+/);//This function uses RegExp to split the string into an array, where each element represents a word or extra space.
    setText(newtext.join(" "));
   }

  return (
    <>
    <div style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={12}
      value={text}
      onChange={handleOnchange}
      style={{backgroundColor: props.mode==='dark'?'#3e4444':'white', color: props.mode==='dark'?'white':'black'}}
    />
  </div>
  <button type="button" className="btn btn-outline-primary mx-2 " onClick={UpperCase}>Convert to UpperCase</button>
  <button type="button" className="btn btn-outline-primary mx-2" onClick={LowerCase}>Convert to LoweCase</button>
  <button type="button" className="btn btn-outline-primary mx-2" onClick={Clear}>Clear</button>
  <button type="button" className="btn btn-outline-primary mx-2" onClick={Copy} >Copy Text</button>
  <button type="button" className="btn btn-outline-primary mx-2" onClick={removeSpaces} >Format Spaces</button>
  <div className="container2 my-4" style={{color: props.mode==='dark'?'white':'black'}}>
    {/* Note: my-3 give top margin to the container and its class of bootstrap. */}
    <h3>Summary of Your Passage:</h3>
  </div >
  <p>Your text contains {text.length} letters and {text.split(' ').length} words.</p>
  <p>{text.length/200} Minutes to be read.</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"Enter the text in above text box to preview it."}</p>
    </div>
</>
  )
}
//Adding the types to the respective Props to make the things clear.
TextForm.propTypes={
    placeHolder: PropTypes.string.isRequired //Added isRequired to it. This means that this property must be provided when using
}

//Adding default prop values to the given props when not defined in App.js file.
TextForm.defaultProps={
    placeHolder:"Enter text here :"
}

