import React, { useEffect, useLayoutEffect } from 'react'
import { Suspense } from 'react'
import { Canvas} from "@react-three/fiber"
import { useBox } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three';
import {  PerspectiveCamera, OrbitControls, Text} from "@react-three/drei";
import { useRef,useState } from 'react';
import { Physics } from '@react-three/cannon';

export default function Scene() {
  function Box(props) {
    const meMap=useLoader(TextureLoader,'Me_graySuit.jpeg');
    const [ref,api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
    const [hovered, setHover] = useState(false);
    const [clicked, click] = useState(false);
    const mesh = useRef();
    // window.addEventListener('mousemove',setHover(true));
    // useFrame((state, delta) => ((mesh.current.rotation.y += 0.01)))
    return (
      <mesh onClick={() => {
        api.velocity.set(0, 2, 0);
        click(!clicked);
      }}
     
      ref = { mesh} position = {[0, 0, 0]} >
      <boxBufferGeometry attach='geometry' args={clicked? [40,40,40]:[20,20,20]}/>
      <meshStandardMaterial map={meMap} attach='material' color={hovered? "orange":"white"} />
    </mesh>)
  }
  function Scenery(props) {
    const [clicked, click] = useState(false);
    const [zPosition, setZPosition] = useState(-90);
    useEffect(() => {
    // if (hover) {
      // console.log(props.hover)
        console.log(zPosition)
        if (zPosition > -500) {
          setTimeout(() => {
            setZPosition((prev) => prev - 20);
            console.log(zPosition);
          }, [1000])
        } else {
          setZPosition(-50);
        }
      // }
      }, [zPosition])
    return (
      <>
        <PerspectiveCamera
          aspect={window.innerHeight / window.innerWidth}
          radius={(window.innerHeight + window.innerWidth) / 4}
          fov={10}
          position={[-8, 0, zPosition]}
          onUpdate={self => self.updateProjectionMatrix()}
        >
         
          <OrbitControls>
            {/* camera={[-2,-10,-40]} */}
          </OrbitControls>
          <ambientLight
            intensity={0.5} />
          <spotLight
            position={[10, 15, zPosition]} angle={10}
          />
          <Physics >
            <Box></Box>
          </Physics>
          {/* <mesh position={[0, -20, -20]} args={clicked? [100,100,100]:[20,20,20]}
          onClick={() => {
            click(!clicked);
          }}> */}
          <Text color="white" fontSize={20} position={[0, -25, 10]} rotation={[-Math.PI / 3, 0, 0]}>
            Hello Future Employer (please scroll)
          </Text>
          <Text color="white" fontSize={40} position={[0, -60, 30]} rotation={[
            -Math.PI/3, 0, 0]}>Technologies</Text>
          <Text color="white" fontSize={40} position={[0, -90, 70]} rotation={[
            -Math.PI / 3, 0, 0]}>Front-End: HTML,CSS,JS,React</Text>
            <Text color="white" fontSize={40} position={[0, -110, 120]} rotation={[
            -Math.PI / 3, 0, 0]}>Back-End: Ruby on Rails, Python, NodeJS, Express</Text>
            <Text color="white" fontSize={40} position={[0, -140, 170]} rotation={[
            -Math.PI / 3, 0, 0]}>Database: MongoDb, PostGreSQL</Text>
            <Text color="white" fontSize={40} position={[0, -190, 200]} rotation={[
            -Math.PI / 3, 0, 0]}>Fin</Text>
          {/* </mesh> */}
        </PerspectiveCamera>
      </>
    )
  }
  return (
    <section id="Resume" style={{height:"100vh",backgroundImage: "url(pexels-space.jpeg)",position:"relative",top:"-5vh"}}>
          <h1>Three-dimensional playground/ Star Wars Style Resume (scroll on my face)</h1>
        <Suspense fallback={<div>...Loading</div>}>
          {/* <div style={{ display: "flex", flexWrap: "wrap",flexDirection:"column" }}> */}
          <div style={{ height: "70vh", width: "90vw",backgroundColor:"black", margin:"0 auto"}}>
          <Canvas style={{ backgroundImage: "url(pexels-space.jpeg)" }} >
                <Scenery >
                </Scenery>
                </Canvas>
          </div>
          {/* </div> */}
          </Suspense>
        </section>
  )
}
