import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Day3 from '../pages/Day3'
import Day4 from '../pages/Day4'
import Day1 from '../pages/Day1'
import Layouts from '../layouts/Layouts'
import Tasks from '../pages/Tasks'
import Day5 from '../pages/Day5'
import Day6 from '../pages/Day6'
import Day2 from '../pages/Day2'
import About from '../Day2/pages/About'
import Contact from "../Day2/pages/Contact"
import Services from "../Day2/pages/Services"
import Login from "../Day2/pages/Login"
import Register from "../Day2/pages/Register"
import Home2 from '../Day2/pages/Home2'
import Day2Layouts from '../layouts/Day2Layouts'
import Day7 from "../pages/Day7"
import Array from '../Day7/Array'
import Object from "../Day7/Object"
import ArrayofObject from '../Day7/ArrayofObject'
import Day8 from "../pages/Day8"
import Day9 from '../pages/Day9'
const AppRoutes = () => {
  return (
    <>
    <div>
        <Routes>
          <Route element={<Layouts/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Day1' element={<Day1/>}></Route>
            <Route path='/Day3' element={<Day3/>}></Route>
            <Route path='/Day4' element={<Day4/>}></Route>
            <Route path='/Day5' element={<Day5/>}></Route>
            <Route path='/Day6' element={<Day6/>}></Route>
            <Route path='/Day7' element={<Day7/>}></Route>
            <Route path='/Day8' element={<Day8/>}></Route>
            <Route path='/Day9' element={<Day9/>}></Route>

            <Route path='/tasks' element={<Tasks/>}></Route>
          </Route>
          <Route element={<Day2Layouts/>}>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/services' element={<Services/>}></Route>
          </Route>
          <Route path='/Day2' element={<Day2/>}></Route>
          <Route path="/login" element={<Login/>} />
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/home ' element={<Home2/>}> </Route>
          <Route path='/array' element={<Array/>}/>
          <Route path='/object' element={<Object/>}/>
          <Route path='/arrayofobject' element={<ArrayofObject/>}/>                      
        </Routes>
    </div>
    </>
  )
}

export default AppRoutes