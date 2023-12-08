import React, { useRef } from 'react';
import "./parallex.scss"
import {motion,useScroll,useTransform} from "framer-motion";



export default function Parallex({type}) {
  const ref=useRef();

  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start start","end start"]
  });
  const yText=useTransform(scrollYProgress,[0,1],["0%","500%"]);
  const yBg=useTransform(scrollYProgress,[0,1],["0%","100%"]);

  return (
    <div  ref={ref} className='parallex' style={{background:type==="Blogs"?"linear-gradient(180deg,#111132,#0c0c1d)":"linear-gradient(180deg,#111132,#505064)"}}>
        
        <motion.div style={{y:yBg}} className='textContainer'>
        <motion.h1 style={{y:yText}}>{type==="Blogs"?"My Tech Chronicles":`My Coding Adventures`}</motion.h1>
        <motion.p style={{y:yText}}>{type==="Blogs"?"Technical blogs and Documnentations":`Embark on a journey through my coding adventures.`}</motion.p>
        </motion.div>
        <motion.div  className="mountains"></motion.div>
       
        <motion.div style={{x:yBg}} className="stars"></motion.div>
    </div>
  )
}
