import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/FirebaseAuthContext";
import Swal from "sweetalert2";
import usePublicAxiosHook from "../../hooks/publicAxiosDataFetchHook/usePublicAxiosHook";


const LoginPage = () => {

  const { Firebase_Login_User, Firebase_Google_Login } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const navigate = useNavigate()
  const location = useLocation()
  const publicAxios = usePublicAxiosHook()


  const handleSubmitLoginUser = (event) => {
    event.preventDefault();
    Firebase_Login_User(email, pass)
      .then(res => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfull !",
          showConfirmButton: false,
          timer: 2000
        });
        navigate(location?.state ? location?.state : '/')
        setEmail('')
        setPass('')
      }).catch(err => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 2000
        });
      })
  }

  const handleClickGoogleLogin = () => {
    Firebase_Google_Login()
      .then(res => {
        const newUser = {
          name: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
          role: '',
          is_premium: false,
        }
        publicAxios.put('/users', newUser)
          .then(res => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Login Successfull !",
              showConfirmButton: false,
              timer: 2000
            });
            navigate(location?.state ? location?.state : '/')
          })
      }).catch()
  }



  return (
    <div className=" h-screen flex justify-center items-center">
      <form onSubmit={handleSubmitLoginUser} className=" p-7 bg-red-200 max-w-2xl mx-auto -mt-32 rounded-xl">
        <h1 className="text-4xl text-center font-bold mb-5">Log In User</h1>
        <label>Enter your email</label>
        <input required onChange={e => setEmail(e.target.value)} value={email} type="email" name='email' placeholder="enter your email" className="mt-1 w-full mb-3 px-3 py-2 rounded-lg text-lg" />
        <label>Enter your passsword</label>
        <input required onChange={e => setPass(e.target.value)} value={pass} type="password" name='password' placeholder="enter your password" className="mt-1 w-full px-3 py-2 rounded-lg text-lg" />
        <p className=" mt-1">Dont have an account ? Go to <Link state={location?.state} className=" font font-semibold text-pink-500" to={'/registration'}>Register Page</Link></p>
        <div className=" flex justify-center">
          <button className="w-full bg-pink-500 text-white px-5 py-2 mt-3 rounded-lg text-lg">LOG IN</button>
        </div>
        <div className=" flex justify-center">
          <button onClick={handleClickGoogleLogin} className="w-full bg-purple-500 text-white px-5 py-2 mt-3 rounded-lg text-lg">LOG IN WITH GOOGLE</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage