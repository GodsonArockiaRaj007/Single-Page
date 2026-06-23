
const Dashboard = ({islogin}) => {
  return (
    <>
    <div>
        {islogin ?<h1>Dashboard</h1>:<h1>Login first</h1>
        }
    </div>
    </>
  )
}

export default Dashboard