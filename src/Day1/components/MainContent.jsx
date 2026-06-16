
const MainContent = () => {
  return (
    <>
    <div>
        <h1 className="font-bold text-6xl text-center bg-blue-950 text-white">Task-7</h1>
       <StudentProfile/>
        <EmployeeCard/>
        <ProductCard/>
        <MovieDetails/>
        <CompanyInfo/>
    </div>
    </>
  )
}

export default MainContent


const StudentProfile = () => {
  return (
    <div className="bg-green-400  p-5 ">
      <h1 className="text-center font-bold text-2xl mb-5">
        Task-1
      </h1>

      <div className="border-2 border-black p-4 w-fit mx-auto rounded-4xl bg-white ">
        <h1 className="font-bold mb-2">Student Details:</h1>

        <p>Name : Godson</p>
        <p>Course : Fullstack</p>
        <p>City : Chennai</p>
        <p>Institute : SLA</p>
      </div>
    </div>
  );
};


const EmployeeCard = () => {
  return (
    <>
    <div className="bg-blue-400 p-5 ">
        <h1 className="text-center font-bold text-2xl mb-5">Task-2</h1>
      <div className="text-white bg-black w-fit rounded-4xl border-2 border-white p-5 mx-auto">
        <h1 className="font-bold">Employee Details:</h1>
        <p>Employee Name:Godson</p>
        <p>Employee ID:01</p>
        <p>Department:CSE</p>
        <p>Salary:40000</p>
      </div>
    </div>
    </>
  )
}


const ProductCard = () => {
  return (
    <>
    <div className="bg-amber-400 p-5">
        <h1 className=" text-center font-bold mb-5 text-2xl">Task-3</h1>

        <div className="border-white border-2 rounded-4xl p-5 w-fit bg-red-500 text-white mx-auto">
            <h1 className="font-bold">Product Details:</h1>
            <p>Product Name:Laptop</p>
            <p>Product Price:50000</p>
            <p>Product Category:windows</p>
            <p>Product Description:Blackcolor,512GB,i5,12thGen</p>
        </div>
    </div>
    </>
  )
}


const MovieDetails = () => {
  return (
    <>
    <div className="bg-violet-400 p-5">
        <h1 className="text-2xl font-bold mb-5 text-center">Task-4</h1>

        <div className="bg-rose-300 w-fit rounded-4xl mx-auto p-5 border-4 border-black transition-transform duration-300 hover:scale-105">
            <h1 className="font-bold ">Movie Details:</h1>
            <p>Movie Name:Life</p>
            <p>Hero Name:Godson</p>
            <p>Director Name:God</p>
            <p>Release Year:2005</p>
        </div>
    </div>
    </>
  )
}



const CompanyInfo = () => {
  return (
    <>
    <div className="bg-red-500 p-5">
        <h1 className="text-2xl font-bold mb-5 text-center">Task-5</h1>
        <div className="border-2 border-black bg-orange-300 w-fit rounded-4xl mx-auto p-5">
            <h1 className="font-bold">Company Details:</h1>
            <p>Company Name:SLA</p>
            <p>Location:KK Nagar</p>
            <p>Founder:Godson</p>
            <p>Established Year:2026</p>
        </div>
    </div>
    </>
  )
}
