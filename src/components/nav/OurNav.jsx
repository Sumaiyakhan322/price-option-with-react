// import PropTypes from 'prop-types';
import { useState } from 'react';
import {RiMenu2Line,RiCloseCircleLine} from 'react-icons/ri';

const OurNav = () => {
  const [open,setOpen]=useState(false);

  const routes = [
    {
      path: "/",
      name: "Home",
      id: "home",
      exact: true,
    },
    {
      path: "/about",
      name: "About",
      id: "about",
      exact: true,
    },
    {
      path: "/contact",
      name: "Contact",
      id: "contact",
      exact: true,
    },
    {
      path: "/products",
      name: "Products",
      id: "products",
      exact: true,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      id: "dashboard",
      exact: true,
    },
  ];

  return <nav className='p-6 bg-gray-500'>
  <div className='text-2xl md:hidden' onClick={()=>setOpen(!open)}>
    {
      open===true? <RiCloseCircleLine></RiCloseCircleLine>: <RiMenu2Line className=''></RiMenu2Line>
    }
   
  </div>
<<<<<<< HEAD
   <ul className={`md:flex absolute p-6 bg-gray-500 md:static duration-1000 ${open?'top-14':'-top-60'}`}>
=======
   {/* <ul className="md:flex ">
>>>>>>> 0c4e41bc721f38ecda6b7e54da6faf59e2a97038
   {
      routes.map(route=> <li className="mr-10 " key={route.id}><a href={'route.path'} className='hover:bg-gray-800 p-4 hover:text-white hover:rounded-lg'>{route.name}</a></li>)
    }
<<<<<<< HEAD
   </ul>
 
=======
   </ul> */}
>>>>>>> 0c4e41bc721f38ecda6b7e54da6faf59e2a97038
  </nav>;
};

export default OurNav;
