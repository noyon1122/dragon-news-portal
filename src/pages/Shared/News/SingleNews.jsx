import user from '../../../assets/user.png'
import moment from 'moment';
import editorsInsight1 from '../../../assets/editorsInsight1.png'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineStarRate } from "react-icons/md";
const SingleNews = ({singleNews}) => {
    const {id,img,total_view,rating}=singleNews;
  return (
    <div className="card bg-base-100 w-full">
        {/* user datails */}
    <div className='bg-slate-200 p-1 flex items-center'>
    <div className=" ml-6 w-6 rounded-full mr-3">
          <img className='rounded-full' src={user} alt="Tailwind CSS Navbar component"/>
        </div>
       <div>
       <p>Noyon Hossain</p>
       <p className=''>{moment().format("YYYY-M-D")}</p>
       </div> 
    </div>
       <div className='w-3/4 mt-3 mb-3'> <h2 className='font-bold ml-7'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
       </div>
    <figure>
      <img
        src={editorsInsight1}
        alt="Shoes" />
    </figure>
    <div className='mt-3 mb-3 ml-7 w-11/12'>
        <p>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... Read More</p>
    </div>
    <hr />
      <div className='ml-7 mt-3 mb-3 flex justify-between mr-3'>
        <div className='flex items-center'>
            <MdOutlineStarRate className='text-xl'></MdOutlineStarRate ><MdOutlineStarRate className='text-xl'></MdOutlineStarRate><MdOutlineStarRate className='text-xl'></MdOutlineStarRate><MdOutlineStarRate className='text-xl'></MdOutlineStarRate><MdOutlineStarRate className='text-xl mr-2'></MdOutlineStarRate>
            <p>{rating.number}</p>
        </div>
        <div className='flex items-center gap-2'>
            <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye>
            <p className=''>{total_view}</p>
        </div>
      </div>
  </div>
  )
}

export default SingleNews