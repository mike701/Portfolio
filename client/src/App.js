import './App.css';
import DeveloperAtWork from './SVG/developerAtWork';
import Layout from './Layout/Layout';
import LandingPage from "./AboutMe/LandingPage"
import Scene from './Three/Scene';
import { Routes,Route } from 'react-router';
import Icons from './Icons/Icons';
function App() {

  
  return (
    
    <div className="App">
      <Layout className='threeJS'>
        <Routes>
          <Route path="/" element={<>
            <div id="landing" >
              <div id='About' >
                <section>
                  <h1>
                    Hello World!
                    </h1>
                  <h1>
                    Software Developer=&#123; 
                    <br/>&nbsp;name: "Michael Abebe"
                    <br />&nbsp;Technologies:[<br/>[HTML,CSS,JS],<br />
                    &nbsp;&nbsp;[MongoDB,Express,React,NodeJS],<br />
                    &nbsp;&nbsp;[Ruby on Rails,PostgreSQL]<br/>]
                    &nbsp; Current Location:"Maryland"
                    &#125;
                  </h1>
                </section>
                <section>
                  <h1>Ways to conect with me:</h1>
                  <p>Email:michaelnabebe@gmail.com</p>
                  <a href='https://www.linkedin.com/in/michaelabebe5/' target={'_blank'} rel="noreferrer"> LinkedIn</a>
                </section>
              </div>
              <img src='Me_graySuit.jpeg' alt='Michael Abebe in a gray Suit'></img>
            </div>
        <DeveloperAtWork />
        <LandingPage style={{position:"relative",top:"0vh"}}></LandingPage>
        <Icons/>
        <Scene></Scene>
        </>} />
        </Routes>
      
      </Layout>
      
    </div>
  );
}

export default App;
