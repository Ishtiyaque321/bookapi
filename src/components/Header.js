import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className='flex justify-between bg-gray-400'>
        <div className=' w-32 p-4 m-4'>
            <img src="https://tse1.mm.bing.net/th?id=OIP.M56Z_XU7r_UeDFR05bfkzwHaE7&pid=Api&P=0&h=220" alt="logo"/>
        </div>


        <NavBar/>
    </div>
  )
}

export default Header