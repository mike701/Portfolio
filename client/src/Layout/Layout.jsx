import React from 'react';
export default function Layout(props) {
  return <div>
    <nav>
      <a href='/' style={{marginRight:"20px",textDecoration:"none"}}>Home</a>
      <a href='#svgBack' style={{ marginRight: "20px", textDecoration: "none"}}>Projects</a>
      <a href='#Resume' style={{marginRight:"20px",textDecoration:"none"}}>Resume</a>
    </nav>
    <div style={{backgroungImage:"url(pexels-space.jpeg)"}}>{props.children}</div>
  </div>;
}
