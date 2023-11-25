import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/FirebaseAuthContext"
import Swal from 'sweetalert2'
import usePublicAxiosHook from "../../hooks/publicAxiosDataFetchHook/usePublicAxiosHook"


const RegistrationPage = () => {
  const { Firebase_SignUp_User, Firebase_Update_User } = useContext(AuthContext)
  const navigate = useNavigate()
  const publicAxios = usePublicAxiosHook()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    Firebase_SignUp_User(data.email, data.pass)
      .then(res => {

        Firebase_Update_User(data.name, data.photo)
          .then(res => {
            const newUser = {
              name: data.name,
              email: data.email,
              photo: data.photo,
              role: '',
              is_premium: false,
            }
            publicAxios.put('/users', newUser)
              .then(res => {
                if (res.data.insertedId) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Register User !",
                    showConfirmButton: false,
                    timer: 2000
                  });
                  navigate('/')
                  reset()
                }
              })
          })
      }).catch(err => {
        console.log(err);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 2000
        });
      })
  }



  return (
    <div className=" h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className=" p-7 bg-purple-200 max-w-2xl mx-auto -mt-32 rounded-xl">
        <h1 className="text-4xl text-center font-bold mb-5">Register User</h1>
        <label>Enter your name</label>
        <input {...register("name", { required: true })} type="text" placeholder="name" className="mt-1 w-full mb-3 px-3 py-2 rounded-lg text-lg" required />
        {errors.name && <small className=" italic text-red-500">Name is required</small>}

        <label>Enter your phoro URL</label>
        <input {...register("photo", { required: true })} type="text" placeholder="photo url" className="mt-1 w-full mb-3 px-3 py-2 rounded-lg text-lg" required />
        {errors.photo && <small className=" italic text-red-500">Photo URL is required</small>}

        <label>Enter your email</label>
        <input {...register("email", { required: true })} type="text" placeholder="email" className="mt-1 w-full mb-3 px-3 py-2 rounded-lg text-lg" required />
        {errors.email && <small className=" italic text-red-500">Email is required</small>}

        <label>Enter your passsword</label>
        <input {...register("pass", {
          minLength: 6,
          required: true,
          maxLength: 20,
          pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/
        })} type="password" placeholder="password" className="mt-1 w-full mb-3 px-3 py-2 rounded-lg text-lg" required />
        {errors.pass?.type === 'required' && <small className=" italic text-red-500">Password is required</small>}
        {errors.pass?.type === 'minLength' && <small className=" italic text-red-500">Password should be upto or equal 6 char</small>}
        {errors.pass?.type === 'maxLength' && <small className=" italic text-red-500">Password should be less or equal 20 char</small>}
        {errors.pass?.type === 'pattern' && <small className=" italic text-red-500">Must contain at least 6Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number</small>}

        <p className=" mt-1">Already have an account ? Go to <Link className=" font font-semibold text-pink-500" to={'/login'}>Login Page</Link></p>
        <div className=" flex justify-center">
          <button className="w-full bg-pink-500 text-white px-5 py-2 mt-3 rounded-lg text-lg">REGISTER</button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationPage