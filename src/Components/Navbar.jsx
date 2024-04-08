import React from 'react'
// --> React funtion based component (Shortform:"rfc")
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary-${props.mode} bg-${props.mode} navbar-${props.mode} `}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              {props.homeText}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.aboutUsText}
            </Link>
          </li>
        </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
         <input
          className="form-check-input"
          type="checkbox"
          role="switch"
         id="flexSwitchCheckDefault"
         onClick={props.toggleMode}
         />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
         Enable Dark Mode
       </label>
  </div>

      </div>
    </div>
  </nav>
  )
}

//Adding the types to the respective Props to make the things clear.
Navbar.propTypes={
    title: PropTypes.string.isRequired, //Added isRequired to it. This means that this property must be provided when using
    homeText: PropTypes.string,
    aboutUsText: PropTypes.string,
    contactUsText: PropTypes.string,
    searchButtonText: PropTypes.string
}

//Adding default prop values to the given props when not defined in App.js file.
Navbar.defaultProps={
    title:"Set title here",
    aboutUsText:"About"
}
