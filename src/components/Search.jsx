import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Search = () => {
  return (
    <div className='w-[100%]'>
        <div className='flex items-center'>
            <select className='text-black bg-slate-200' style={null}>
                <option>All</option>
                <option>Deals</option>
                <option>Amazon</option>
                <option>Fashion</option>
                <option>Computers</option>
                <option>Home</option>
                <option>mobiles</option>
            </select>
            <input className='flex items-center h-[100%] rounded-l text-black' type='text' />
            <button className='w-[45px]'>
             <MagnifyingGlassIcon className='h-[27px]'/>
            </button>
        </div>
    </div>
  )
}

export default Search