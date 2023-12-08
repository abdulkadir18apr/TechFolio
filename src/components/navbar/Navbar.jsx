import { Sidebar } from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";
export const Navbar=()=>{
    return(
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>Abdul Kadir</motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/abdul-kadir-540a71123/"  target="_blank" rel="noreferrer"><img src="/linkedIn.svg" alt="Linkedin" /></a>
                    <a href="https://github.com/abdulkadir18apr" target="_blank" rel="noreferrer"><img src="/github.svg" alt="github" /></a>
                    <a href="https://twitter.com/abdulq314" target="_blank" rel="noreferrer"><img src="/twitter.svg" alt="twitter" /></a>
                    <a href="https://www.instagram.com/abdulq314/" target="_blank" rel="noreferrer"><img src="/instagram.svg" alt="Instagram" /></a>
                </div>
            </div>
        </div>
    )

}