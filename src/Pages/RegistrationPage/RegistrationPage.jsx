import { Link } from "react-router-dom"


const RegistrationPage = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <form action="" className=" p-7 bg-purple-200 max-w-2xl mx-auto -mt-32 rounded-xl">
        <h1 className="text-4xl text-center font-bold mb-5">Register User</h1>
        <label>Enter your name</label>
        <input type="text" name='name' placeholder="enter your name" className="mt-1 w-full mb-3 px-3 py-2 rounded-lg text-lg" />
        
        <label>Enter your phoro URL</label>
        <input type="text" name='photo' placeholder="enter your phoro URL" className="mt-1 w-full mb-3 px-3 py-2 rounded-lg text-lg" />
        
        <label>Enter your email</label>
        <input type="email" name='email' placeholder="enter your email" className="mt-1 w-full mb-3 px-3 py-2 rounded-lg text-lg" />
        
        <label>Enter your passsword</label>
        <input type="password" name='password' placeholder="enter your password" className="mt-1 w-full px-3 py-2 rounded-lg text-lg" />
        
        <p className=" mt-1">Already have an account ? Go to <Link className=" font font-semibold text-pink-500" to={'/login'}>Login Page</Link></p>
        <div className=" flex justify-center">
          <button className="w-full bg-pink-500 text-white px-5 py-2 mt-3 rounded-lg text-lg">REGISTER</button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationPage