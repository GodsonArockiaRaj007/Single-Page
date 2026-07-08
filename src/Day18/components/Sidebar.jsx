import { useContext } from "react"
import Day18Context from "../../contexts/Day18Context"


const Sidebar = () => {
      const {theme,dark,light}=useContext(Day18Context)
  return (
    <>
        <h1 style={!theme?dark:light} className="w-fit rounded-3xl p-2 " >This is SideBar Content</h1>
    </>
  )

}

export default Sidebar