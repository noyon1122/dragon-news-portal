import { Link, useNavigate } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import app from "../../firebase/firebase.config"


const Login = () => {
    const navigate=useNavigate();
    const auth = getAuth(app);
    const handleLogin = e =>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            console.log(result.user);
            navigate('/');
        })
        .catch(error => {
            console.log(error,message)
        })

    }
  return (
    <div>
        <Navbar></Navbar>
        <div className=" mx-auto w-1/3">
            <h2 className="text-center font-bold">Please Login</h2>
        <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center">Do not have an acount? <Link to={'/register'}><span className=" text-blue-600 font-bold">Register</span></Link></p>
        </div>
    </div>
  )
}

export default Login