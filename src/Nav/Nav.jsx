import PropTypes from 'prop-types';
import Link from '../Link/Link';
import { RiMenu2Line } from "react-icons/ri";
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";

const Nav = () => {
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Products", path: "/products" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Profile", path: "/profile" }
      ];
      const [open , setopen]=useState(false);
      
    return (
        <nav className=' p-6 pl-6'>
        <div  className='md:hidden text-2xl'  onClick={()=>setopen(!open)}>
            {
                open === true? <RxCross2 />
                : <RiMenu2Line />
            }
            </div>
            
         <div className=''>
         <ul className={`absolute md:static md:flex duration-700 bg-red-700
          ${open?"mt-4":'-mt-96'}  justify-center md:mt-0
         `}>{
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
            </ul>
         </div>
        

        </nav>
    );
};
Nav.propTypes={
    routes:PropTypes.object.isRequired
}
export default Nav;

