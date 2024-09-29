import React from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bg-slate-200  shadow-md '>
           <div className='items-center  flex justify-between max-w-6xl mx-auto p-3'>
           <Link to='/'>
             <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Akki</span>
                <span className='text-state-700'>Estate</span>
             </h1>
             </Link>
             <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input  type="text" placeholder='search...'
                className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <CiSearch/>
             </form>
    
             
                <ul className='flex gap-4'>
                <Link to='/about'>
                    <li className='hidden sm:inline text-slate-700 hover:underline'>
                        About
                    </li>
                 </Link>  
                 <Link to='/sign-up'>
                    <li className='hidden sm:inline text-slate-700 hover:underline'>
                        SignUp
                    </li>
                 </Link>   
                 <Link to='/login'>
                    <li className='hidden sm:inline text-slate-700 hover:underline'>
                       Login
                    </li>
                </Link>    
                </ul>
    
           </div>
        </div>
    );
}

export default Header;
