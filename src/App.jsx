import Heading from "./components/Heading"
import { Outlet } from "react-router-dom"
function App() {

  return (
    <>
      <Heading/>
      <Outlet/>
    </>
  )
}

export default App
