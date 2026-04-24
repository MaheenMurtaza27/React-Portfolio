import { useState } from 'react'
import './App.css'
 HEAD
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Feedbacks from "./Components/Feedbacks";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";

 8a198fb (fix component casing)

import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Feedbacks from "./components/feedbacks";
import Blogs from "./components/blogs";
import Contact from "./components/contact";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <div style={{ marginTop: "80px" }}>
        <Home />
      </div>

      <About />
      <Projects />
      <Skills />
      <Feedbacks />
      <Blogs />
      <Contact />
    </>
  )
}

export default App