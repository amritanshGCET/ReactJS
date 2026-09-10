import { useState } from "react";
import Card from "./card";
function Home() {
    const [tasks, setTasks] = useState([]);
    const [newObj, setNewObj] = useState({ titleTask: "", des: "" });
    const [isEmpty,setIsEmpty]= useState(true);
    const handleTitleChange = (e) =>{
        setNewObj({ ...newObj, titleTask: e.target.value });
        setIsEmpty(true)
    }
    const handleDesChange = (e) =>
        setNewObj({ ...newObj, des: e.target.value });

    const handleAddTasks = () => {
        if(newObj.titleTask.length === 0){
            setIsEmpty(false)
        }
        else{
        setTasks([...tasks, newObj])
        setNewObj({ titleTask: "", des: "" })
        setIsEmpty(true)
        }
    }
    return (
        <>
            <div className="w-full mx-auto min-h-screen bg-stone-100 p-6">
                <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 mb-6">
                    <div className="mb-5">
                        <h1 className="text-2xl font-bold text-teal-700 mb-1">Add Task</h1>
                        <p className="text-sm text-stone-500">
                            Fill in the details below to create a new task
                        </p>
                    </div>  
                    {isEmpty ? (
                        <p></p>):(                        <p className="text-red-500">You have not entered task title</p>)}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                            Title
                        </label>
                        <input
                            type="text"
                            value={newObj.titleTask}
                            onChange={handleTitleChange}
                            placeholder="e.g. Finish project report"
                            className="w-full px-3 py-2 rounded-lg border border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                            Description
                        </label>
                        <input
                            type="text"
                            value={newObj.des}
                            onChange={handleDesChange}
                            placeholder="Add more details about this task"
                            className="w-full px-3 py-2 rounded-lg border border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
                        />
                    </div>

                    <button
                    onClick={handleAddTasks}
                        className="mt-4 w-full sm:w-auto px-5 py-2 bg-teal-700 hover:bg-teal-800 text-white font-medium rounded-lg transition"
                    >
                        Add Task
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
                    <h1 className="text-xl font-bold text-teal-700 mb-4">Added Tasks</h1>

                    {tasks.length === 0 ? (
                        <p className="text-stone-400 text-sm italic">No tasks added yet.</p>
                    ) : (
                        <ul className="space-y-3">
                            {tasks.map((element, index) => <Card task={element} index={index} />)}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;
