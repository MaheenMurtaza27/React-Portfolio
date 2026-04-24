import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Feedbacks from "./components/Feedbacks";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <div style={{ marginTop: "80px" }}>

        <Home />
        <h1></h1>
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
