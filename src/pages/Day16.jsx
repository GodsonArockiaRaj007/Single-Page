import { useEffect, useState } from "react"

const Day16 = () => {
    const [task, setTask] = useState("");
    const [tasks,setTasks]=useState([])
    const [editId, setEditId] = useState(null);
    const getData=()=>{
        const data=JSON.parse(localStorage.getItem("todolist")) || []
        setTasks(data)
    }
    useEffect(()=>{
        getData()
    },[])
    const handleChange=(e)=>{
        setTask(e.target.value)
    }
    const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("todolist")) || [];
    if(task=="")
    {
        alert("Enter Task first")
        return
    }
    if (editId === null) {
        data.push({id: Date.now(),task});
    }
     else {
        const updatedData = data.map((e) =>e.id === editId ? { ...e, task } : e);

        localStorage.setItem("todolist", JSON.stringify(updatedData));
        setTasks(updatedData);
        setTask("");
        setEditId(null);
        return;
    }

    localStorage.setItem("todolist", JSON.stringify(data));
    setTasks(data);
    setTask("");
};
    const handleDelete=(userid)=>{
        
        const data=JSON.parse(localStorage.getItem("todolist")) || []
        const newdata=data.filter((e)=>e.id!==userid)
        localStorage.setItem("todolist", JSON.stringify(newdata));
        setTasks(newdata)

    }

    const handleEdit=(userid)=>{
    const data=JSON.parse(localStorage.getItem("todolist")) || []
    const editTask = data.find((e) => e.id === userid);

    setTask(editTask.task); 
    setEditId(userid);   

    }


  return (
    <>
    <div className="bg-purple-800 min-h-screen flex justify-center p-10">

        <div className="bg-white p-5 w-fit rounded-3xl ">
            <h1 className="text-5xl font-bold text-center text-purple-950 mb-10">ToDo List</h1>
        <form onSubmit={handleSubmit} >
        <label htmlFor="task" className="text-purple-950 font-bold m-4">Enter Task :</label>
        <input className="border-2 rounded p-1 mr-4 w-80 inline-block" placeholder="Enter Task" onChange={handleChange} value={task} type="text" id="task" name="task"  />
        
        <button className="border-2 w-20 rounded-3xl p-1 bg-purple-950 text-white font-bold" type="submit">{editId === null ? "Add" : "Update"}</button>
        
        

        </form>
        <div>
            <table className="w-full border-separate border-spacing-y-3" >
                <thead className="font-bold text-2xl text-purple-950">
                    <tr>
                          <th className="w-40">Task no.</th>
                    <th className="w-40">Task</th>
                    <th className="w-40" colSpan={2}>Actions</th>

                    </tr>
                  
                </thead>

            <tbody>

                 {tasks.map((e,i)=>(
                <tr key={e.id} className="bg-purple-800 text-white ">
                    <td className="rounded-l-3xl px-4 py-2 text-center">{i+1}</td>
                    <td className="text-center">{e.task}</td>
                    <td className="text-center"><button className="border-2 w-15 rounded-3xl p-1 bg-green-600 " onClick={()=>handleEdit(e.id)}>Edit</button></td>
                    <td className=" rounded-r-3xlyy px-4 py-2 text-center"><button className="border-2 w-15 rounded-3xl p-1 bg-red-600" onClick={()=>handleDelete(e.id)}>Delete</button></td>
                    
                </tr>
             

                
            ))}


            </tbody>
           
            </table>
        </div>

        </div>
        
        
    </div>
    </>
  )
}

export default Day16