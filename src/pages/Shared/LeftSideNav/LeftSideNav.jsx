import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import pic1 from '../../../assets/1.png'
import pic2 from '../../../assets/2.png'
import pic3 from '../../../assets/3.png'
import { MdDateRange } from "react-icons/md";

const LeftSideNav = () => {
    const [categories,setCategories]=useState([]);
   
    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data => setCategories(data));
    },[])
  return (
    <div className="">
        <h2 className=" mb-3 font-bold">
            All Category
        </h2>
        <div>
            <div className="bg-gray-300 w-2/3 py-2 text-center rounded-md"><h2 className="font-bold">National News</h2></div>
         <div className="mt-3">
            {
                categories.map(category => <NavLink className="block px-8 mb-3" key={category.id}> {category.name}</NavLink>)
            }
         </div>
        
        <div className="main_div">
        <div className=" bg-base-100 mb-3 w-3/4">
          <figure>
           <img
            src={pic1}
             alt="Shoes" />
          </figure>
          <p className="text-xl mt-3 mb-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          <div className="flex gap-4">
            <p>sports</p> 
          
           <div className="flex items-center gap-2">
           <MdDateRange></MdDateRange>
           <span>Oct 09 2024</span>
           </div>
           

          </div>
          </div>
          <div className="bg-base-100 mt-3 w-3/4">
          <figure>
           <img
            src={pic2}
             alt="Shoes" />
          </figure>
        <p className="text-xl mt-3 mb-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        <div className="flex gap-4">
            <p>sports</p> 
          
           <div className="flex items-center gap-2">
           <MdDateRange></MdDateRange>
           <span>Oct 09 2024</span>
           </div>
           

          </div>
          </div>

          <div className="bg-base-100 mt-3 w-3/4">
          <figure>
           <img
            src={pic3}
             alt="Shoes" />
          </figure>
          <p className="text-xl mt-3 mb-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          <div className="flex gap-4">
            <p>sports</p> 
          
           <div className="flex items-center gap-2">
           <MdDateRange></MdDateRange>
           <span>Oct 09 2024</span>
           </div>
           

          </div>
          </div>
          
        </div>
        </div>
    </div>
  )
}

export default LeftSideNav