
import Header from "../Shared/Header/Header"
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav"
import Navbar from "../Shared/Navbar/Navbar"
import News from "../Shared/News/News"
import RightSideNav from "../Shared/RightSideNav/RightSideNav"
import BreakingNews from "./BreakingNews"


const Home = () => {
  return (
    <div>
         <Header></Header>
         <BreakingNews></BreakingNews>
         <Navbar></Navbar>

         <div className="grid grid-cols-1 md:grid-cols-4">
            <div><LeftSideNav></LeftSideNav></div>
            <div className="md:col-span-2"><News></News></div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
         </div>
    </div>

    
   
  )
}

export default Home