import { useState } from "react";
import Card from "./card";
function Home() {
    const [tasks, setTasks] = useState([]);
    const [newObj,setNewObj]=useState({titleTask:"",des:""});
   const handleTitleChange = (e) =>
    setNewObj({ ...newObj, titleTask: e.target.value });

  const handleDesChange = (e) =>
    setNewObj({ ...newObj, des: e.target.value });

    const handleAddTasks=()=>{
        setTasks([...tasks,newObj])
         setNewObj({ titleTask: "", des: "" }); 
    }
    return (
        <>
            <div className="w-full mx-auto min-h-screen bg-slate-50 p-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
                    <div className="mb-5">
                        <h1 className="text-2xl font-bold text-blue-400 mb-1">Add Task</h1>
                        <p className="text-sm text-slate-500">
                            Fill in the details below to create a new task
                        </p>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Title
                        </label>
                        <input
                            type="text"
                            onChange={handleTitleChange}
                            placeholder="e.g. Finish project report"
                            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Description
                        </label>
                        <input
                            type="text"
                            onChange={handleDesChange}
                            placeholder="Add more details about this task"
                            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                        />
                    </div>

                    <button onClick={handleAddTasks} className="mt-4 w-full sm:w-auto px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition">
                        Add Task
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h1 className="text-xl font-bold text-blue-400 mb-4">Added Tasks</h1>

                    {tasks.length === 0 ? (
                        <p className="text-slate-400 text-sm italic">No tasks added yet.</p>
                    ) : (
                        <ul className="space-y-3">
                            {tasks.map((element,index)=><Card tasks={tasks}/>)}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;
