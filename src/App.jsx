import { useState } from 'react'
import './App.css'
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Feedbacks from "./Components/Feedbacks";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";


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
