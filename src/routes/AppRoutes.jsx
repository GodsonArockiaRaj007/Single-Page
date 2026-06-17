import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Day3 from '../pages/Day3'
import Day4 from '../pages/Day4'
import Day1 from '../pages/Day1'
import Layouts from '../layouts/Layouts'
import Tasks from '../pages/Tasks'
import Day5 from '../pages/Day5'
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
            <Route path='/tasks' element={<Tasks/>}></Route>
          </Route>
            
            
        </Routes>
    </div>
    </>
  )
}

export default AppRoutes