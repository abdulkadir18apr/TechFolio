import React, { useRef } from 'react'
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
    {
        id: 1,
        title: "ShoeCraft",
        img: "/shoeCraft.jpg",
        desc:"A sophisticated full-stack e-commerce solution for seamless and secure shoe shopping. Meticulously crafted with the MERN stack, delivering a polished user experience and robust transactional functionality.",
        tech:['ReactJS','NodeJs','Express','MongoDb'],
        links:{github:"https://github.com/abdulkadir18apr/shoecraft-deployement",live:"https://abdul-kadir-shoecraft.netlify.app/"}
    },
    {
        id: 2,
        title: "DevHive",
        img: "/devHive_front.png",
        desc: "A dynamic social media platform tailored for developers, providing a space to share insights, thoughts, and experiences on diverse technologies. Developers can connect, follow each other, and engage in meaningful discussions, fostering a collaborative and knowledge-sharing community.",
        tech:['ReactJS','NodeJs','Express','MongoDb'],
        links:{github:"https://github.com/abdulkadir18apr/devHive",live:"https://dev-hive.netlify.app/"}
    },
    {
        id: 3,
        title: "FinAnalytix",
        img: "/fintrix.png",
        desc: "A comprehensive financial companion, seamlessly managing incomes and expenses while providing insightful analyses of your monthly financial activities. Empower your financial journey with data-driven insights and strategic financial planning through FinAnalytix.",
        tech:['ReactJS',"Redux",'NodeJs','Express','MongoDb'],
        links:{github:"https://codesandbox.io/p/sandbox/financial-management-n4zkcc",live:"https://n4zkcc.csb.app/"}
    },
    {
        id: 4,
        title: "HireHive",
        img: "/hirehive.png",
        desc: "A college placement app streamlining the journey from application to placement. Developed in collaboration with SCSIT, DAVV, it simplifies interactions for students and recruiters, enhancing the campus recruitment experience.",
        tech:['ReactJS','NodeJs','Express','MongoDb'],
        links:{github:"https://github.com/abdulkadir18apr/hireHive",live:"#"}
    }
]

const Single = ({ item,isImageLeft=true }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref ,
        // offset:["start start","end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50])
    return (
        <motion.section>
            <div className="container">
                <div className={`wrapper ${isImageLeft?"imageLeft":""}`} >
                    <motion.div className="imageContainer" ref={ref} whileHover={{zIndex:3}}  >
                        <motion.img src={item.img} alt="projet" whileHover={{scale:1.2,transition:{duration:0.4,}}} />
                    </motion.div>

                    <motion.div className="textContainer" style={{y}}>
                        <h4>Featured Project</h4>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <motion.ul className='techStack'>
                            {
                                item?.tech?.map((technology)=>(
                                    <li key={technology}>{technology}</li>
                                ))
                            }
                        </motion.ul>
                        <motion.div className="CodeButtons">
                            <a href={item.links.github}><img src="/github_white.svg" alt="github" /></a>
                            <a href={item.links.live}><img src="/link.svg" alt="github" /></a>
                        </motion.div>

                    </motion.div>

                </div>

            </div>
        </motion.section>
    )

}

export default function Portfolio() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <motion.div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Projects</h1>
                <motion.div style={{ scaleX }} className="progressBar">
                </motion.div>
            </div>
            
            {
                items.map((item,index) => (
                    <Single key={item.id} item={item} isImageLeft={index%2?false:true} />
                ))
            }
           
        </motion.div>
    )
}
