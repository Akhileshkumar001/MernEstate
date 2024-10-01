// import React from 'react';
// import { CiSearch } from "react-icons/ci";
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// const Header = () => {
//    const{currentUser}=useSelector((state)=>state.user)
//     return (
//         <div className='bg-slate-200  shadow-md '>
//            <div className='items-center  flex justify-between max-w-6xl mx-auto p-3'>
//            <Link to='/'>
//              <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
//                 <span className='text-slate-500'>Akki</span>
//                 <span className='text-state-700'>Estate</span>
//              </h1>
//              </Link>
//              <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
//                 <input  type="text" placeholder='search...'
//                 className='bg-transparent focus:outline-none w-24 sm:w-64'/>
//                 <CiSearch/>
//              </form>
    
             
//                 <ul className='flex gap-4'>
//                 <Link to='/'>
//                     <li className='hidden sm:inline text-slate-700 hover:underline'>
//                         Home
//                     </li>
//                  </Link>  
//                 <Link to='/about'>
//                     <li className='hidden sm:inline text-slate-700 hover:underline'>
//                         About
//                     </li>
//                  </Link>  
//                  <Link to='/sign-up'>
//                     <li className='hidden sm:inline text-slate-700 hover:underline'>
//                         SignUp
//                     </li>
//                  </Link>   
//                  <Link to='/login'>
//                     <li className='hidden sm:inline text-slate-700 hover:underline'>
//                        Login
//                     </li>
//                 </Link> 
//                 <Link to='/profile'>
//                     <li className='hidden sm:inline text-slate-700 hover:underline'>
//                        profile
//                     </li>
//                 </Link> 
                   
//                 </ul>
    
//            </div>
//         </div>
//     );
// }

// export default Header;
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
   const { user } = useSelector((state) => state.user); // Get the current user from Redux store

   console.log("currentUser", user);
   
   return (
      <div className='bg-slate-200 shadow-md'>
         <div className='items-center flex justify-between max-w-6xl mx-auto p-3'>
            {/* Logo */}
            <Link to='/'>
               <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                  <span className='text-slate-500'>Akki</span>
                  <span className='text-slate-700'>Estate</span>
               </h1>
            </Link>
            
            {/* Search Bar */}
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
               <input
                  type="text"
                  placeholder='search...'
                  className='bg-transparent focus:outline-none w-24 sm:w-64'
               />
               <CiSearch />
            </form>

            {/* Navigation Links */}
            <ul className='flex gap-4 items-center'>
               <Link to='/'>
                  <li className='hidden sm:inline text-slate-700 hover:underline'>
                     Home
                  </li>
               </Link>
               <Link to='/about'>
                  <li className='hidden sm:inline text-slate-700 hover:underline'>
                     About
                  </li>
               </Link>

               {/* Conditionally render user avatar or login button */}
               {user ? (
                  <Link to='/profile'>
                     <img 
                        src={user.avatar} 
                        alt='profile'
                        className='w-8 h-8 rounded-full object-cover'
                     />
                  </Link>
               ) : (
                  <Link to='/login'>
                     <li className='hidden sm:inline text-slate-700 hover:underline'>
                        sign in
                     </li>
                  </Link>
               )}

               {/* Sign Up Link */}
               {!user && (
                  <Link to='/sign-up'>
                     <li className='hidden sm:inline text-slate-700 hover:underline'>
                        Sign Up
                     </li>
                  </Link>
               )}
            </ul>
         </div>
      </div>
   );
};

export default Header;
