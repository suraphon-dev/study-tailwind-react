import { useState } from 'react'

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <>
         <nav className="bg-blue-600 text-white bg-gradient-to-r from-blue-600 to-blue-400">
            <div className="container mx-auto flex items-center justify-between p-4">
               <a href="/" className="text-2xl font-bold hover:text-gray-200">
                  Logo
               </a>
               {/* Menu Desktop */}
               <ul className="hidden md:flex space-x-4">
                  <li>
                     <a href="#" className="hover:text-gray-200">
                        Home
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-gray-200">
                        About
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-gray-200">
                        Service
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-gray-200">
                        Contact
                     </a>
                  </li>
               </ul>
               {/* Button Hamburger */}
               <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
               </button>
            </div>
            {/* Menu Mobile */}
            <ul className={`md:hidden flex-col space-y-4 p-4 ${isOpen ? 'block' : 'hidden'} `}>
               <li>
                  <a href="#" className="block text-center">
                     Home
                  </a>
               </li>
               <li>
                  <a href="#" className="block text-center">
                     About
                  </a>
               </li>
               <li>
                  <a href="#" className="block text-center">
                     Service
                  </a>
               </li>
               <li>
                  <a href="#" className="block text-center">
                     Contact
                  </a>
               </li>
            </ul>
         </nav>
      </>
   )
}
