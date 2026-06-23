import { useState } from "react"
import withColor from "../Day9/hoc/withColor"
import UserCard from "../Day9/components/UserCard"
import withUppercase from "../Day9/hoc/withUppercase"
import MessageComponent from "../Day9/components/MessageComponent"
import withCounter from "../Day9/hoc/withCounter"
import CounterDisplay from "../Day9/components/CounterDisplay"
import withAuth from "../Day9/hoc/withAuth"
import Dashboard from "../Day9/components/Dashboard"
import withIteration from "../Day9/hoc/withIteration"
import InputComponent from "../Day9/components/InputComponent"
import withLoading from "../Day9/hoc/withLoading"
import StudentList from "../Day9/components/StudentList"
const EnhancedInput=withColor(UserCard)
const  EnhancedMessage=withUppercase(MessageComponent)
const EnhancedCounter=withCounter(CounterDisplay)
const EnhancedLogin=withAuth(Dashboard)
const EnhancedIteration=withIteration(InputComponent)
const EnhancedStudent=withLoading(StudentList)
const Day9 = () => {
    const [color,setColor]=useState("")
    const [message,setMessage]=useState("")
    const [count,setCount]=useState(0)
    const [login,setLogin]=useState(false)
    const [arrCount,setArrCount]=useState(0)
    const [textColor,setTextColor]=useState("")
    const [arr,setArr]=useState([])
    const handleChange=(e)=>{
        setColor(e.target.value)
    }
   
    const handleMessage=(e)=>{
        setMessage(e.target.value)
    }
    const handleIncreement=()=>{
        setCount((prev)=>prev+1)
    }
    const handleDecreement=()=>{
        setCount((prev)=>prev-1)
    }
    const handleLogin=()=>{
        setLogin(!login)
    }
    const handleArr=(e)=>{
        setArrCount(e.target.value)
    }
    const handleText=(e)=>{
        setTextColor(e.target.value)
    }
    const setData=()=>{
        for(let i=1;i<=arrCount;i++)
        {
            setArr((prev)=>[...prev,i])
        }
    }
    const students=["Godson","Joel","Darvin"]
    
  return (
    <>
    <div className="bg-purple-800 min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 place-items-center">
       
        {/* Task1 */}
        <div className="bg-white p-5 rounded-3xl border-2 w-full max-w-md min-h-60 flex flex-col gap-3">
            <label className="font-semibold" htmlFor="color">Enter BackgroundColor:</label>
            <input className="border rounded-lg p-2 w-full" type="text" id="color" onChange={handleChange} />
            <EnhancedInput name="Godson" role="Student" color={color} />
        </div>

        {/* Task2  */}

        <div className="bg-white p-5 rounded-3xl border-2 w-full max-w-md min-h-60 flex flex-col gap-3">
            <label className="font-semibold" htmlFor="message">Enter your message here:</label>
            <textarea className="border rounded-lg p-2 w-full h-24" name="message" id="message" onChange={handleMessage}></textarea>
            <EnhancedMessage message={message}/>
        </div>

        {/* Task3  */}
        <div className="bg-white p-5 rounded-3xl border-2 w-full max-w-md min-h-60 flex flex-col items-center justify-center"> 
            <div className="flex flex-col items-center justify-center gap-4 h-full">
                <h1 className="text-3xl font-bold">{count}</h1>
                <div className="flex gap-4">
                <EnhancedCounter symbol="+" onclick={handleIncreement} />
                <CounterDisplay symbol="-" onclick={handleDecreement} />
                </div>
            </div>
        </div>
        

        {/* Task4 */}
        <div className="bg-white p-5 rounded-3xl border-2 w-full max-w-md min-h-60 flex flex-col gap-3">
            <EnhancedLogin islogin={login}/>
            <button className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-900" onClick={handleLogin} >{login?"Logout":"Login"}</button>
            
        </div>

        {/* Task5  */}

        <div className="bg-white p-5 rounded-3xl border-2 w-full max-w-md min-h-60 flex flex-col gap-3"> 
            <label className="font-semibold" htmlFor="count">Enter Count:</label>
            <input className="border rounded-lg p-2 w-full" type="text" id="count" value={arrCount} onChange={handleArr} />
            <label className="font-semibold" htmlFor="textColor">Enter Color:</label>
            <input className="border rounded-lg p-2 w-full" type="text" id="textColor"  value={textColor} onChange={handleText}/>
            <button className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-900" onClick={setData}>Submit</button>
            <EnhancedIteration arr={arr} color={textColor}/>
        </div>

        {/* Task6  */}
        <div className="bg-white p-5 rounded-3xl border-2 w-full max-w-md min-h-60 flex flex-col gap-3">
            <EnhancedStudent students={students}/>
        </div>
       

       
    </div>
    </>
  )
}

export default Day9