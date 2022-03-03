import React from 'react';
export default function Layout(props) {
  return <div>
    <nav style={{position:"sticky", top:"0vh",zIndex:"3", textShadow:"2px 2px black"}}>
      <a href='/' style={{marginRight:"20px",textDecoration:"none",fontSize:"40px"}}>Home</a>
      <a href='#svgBack' style={{ marginRight: "20px", textDecoration: "none",fontSize:"40px"}}>Projects</a>
      <a href='#Resume' style={{marginRight:"20px",textDecoration:"none",fontSize:"40px"}}>Resume</a>
    </nav>
    <div style={{backgroungImage:"url(pexels-space.jpeg)"}}>{props.children}</div>
  </div>;
}
