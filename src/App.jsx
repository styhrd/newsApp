import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Latest from "./pages/Latest"
import Sources from "./pages/Sources"
import TopHead from "./pages/TopHead"
import Navbar from "./components/Navbar"
import Source from "./pages/Source"

function App() {


  return (
    <>

      <div className="flex  justify-center w-full h-[100vh]">

        <div className=" fixed top-0 left-0 lg:left-auto" >
          <Navbar />
        </div>

        <div className="w-full px-4 py-[80px]">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/latest" element={<Latest />}></Route>
            <Route path="/sources" element={<Sources />}></Route>
            <Route path="/headlines" element={<TopHead />}></Route>
            <Route path="/sources/:id" element={<Source />}></Route>
          </Routes>
        </div>







      </div>
    </>
  )
}

export default App
