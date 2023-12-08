import "./hero.scss"
import {motion} from "framer-motion";
const textVariants={
    initial:{
        x:-500,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}
const sliderVariants={
    initial:{
        x:0,
        
    },
    animate:{
        x:-250,
        transition:{
            repeat:Infinity,
            duration:20
        }
    },
   
}
export  function Hero() {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
       
            <motion.p variants={textVariants}>Hi, my name is</motion.p>
            <motion.h2 variants={textVariants}>Abdul Kadir</motion.h2>
            <motion.h1 variants={textVariants}>I build things for a web</motion.h1>
            <motion.p variants={textVariants} className="introduction" >
            Full Stack Developer skilled in the MERN stack, dedicated to creating seamless and innovative web applications for optimal user experiences.
            </motion.p>
            <motion.div variants={textVariants} className="buttons">
                <motion.a href="#Portfolio" variants={textVariants}  >See The Latest Works</motion.a>
                <motion.a href="#Contact" variants={textVariants} className="secondary">Get In Touch</motion.a>
            </motion.div>
            <motion.img  variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll" />
           
        </motion.div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Developer
            </motion.div>
        </div>
      <div className="imageContainer">
        <img src="/myself.gif" alt="hero" />
      </div>
    </div>
  )
}
