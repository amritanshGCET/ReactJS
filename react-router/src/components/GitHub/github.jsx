import React from 'react'
import { useEffect,useState } from 'react'
function Github() {
    const[Data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/amritanshGCET')
        .then(response=>response.json())
        .then(cData=>{
            console.log(cData);
            setData(cData);
        })
    },[])
    return (
       <>
       <div className='flex flex-row justify-center items-center'>
        <div className='h-20 w-20 rounded-2xl'>
            <img src={Data.avatar_url} alt="GitHub Avatar" />
        </div>
        <div className='text-center m-4 bg-grey p-4 text-3xl'>GitHub followers: {Data.followers}</div>
        <div className='text-center m-4 bg-grey p-4 text-3xl'>Public Repos: {Data.public_repos}</div>
        </div>
        </>
    )
}

export default Github
