import { Outlet } from "react-router-dom"
import Navbar from "../Day2/components/Navbar"
const Day2Layouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Day2Layouts