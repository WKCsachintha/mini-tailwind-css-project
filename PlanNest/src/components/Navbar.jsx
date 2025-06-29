// import React, { useState } from 'react'
// import{assets} from'../assets/assets'

// const Navbar =() => {

//       const[showMobileMenu,setShowMobileMenu] = useState(false)
//     return (
//         <div className='absolute top-0 left-0 w-full z-10 '>
//           <div className='container mx-auto flex justify-between
//           items-center py-4 px-6 md:px-20  lg:px32 bg-transparent'>
//             <img src={assets.logo}alt=''/>
//             <ul className='hidden md:flex gap-7 text-white'> 
//                 <a href='#Header' className='cursor-pointer
//                  hover:text-gray-400'>Home</a>
//                  <a href='#Header' className='cursor-pointer 
//                  hover:text-gray-400'>About</a>
//                   <a href='#Header' className='cursor-pointer
//                    hover:text-gray-400'>Project</a>
//                 <a href='#Header' className='cursor-pointer
//                  hover:text-gray-400'>Testimonials</a>
//             </ul>
//             <button className='hidden md:block bg-white px-8 py-2
//             rounded-full'>Sign up</button>
//             <img onClick={()=>setShowMobileMenu(true)}    src={assets.menu_icon} ClassName='md:hidden w-7 cursor-pointer' alt=""/>

//           </div>
//           {/*mobile menu*/}
//           <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} 
//              right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
//               <div className='flex justify-end p-6 cursor-pointer'>
//                 <img onClick={()=>setShowMobileMenu(false)} className='w-6 alt=""/>

//               </div>


//             <ul className='flex flex-col items-center gap-2 mt-5 px-5 
//             text-lg font-medium'>
//               <a href='#header' className='px-4 py2 rounded-full 
//               inline-block'>Home</a>
//               <a href='#About' className='px-4 py2 rounded-full 
//               inline-block'>About</a>
//               <a href='#Projects' className='px-4 py2 rounded-full 
//               inline-block'>Projects</a>
//               <a href='#Testimonails' className='px-4 py2 rounded-full 
//               inline-block'>Testimonails</a>

//             </ul>
//           </div>
//         </div>
//     )
// }

// export default Navbar


import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      {/* Top Navbar */}
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt='Logo' className='w-32' />

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-7 text-white'>
          <li>
            <a href='#Header' className='cursor-pointer hover:text-gray-400'>Home</a>
          </li>
          <li>
            <a href='#About' className='cursor-pointer hover:text-gray-400'>About</a>
          </li>
          <li>
            <a href='#Projects' className='cursor-pointer hover:text-gray-400'>Projects</a>
          </li>
          <li>
            <a href='#Testimonials' className='cursor-pointer hover:text-gray-400'>Testimonials</a>
          </li>
        </ul>

        {/* Sign up button */}
        <button className='hidden md:block bg-white text-black px-8 py-2 rounded-full'>
          Sign up
        </button>

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          onClick={() => setShowMobileMenu(true)}
          className='md:hidden w-7 cursor-pointer'
          alt='Menu'
        />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 bottom-0 w-full bg-white transition-all duration-300 ${showMobileMenu ? 'h-full' : 'h-0 overflow-hidden'}`}>
        <div className='flex justify-end p-6'>
          <img
            src={assets.cross_icon}
            onClick={() => setShowMobileMenu(false)}
            className='w-6 cursor-pointer'
            alt='Close'
          />
        </div>

        <ul className='flex flex-col items-center gap-4 mt-10 px-5 text-lg font-medium'>
          <li>
            <a
              href='#Header'
              onClick={() => setShowMobileMenu(false)}
              className='px-4 py-2 rounded-full inline-block hover:bg-gray-100 transition'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#About'
              onClick={() => setShowMobileMenu(false)}
              className='px-4 py-2 rounded-full inline-block hover:bg-gray-100 transition'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#Projects'
              onClick={() => setShowMobileMenu(false)}
              className='px-4 py-2 rounded-full inline-block hover:bg-gray-100 transition'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#Testimonials'
              onClick={() => setShowMobileMenu(false)}
              className='px-4 py-2 rounded-full inline-block hover:bg-gray-100 transition'
            >
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
