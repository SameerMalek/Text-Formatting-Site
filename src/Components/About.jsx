import React,{useState} from 'react'

export default function About() {
    //State Hook for Mode:
    const [myMode, setMyMode] = useState({
        color:'black',
        backgroundColor:'white',
        });

        //Sate Hook for button text:
    const [btntext, setBtntext] = useState("Enable Dark Mode");

    //Dark Mode method:
    const darkMode=()=>{
        if(myMode.color==='black'){
            setMyMode({
                color:'white',
        backgroundColor:'black',
        border:'1px solid white'
            })
            setBtntext("Enable Light Mode");
        }else{
            setMyMode({
                color:'black',
        backgroundColor:'white'
            })
            setBtntext("Enable Dark Mode");
        }
    }
  return (
    <>
    <div className="container my-5" style={myMode}>
    <h3>About</h3>
    <div className="accordion" id="accordionExample" style={myMode}>
  <div className="accordion-item" style={myMode} >
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne" style={myMode}
      >
        Accordion Item #1
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample" style={myMode}
    >
      <div className="accordion-body" style={myMode}>
        <strong>This is the first item's accordion body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions. You can modify
        any of this with custom CSS or overriding our default variables. It's
        also worth noting that just about any HTML can go within the{" "}
        <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myMode} >
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo" style={myMode}
      >
        Accordion Item #2
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample" style={myMode}
    >
      <div className="accordion-body" style={myMode}>
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myMode}>
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree" style={myMode}
      >
        Accordion Item #3
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample" style={myMode}
    >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
</div>
<button type="button" className="btn btn-outline-primary my-3" onClick={darkMode}>{btntext}</button>
    </div>
    </>

  )
}
