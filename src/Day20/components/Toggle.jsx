
import useToggle from '../hooks/useToggle'

const Toggle = () => {
    const{toggle,handleClick}=useToggle()
  return (
    <>
    <div className='bg-white p-5 rounded-3xl'>
      <h1 className='text-center font-bold text-3xl mb-3'>Toggle</h1>
         <label htmlFor="password">Enter Password : </label>
    <input type={toggle?"text":"password"} id='password' className='border-2 rounded-3xl p-2'  /><button onClick={handleClick}>{toggle?"hide":"show"}</button>

    </div>
   
    </>
  )
}

export default Toggle