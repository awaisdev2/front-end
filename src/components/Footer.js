import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      
<footer className="bg-gray-400 shadow mt-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to='/' className="flex items-center mb-4 sm:mb-0">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">E-commerce</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-800 sm:mb-0">
                <li>
                    <Link to='/product' className="mr-4 hover:text-blue-700 md:mr-6 ">About</Link>
                </li>
                <li>
                    <Link to='' className="mr-4 hover:text-blue-700 md:mr-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link to='' className="mr-4 hover:text-blue-700 md:mr-6 ">Licensing</Link>
                </li>
                <li>
                    <Link to='' className="hover:text-blue-700">Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-700 sm:text-center">© 2023 <Link to='' className="hover:underline">E-commerce™</Link>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}
