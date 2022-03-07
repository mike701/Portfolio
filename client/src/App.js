import './App.css';
import DeveloperAtWork from './SVG/developerAtWork';
import Layout from './Layout/Layout';
import LandingPage from "./AboutMe/LandingPage"
import Scene from './Three/Scene';
import { Routes,Route } from 'react-router';
function App() {

  
  return (
    
    <div className="App">
      <Layout className='threeJS'>
        <Routes>
          <Route path="/" element={<>
            <div id="landing" >
              <div id='About' >
                <section >
                  <h1>
                    Hello World!
                    <br/>
                    Software Developer=&#123; 
                    <br/>name: "Michael Abebe"
                    <br />Technologies:[<br/>[HTML,CSS,JS],<br />
                    [MongoDB,Express,React,NodeJS],<br />
                    [Ruby on Rails,PostgreSQL]<br/>]
                    <br/> Current Location:"Maryland"
                    &#125;
                  </h1>
                </section>
                <section>
                  <h1>Ways to conect with me:</h1>
                  <p>Email:michaelnabebe@gmail.com</p>
                  <p>Linkedin:</p>
                </section>
              </div>
              <img src='Me_graySuit.jpeg' alt='Michael Abebe in a gray Suit'></img>
            </div>
        <DeveloperAtWork />
        <LandingPage style={{position:"relative",top:"0vh"}}></LandingPage>
        <Scene></Scene>
        </>} />
        </Routes>
      
      </Layout>
      
    </div>
  );
}

export default App;
