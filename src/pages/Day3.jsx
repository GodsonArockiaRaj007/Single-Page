import EmployeeCard from "../Day3/EmployeeCard"
import Product from "../Day3/Product"
import Skills from "../Day3/Skills"
import Student from "../Day3/Student"
import User from "../Day3/User"
import Company from "../Day3/Company"
import Parent from "../Day3/Parent"
import CourseCard from "../Day3/CourseCard"

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