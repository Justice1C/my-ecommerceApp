import React from 'react'
import {Link} from 'react-router-dom'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'


const Navbar = () => {
  return (
   <nav className='bg-white shadow-md '> 
    <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div className='text-lg font-bold'>
        <Link to='/' >e-SHOP</Link>
        </div>
        <div className='relative mx-4 flex-1'>
            <form action="">
                <input type='text'  placeholder='Search Prodect' className='w-full border py-2 px-4'/>
                <FaSearch className='absolute top-3 right-3 text-red-500'/>
            </form>
        </div>
        <div className='flex items-center space-x-4'>
            <Link to='/cart'>
            <FaShoppingCart />
            </Link>
            <button className='hidden md:block'>
                Login | Register
            </button>

            <button>
                <FaUser />
            </button>
        </div>
    </div>
   </nav>
  )
}

export default Navbar
