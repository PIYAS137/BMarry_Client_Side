import { Link } from "react-router-dom"


const LoginPage = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <form action="" className=" p-7 bg-red-200 max-w-2xl mx-auto -mt-32 rounded-xl">
        <h1 className="text-4xl text-center font-bold mb-5">Log In User</h1>
        <label>Enter your email</label>
        <input type="email" name='name' placeholder="enter your email" className="mt-1 w-full mb-3 px-3 py-2 rounded-lg text-lg" />
        <label>Enter your passsword</label>
        <input type="email" name='name' placeholder="enter your email" className="mt-1 w-full px-3 py-2 rounded-lg text-lg" />
        <p className=" mt-1">Dont have an account ? Go to <Link className=" font font-semibold text-pink-500" to={'/registration'}>Register Page</Link></p>
        <div className=" flex justify-center">
          <button className="w-full bg-pink-500 text-white px-5 py-2 mt-3 rounded-lg text-lg">LOG IN</button>
        </div>
        <div className=" flex justify-center">
          <button className="w-full bg-purple-500 text-white px-5 py-2 mt-3 rounded-lg text-lg">LOG IN WITH GOOGLE</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage