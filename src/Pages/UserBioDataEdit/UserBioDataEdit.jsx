import { useForm } from "react-hook-form"

const UserBioDataEdit = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }



  return (
    <div className=" py-10">
      <form onSubmit={handleSubmit(onSubmit)} className=" bg-blue-200 rounded-xl p-5 max-w-xl mx-auto">
        <h1 className=" text-2xl font-semibold my-3 text-center">Edit Your Biodata</h1>
        <small>Enter Name</small>
        <input {...register("name", { required: true })} className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter Your Name" />
        {errors.name && <span className="block -mt-3 text-red-500">This field is required</span>}
        <small>Enter Photo URL</small>
        <input {...register("photoUrl", { required: true })} className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.photoUrl && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Enter your birthday</small>
        <input {...register("date", { required: true })} type="date" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.date && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Enter your birthday</small>
        <input {...register("date", { required: true })} type="date" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.date && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Enter your Height in Feet</small>
        <input {...register("height", { required: true })} type="number" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.height && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Enter your Weight in KG</small>
        <input {...register("weight", { required: true })} type="number" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.weight && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Your Age (Auto generate)</small>
        <input {...register("age", { required: true })} type="number" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.age && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Enter Your Occupation</small>
        <input {...register("occupation", { required: true })} type="number" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.occupation && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Enter your fathers name</small>
        <input {...register("father", { required: true })} type="number" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.father && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Enter your mothers name</small>
        <input {...register("mother", { required: true })} type="number" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.mother && <span className="block -mt-3 text-red-500">This field is required</span>}
        
        <small>Enter Parmanent Division</small>
        <select {...register("permanent",{required:true})} className=" px-3 py-2 text-lg rounded-lg w-full mb-3">
          <option value="female">Dhaka</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        {errors.permanent && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Enter Present Division</small>
        <select {...register("permanent",{required:true})} className=" px-3 py-2 text-lg rounded-lg w-full mb-3">
          <option value="female">Dhaka</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        {errors.permanent && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Expected Partner Age</small>
        <input {...register("partnerage", { required: true })} type="number" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.partnerage && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Expected Partner Height in Feet</small>
        <input {...register("partnerheight", { required: true })} type="number" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.partnerheight && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Expected Partner Weight in Feet</small>
        <input {...register("partnerweight", { required: true })} type="number" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.partnerweight && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>My Email</small>
        <input disabled {...register("myemail", { required: true })} type="number" className="border border-gray-400 px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.myemail && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Phone Number</small>
        <input disabled {...register("phonenumber", { required: true })} type="number" className="border border-gray-400 px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.phonenumber && <span className="block -mt-3 text-red-500">This field is required</span>}


        <input className="px-5 py-2 bg-blue-400 text-white rounded-lg w-full mb-3" type="submit" value={"Publish"} />
      </form>
    </div>
  )
}

export default UserBioDataEdit