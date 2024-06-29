import React, { useState } from 'react';

export default function About() {
    // State Hook for Mode:
    const [myMode, setMyMode] = useState({
        color: 'black',
        backgroundColor: 'white',
        
    });

    // State Hook for button text:
    const [btntext, setBtntext] = useState("Enable Dark Mode");

    // Dark Mode method:
    const darkMode = () => {
        if (myMode.color === 'black') {
            setMyMode({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            });
            setBtntext("Enable Light Mode");
        } else {
            setMyMode({
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid black'
            });
            setBtntext("Enable Dark Mode");
        }
    }

    return (
        <>
            <div className="container my-5" style={myMode}>
                <h3 className='my-3 ml-5'>About</h3>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                                style={myMode}
                            >
                                 What is TextUtils?
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                            style={myMode}
                        >
                            <div className="accordion-body">
                                <strong>Welcome to TextUtils!</strong> A user-friendly web application built using React and React Router DOM. This intuitive platform allows you to manipulate text effortlessly, providing options to capitalize or decapitalize text, adjust the number of blank spaces, and easily copy the formatted text to your clipboard.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                                style={myMode}
                            >
                                Why Choose TextUtils?
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                            style={myMode}
                            
                        >
                            <div className="accordion-body">
                                <strong>TextUtils</strong> is designed to make text formatting easier than ever. Whether you're editing paragraphs or snippets, our tools are here to help you craft text exactly as you need it.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                                style={myMode}
                            >
                                How Can TextUtils Help You?
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                            style={myMode}
                        >
                            <div className="accordion-body">
                                Discover the power of TextUtils to streamline your text editing tasks. From formatting to copy-ready text, TextUtils empowers you to enhance your content effortlessly.
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-outline-primary my-3" onClick={darkMode}>{btntext}</button>
            </div>
        </>
    );
}
