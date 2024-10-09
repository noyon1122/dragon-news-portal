import { FaGoogle ,FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const RightSideNav = () => {
  const navigate= useNavigate();
  const auth=getAuth();
  const googleProvider=new GoogleAuthProvider();

const handleGoogleSignIn= ()=>{
   signInWithPopup(auth,googleProvider)
   .then(result => {
    console.log(result.user);
    navigate('/');
   })
   .catch(error => {
    console.log(error.message);
   })
}
  return (
    <div>
       <div className="p-4 space-y-2 mb-6">
        <h2 className="font-bold text-xl">Login with</h2>
       <button onClick={handleGoogleSignIn}  className="btn btn-outline w-full"> <FaGoogle></FaGoogle> Google</button>
       <button  className="btn btn-outline w-full"> <FaGithub></FaGithub> Github</button>
       </div>

       <div className="p-4  mb-6">
        <h2 className="font-bold text-xl mb-4">Find Us</h2>
       <a className="flex items-center  border rounded-t-lg p-2"> <FaFacebook className="mr-3"></FaFacebook> Facebook</a>
       <a  className="flex items-center border p-2"> <FaTwitter className="mr-3"></FaTwitter> Twitter</a>
       <a  className="flex items-center p-2 border rounded-b-lg"> <FaInstagram className="mr-3"></FaInstagram> Instagram</a>
       </div>

       <div className="p-4  mb-6 bg-slate-100">
        <h2 className="font-bold text-xl mb-4">Q-Zone</h2>
         <div><img src={qZone1} alt="" /></div>
         <div><img src={qZone2} alt="" /></div>
         <div><img src={qZone3} alt="" /></div>
       </div>
    </div>
  )
}

export default RightSideNav