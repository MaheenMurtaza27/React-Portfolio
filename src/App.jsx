import { useState } from 'react'
import './App.css'



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