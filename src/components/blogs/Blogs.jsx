import React, { useEffect, useRef, useState } from 'react'
import "./blogs.scss";
import { AnimatePresence, animate, motion, useAnimate, useAnimation, useInView, usePresence, useScroll, useSpring } from "framer-motion";

const variants = {
    initial: { opacity: 0,x:-100 },
    animate: {
        opacity: 100,
        x:0,
        transition: {
            duration: 0.8
        }
    }
}
const blogData = [
    {
        id: 1,
        type: "Technical Blog",
        img: "https://miro.medium.com/v2/resize:fit:721/1*zxx4iQAG4HilOIQqDKpxJw.jpeg",
        title: "The Dark Side of Callbacks in JavaScript",
        desc: "A callback is a piece of code that will be called back for execution by the javaScript sometimes later...",
        link: "https://abdulkadir18apr.hashnode.dev/the-dark-side-of-callbacks-in-javascript"
    },
    {
        id: 2,
        type: "Technical Blog",
        img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1679466084208/ef932582-83cd-44ac-a621-37b893c10031.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        title: "Deep Dive into Promises",
        desc: "A promise is an object which is filled with data on the completion of some Async operation in JavaScript, Let's try to look at an example of fetching GitHub API which will return us a promise and see what a promise looks like...",
        link: "https://abdulkadir18apr.hashnode.dev/deep-dive-into-promises"
    },
    {
        id: 3,
        type: "API Documentation",
        img: "/api.png",
        title: "Restaurant API Documentation",
        desc: "The Restaurant Discovery API offers a comprehensive backend solution, empowering developers to seamlessly manage restaurant-related data. Through a RESTful design, it provides endpoints for creating, retrieving, updating, and deleting restaurants, managing menus, and incorporating user reviews...",
        link: "https://documenter.getpostman.com/view/23097291/2s9YXk4h5A"
    },

]

export default function Blogs() {



    const [currentIndex, setCurrentIndex] = useState(0);

    

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % blogData.length);
        
    }
    const prev = () =>{ 
        setCurrentIndex((prev) => (prev - 1 + blogData.length) % blogData.length)
    };

    
    
    
    return (
        <motion.div className="blogs" initial="initial" animate="animate" >
            <h1 className='heading'>InsightFul Reads</h1>
            <div className="wrapper">
                
                    <motion.div className="blogContainer"   >
                        
                        <motion.div className="imageContainer"  >
                            <motion.img src={blogData[currentIndex].img} alt="blogImg" />
                        </motion.div>
                        <motion.div className="content">
                            <h4>{blogData[currentIndex].type}</h4>
                            <h1>{blogData[currentIndex].title}</h1>
                            <p>{blogData[currentIndex].desc}</p>
                            <a href="#">ReadMore</a>
                        </motion.div>
                        <motion.div className="pagination">
                            <button className="up">
                                <img src="/up.svg" alt="" onClick={prev} />
                            </button>
                            <div className="sliders">
                                {
                                    blogData.map((blog, index) => (
                                        <div className={`slider ${currentIndex === index ? "active" : ""}`} key={index}></div>
                                    ))
                                }

                            </div>

                            <button className="down" onClick={next}>
                                <img src="/up.svg" alt="" />
                            </button>
                        </motion.div>

                    </motion.div>
            

            </div>
        </motion.div>
    )

}
