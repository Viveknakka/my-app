import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';

export default function Navbar(props) {
  
  return (
    <div >
     <nav className={` navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid" >
    {/*<Link className="navbar-brand" to="/home">{props.title}</Link>
    */}
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
         {/* <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
       */}<a className="nav-link active" aria-current="page" href="/">Home</a>
       
        </li>
        <li className="nav-item">
         {/* <Link className="nav-link" to="/about">About</Link>
        */}<a className="nav-link" href="/">About</a>
        
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              {/*<Link className="dropdown-item" to="/home">Home</Link></li>
               */}<a className="dropdown-item" href="/">Home</a></li>
           <li>
            {/*<Link className="dropdown-item" to="/app1">App1</Link></li>
            */}<a className="dropdown-item" href="/app1">App1</a></li>
            
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" href="/">Disabled</a>
        </li>
      </ul>
      <div className="form-check form-switch">
      <input type="color" id='color' style={{borderRadius:50}}/>
  <input className="form-check-input" type="checkbox" onChange = {props.toggle} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
</div>
    </div>
  </div>
</nav>

    </div>
  );

}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    title: "set title here"
}
