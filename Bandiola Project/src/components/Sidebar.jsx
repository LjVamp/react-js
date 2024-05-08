import React from 'react'
import Header from './Header'

const Sidebar = () => {
  return (
    <div className='w-64 bg-green-800 fixed h-full'>
        <Header />
        <hr />
        <ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover:shadow hover:bg-green-700'>
                <a href="" className='px-3'>
                    Admin
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-green-700'>
                <a href="" className='px-3'>
                    Dashboard
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-green-700'>
                <a href="" className='px-3'>
                    Students
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar