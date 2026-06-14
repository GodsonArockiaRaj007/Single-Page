import EmployeeCard from "../components/EmployeeCard"
import Product from "../components/Product"
import Skills from "../components/Skills"
import Student from "../components/Student"
import User from "../components/User"
import Company from "../components/Company"
import Parent from "../components/Parent"
import CourseCard from "../components/CourseCard"

const Day3 = () => {
 const name="Godson"
  const age=21
  const course="Fullstack"
  const city="Chennai"
  const skills=['HTML','CSS','JavaScript','React','Node.js']
  const user={
    name:"Godson",
    email:"godson@gmail.com",
    phone:9344958856,
    city:"Chennai"
  }
  const employee={
    company:"SLA",
    name:"Godson",
    role: "Fullstack Developer",
    salary:50000,
  }
 
  return (
    <>
    <h1 className="text-5xl text-center font-bold bg-amber-300 p-5">DAY 3 Tasks</h1>
    <div className="bg-amber-300  grid grid-cols-3  ">
    <Student name={name} age={age} course={course} city={city} />
    <EmployeeCard name="Godson" id="46" department="CSE" salary="50000" experience="Fresher"  />
    <Product name="Laptop" price="60000" category="Electronics" brand="Lenovo"/>
    <Skills skills={skills}/>
    <User user={user}/>
    <Company employee={employee}/>
    <Parent name="Godson"course="MERN"/>
    <CourseCard courseName="Front-end" duration="2 Months" fees={20000}/>
    <CourseCard courseName="Back-end" duration="2 Months" fees={25000}/>
    <CourseCard courseName="Full Stack" duration="5 Months" fees={40000}/>
    </div>
    </>
  )
}

export default Day3