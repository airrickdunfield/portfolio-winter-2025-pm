import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {

  // Logic

  // HTML
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )

}

export default App
