import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';
function SearchBar() {

    const [text,setText]=useState('');
    const dispatch=useDispatch()

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(setQuery(text));
        setText('')
    }
        return (
        <div>
            <form className='flex bg-gray-700 gap-5 py-10 px-10' onSubmit={(e)=>{
                submitHandler(e)
            }}>
                <input type="text"
                value={text}
                onChange={(e)=>{setText(e.target.value)}}
                required
                placeholder='Search anything'
                className='w-full border-2 rounded px-2 py-3 text-xl outline-none'/>
                <button className='cursor-pointer active:scale-95 border-2 rounded px-6 py-3 text-xl'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar
