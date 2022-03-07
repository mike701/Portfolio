import React, { useEffect } from 'react'
import './Scene.css'
import { Suspense } from 'react'
import { Canvas} from "@react-three/fiber"
import { useBox } from "@react-three/cannon";
import {  useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three';
import {  PerspectiveCamera, OrbitControls, Text} from "@react-three/drei";
import { useRef,useState } from 'react';
import { Physics } from '@react-three/cannon';

export default function Scene() {
  const [scroll,setScroll]=useState(false)
  function Box(props) {
    const meMap=useLoader(TextureLoader,'Me_graySuit.jpeg');
    const [api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
    const [clicked, click] = useState(false);
    const mesh = useRef();
    return (
      <mesh onClick={() => {
        api.velocity.set(0, 2, 0);
        click(!clicked);
      }}
     
      ref = { mesh} position = {[0, 0, 0]} >
      <boxBufferGeometry attach='geometry' args={clicked? [40,40,40]:[20,20,20]}/>
      <meshStandardMaterial map={meMap} attach='material'  />
    </mesh>)
  }
  function Scenery(props) {
    const [zPosition, setZPosition] = useState(-90);
    const [planarPosition, setPlanarPosition] = useState([-8, 0]);
    const[rotationInitial,setRotationInitial]=useState([0,0,0])
    const [fontSize, setFontSize] = useState(40);
    useEffect(() => {
        // console.log(zPosition)
      setPlanarPosition([-8, 0]);
      setRotationInitial([0, 0, 0])
      if (zPosition > -500 && !scroll) {
          
          setTimeout(() => {
            setZPosition((prev) => prev - 20);
            // console.log(zPosition);
          }, [1000])
        } else {
          setZPosition(-50);
        }
      console.log(window.innerHeight, window.innerWidth)
      if (window.innerWidth < 800) { setFontSize(20) }
      if (window.innerWidth < 500) {setFontSize(10)}
      console.log(fontSize)
    }, [zPosition,fontSize])
    return (
      <>
        <PerspectiveCamera
          aspect={window.innerHeight / window.innerWidth}
          radius={(window.innerHeight + window.innerWidth) / 4}
          fov={10}
          position={[planarPosition[0], planarPosition[1], zPosition]}
          rotation={rotationInitial}
          onUpdate={self => self.updateProjectionMatrix()}
        >
         
          {scroll && <OrbitControls>
          </OrbitControls>} 
          <ambientLight
            intensity={0.5} />
          <spotLight
            position={[10, 15, zPosition]} angle={10}
          />
          <Physics >
            <Box></Box>
          </Physics>
          <Text color="white" fontSize={fontSize/2} position={[0, -25, 10]} rotation={[-Math.PI / 3, 0, 0]}>
            Hello Future Employer
          </Text>
          <Text color="white" fontSize={fontSize} position={[0, -60, 20]} rotation={[
            -Math.PI/3, 0, 0]}>Technologies</Text>
          <Text color="white" fontSize={fontSize} position={[0, -90, 70]} rotation={[
            -Math.PI / 3, 0, 0]}>Front-End: HTML,CSS,JS,React</Text>
            <Text color="white" fontSize={fontSize} position={[0, -110, 120]} rotation={[
            -Math.PI / 3, 0, 0]}>Back-End: Ruby on Rails, Python, NodeJS, Express</Text>
            <Text color="white" fontSize={fontSize} position={[0, -140, 170]} rotation={[
            -Math.PI / 3, 0, 0]}>Database: MongoDb, PostGreSQL</Text>
            <Text color="white" fontSize={fontSize} position={[0, -190, 200]} rotation={[
            -Math.PI / 3, 0, 0]}>Fin</Text>
        </PerspectiveCamera>
      </>
    )
  }
  return (
    <section id="Resume">
      <nav>
        <a href='https://docs.google.com/document/d/1U_lvO9dACC9xyKm6FSMEVSNi_6oBgWeFR_ut8BGNzpk/edit?usp=sharing' target='_blank' rel="noreferrer">Resume Google Link</a>
        </nav>
      <h1>Star Wars Style Resume</h1>
      <button style={{color:"black"}} onClick={(e) => { e.preventDefault(); setScroll((prev) => !prev); console.log(scroll)}}>Toggle animation vs scroll</button>
        <Suspense fallback={<div>...Loading</div>}>
          <div style={{ height: "70vh", width: "90vw",backgroundColor:"black", margin:"0 auto"}}>
          <Canvas style={{ backgroundImage: "url(pexels-space.jpeg)" }} >
                <Scenery >
                </Scenery>
                </Canvas>
          </div>
          </Suspense>
        </section>
  )
}
