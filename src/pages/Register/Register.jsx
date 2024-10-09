import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
const Register = () => {
  const navigate=useNavigate();
    const auth =getAuth(app)
 const handleRegister =e =>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    createUserWithEmailAndPassword(auth,email,password)
    .then(result => {
        console.log(result.user);
        navigate('/login');

    })
    .catch(error => {
        console.log(error.message)
    })
 }
  return (
    <div className="mt-5">
         <div className=" mx-auto w-1/3">
            <h2 className="text-center font-bold">Please Register</h2>
        <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center">Already have an acount? <Link to={'/login'}><span className=" text-blue-600 font-bold">Login</span></Link></p>
        </div>

    </div>
  )
}

export default Register