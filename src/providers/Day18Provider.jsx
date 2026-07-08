import { useState } from "react"
import Day18Context from "../contexts/Day18Context"

const Day18Provider = ({children}) => {

    const userProfile={
  name: "Godson",
  email: "godson@gmail.com",
  role: "Fullstack Developer"
    }

    const products=[
        {
    id:1,
    title:"Laptop",
    price:50000
  },
  {
    id:2,
    title:"Mobile",
    price:20000
  }
]

const [theme,setTheme]=useState(false)

const handleClick=(e)=>{
    e.preventDefault()
    setTheme(!theme)
}
const dark={
    color:"white",
    backgroundColor:"#3b0764"
}
const light={
    color:"black",
    backgroundColor:"white"
}


const students=[
 {
   id:1,
   name:"Sudhan",
   course:"MERN"
 },
 {
   id:2,
   name:"Ravi",
   course:"React"
 }
]

const cart=[
 {
   id:1,
   product:"Laptop",
   qty:2
 },
 {
   id:2,
   product:"Mouse",
   qty:1
 }
]
  return (
    <Day18Context.Provider value={{userProfile,products,theme,handleClick,light,dark,students,cart}}>
        {children}
    </Day18Context.Provider>
  )
}

export default Day18Provider