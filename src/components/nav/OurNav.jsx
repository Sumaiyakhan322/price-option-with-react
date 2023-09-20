// import PropTypes from 'prop-types';
import { useState } from 'react';
import {RiMenu2Line,RiCloseCircleLine} from 'react-icons/ri';

const OurNav = () => {
  const [open,setOpen]=useState(true);

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

  return <nav>
  <div className='text-2xl md:hidden' onClick={()=>setOpen(!open)}>
    {
      open===true?<RiMenu2Line className=''></RiMenu2Line> : <RiCloseCircleLine></RiCloseCircleLine>
    }
   
  </div>
   <ul className="md:flex ">
   {
      routes.map(route=> <li className="mr-10" key={route.id}><a href={'route.path'}>{route.name}</a></li>)
    }
   </ul>
  </nav>;
};

export default OurNav;
