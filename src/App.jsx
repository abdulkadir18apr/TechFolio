import "./app.scss";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import Parallex from "./components/parallex/Parallex";
import Portfolio from "./components/portfolio/Portfolio";

import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
const App = () => {
  return(
    <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Portfolio"><Parallex type="portfolio"/></section>
    <Portfolio/>
    <section id="Blogs" >
      <Parallex type="Blogs"  />
      </section>
      <section><Blogs/></section>
      <section id="Contact">
        <Contact/>
      </section>
    </div>
  )
};

export default App;
