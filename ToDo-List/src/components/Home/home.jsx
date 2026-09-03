import React from 'react'
import { useState } from 'react'
function Home() {
    const [tasks,useTasks]=useState([]);
    return (
        <>
        <div className='max-w-full bg-blue-400 p-5'>
            <div className='p-0'>
                <h1 className=''>Add Tasks</h1>
                <label className='text-black text-2xl'>Enter Title of task:</label>
                <input type="text" className=''/>
                <label className='text-black text-2xl'>Enter Description of task</label>
                <input type="text"/>
            </div>
            <div>
                <h1>Added Tasks</h1>

            </div>
        </div>
        </>
    )
}

export default Home
