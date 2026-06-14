import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Day3 from '../pages/Day3'
const AppRoutes = () => {
  return (
    <>
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Day3' element={<Day3/>}></Route>
        </Routes>
    </div>
    </>
  )
}

export default AppRoutes