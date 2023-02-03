import React, { Children, useState } from 'react'

 import {FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaShoppingBag,
  FaThList,FaBars,
  FaCommentAlt,
  FaHome,
  FaSearch
} from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Authoprovider from './authoprovider';
import App from '../App';

function Sidebar({children}) {
  const [isOpen ,setIsOpen]=useState(false);
  const toogle=()=>setIsOpen(!isOpen);

  const inputAnimation={

    hidden:{
      width:0,
      padding:0,
      opacity:0
    },

    show:{
          width:"140px",
          padding:"1px 15px",
          opacity:1,

  },

};



 const menuItem=[
  {
     path:"/dashboard", 
     name:"Dashboard",
     icon:<FaTh/>


  },
   {
     path:"/about", 
     name:"About",
     icon:<FaUserAlt/>

  },
   {
     path:"/analytics", 
     name:"Analytics",
     icon:<FaRegChartBar/>
  },
   {
     path:"/product", 
     name:"Product",
     icon:<FaShoppingBag/>



  },

   {
     path:"/productlist", 
     name:"ProductList",
     icon:<FaThList/>


  },
   {
     path:"/comment", 
     name:"Comment",
     icon:<FaCommentAlt/>


  },
   {
     path:"/home", 
     name:"Home",
     icon:<FaHome/>


  }

 ]
  return (
<div className="container-flex d-flex">
  <motion.div animate={{width:isOpen?"300px":"34px"}} className="sidebar text-white bg-dark vh-100">


    <div className=" top_section text-center d-flex  justify-content-between ">
    {/* <h1 className='fs-2'>Logo</h1> */}
    {isOpen &&<h1 className='logo fs-4  my-auto'>Logo</h1> }
      <div   className='ms-3'>
            <FaBars onClick={toogle}/>
      </div>

    </div>

    <div className="search d-flex text-center my-2 p-3 ">
      <div className="search_icon  fs-5">

        <FaSearch/>

      </div>
     <AnimatePresence>{isOpen && ( <motion.input initial="hidden" animate="show" exit="hidden" variants={inputAnimation} placeholder='search' className=' border mx-3 w-75  form-control'/>)}</AnimatePresence>
    </div>

    <section classname="menu-items">
    {
        menuItem.map((item,index)=>(

          <NavLink to={item.path} key={index} className="nav-link active d-flex text-white px-3 py-3"
          >

            <div className="icon">{item.icon}  <spam className=" ms-4  ">{item.name}</spam></div>
          
          </NavLink>

        ))
    }
  </section>
    
   

      </motion.div>
    <main className='mx-auto'>{children}</main>
</div>



  );
};

export default Sidebar


