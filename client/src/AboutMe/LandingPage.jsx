import React from 'react';
import './Landing.css'

export default function LandingPage() {
  return(
  <div id='projects' >
  <div className='details'>
        <div id="Air" onClick={(e) => {
          e.preventDefault();
          window.open("https://mike701.github.io/Weather-Watchers/",'_blank')
        }}>
          <h1>Air Quality by City in the U.S.A.</h1>
          <p>Tech Stacks: HTML,CSS,JS,Airtable
        </p>
        </div>
        <div id="Travel" onClick={(e) => {
          e.preventDefault();
          window.open("https://adoring-torvalds-46fe0b.netlify.app/",'_blank')
        }}>
          <h1 >Travel Bucket list</h1>
          <p>Tech Stacks:React,Styled-Components,Airtable</p>
        </div>
        <div id="Resource" onClick={(e) => {
          e.preventDefault();
          window.open("https://silly-kowalevski-1591fc.netlify.app/",'_blank')
        }}>
        
          <h1 >Life After general Assembly</h1>
          <p>Tech Stacks: M.E.R.N. (MongoDb with mongoose,Express,React,Node.js)
          </p>
        </div>
        <div id="Forum" onClick={(e) => {
          e.preventDefault();
          window.open("https://a-random-quest.netlify.app/",'_blank')
          }}>
            <h1 >A-random-Quest</h1>
            <p>Tech Stacks:React,Styled-Components,Airtable</p>
          </div>
    </div>
</div>);
}
