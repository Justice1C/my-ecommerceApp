import React from 'react'

const Navbar = () => {
  return (
   <nav>
    <div>
        <div>
        <Link to='/' >e-SHOP</Link>
        </div>
        <div>
            <form action="">
                <input type='text'  placeholder='Search Sear'/>
            </form>
        </div>
    </div>
   </nav>
  )
}

export default Navbar
