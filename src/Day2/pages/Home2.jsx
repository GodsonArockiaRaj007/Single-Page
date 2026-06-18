
const Home2 = () => {
  const year=2026 
  const message="Thank You"
  const isLoggedIn = true;
  return (
    
    <>
    <div className="bg-amber-400 h-screen">
      <h1 className=" text-3xl font-bold text-center">Home</h1>

      <div className="w-200 mx-auto bg-amber-50 p-5 m-3 rounded-3xl">
        <h1 className="font-bold text-2xl">Dynamic Contents:</h1>
        <p>This page contains dynamic string and numbers . Dynamic contents are the contents which are very much useful when we use a same conent in many places,
          we don't need to change the content in all the places and insted if we change the value at one place it  will be automatically changed in 
          all the places where it is used
        </p>
      </div>
      <div className="w-200 mx-auto bg-amber-50 p-5 m-3 rounded-3xl">
        <h1 className="font-bold text-2xl"> Number Example:</h1>
        <p> I have stored <span className="bg-amber-400">{year} </span>in a varialbe named year and when i need to chnage this <span className="bg-amber-400">{year} </span> o dont want to change it in everywhere 
          instead i can only change it in the variable year it will update and shows the <span className="bg-amber-400">{year} </span>
        </p>
      </div>
      <div className="w-200 mx-auto bg-amber-50 p-5 m-3 rounded-3xl">
        <h1 className="font-bold text-2xl"> String Example:</h1>
        <p> I have stored <span className="bg-red-400">{message} </span>in a varialbe named message and when i need to chnage this <span className="bg-red-400">{message} </span> o dont want to change it in everywhere 
          instead i can only change it in the variable message it will update and shows the <span className="bg-red-400">{message} </span>
        </p>
      </div>
  
        <div className="w-200 mx-auto bg-amber-50 p-5 m-3 rounded-3xl">
          <h1 className="font-bold text-2xl">Boolean Example:</h1>
          <p>I have stored <span className="bg-green-400 p-1">{isLoggedIn ? "true" : "false"}</span> in a variable named isLoggedIn. When the value changes,
          React automatically updates wherever it is used.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home2