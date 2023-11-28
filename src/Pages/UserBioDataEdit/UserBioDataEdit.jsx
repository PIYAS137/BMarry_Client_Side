import { useForm } from "react-hook-form"
import useSecureAxios from "../../hooks/secureAxiosDataFetchHook/useSecureAxios";
import Swal from "sweetalert2";
import usePublicAxiosHook from "../../hooks/publicAxiosDataFetchHook/usePublicAxiosHook";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/FirebaseAuthContext";
import { useNavigate } from "react-router-dom";


const IMGBB_URL = `https://api.imgbb.com/1/upload?&key=${import.meta.env.VITE_IMGBB_SECURITY_KEY}`

const UserBioDataEdit = () => {

  const [userData, setUserData] = useState({})
  const { user } = useContext(AuthContext)
  const secureAxios = useSecureAxios()
  const publicAxios = usePublicAxiosHook()
  const navigate = useNavigate()

  useEffect(() => {
    secureAxios.get(`/biodata/${user?.email}`)
      .then(res => {
        setUserData(res.data)
      })
  }, [user])

  const calculateAge = (n) => {
    const birthDate = new Date(n);
    const today = new Date();
    let ageInYears = today.getFullYear() - birthDate.getFullYear();
    const birthdayPassedAway = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    if (!birthdayPassedAway) {
      ageInYears--;
    }
    return ageInYears
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()

  useEffect(()=>{
    setValue('name',userData?.name || user?.displayName);
    setValue('age',userData?.age || '');
    setValue('image',userData?.biodata_image || user?.photoURL || '');
    setValue('gender',userData?.gender || 'male');
    setValue('date',userData?.birth || '');
    setValue('height',userData?.height || 'medium');
    setValue('weight',userData?.weight || 'medium');
    setValue('race',userData?.race || 'Khan');
    setValue('occupation',userData?.occupation || 'employee');
    setValue('father',userData?.father_name || '');
    setValue('mother',userData?.mother_name || '');
    setValue('permanent',userData?.parmanent_address || 'Dhaka');
    setValue('present',userData?.present_address || 'Dhaka');
    setValue('partnerage',userData?.expected_age || 25);
    setValue('partnerheight',userData?.expected_height || 'medium');
    setValue('partnerweight',userData?.expected_weight || 'medium');
    setValue('email',userData?.email || '');
    setValue('phonenumber',userData?.phone || '');
  },[userData,setValue])

  const onSubmit = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sure!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const imageFile = { image: data.image[0] };
        const res = await publicAxios.post(IMGBB_URL, imageFile, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        const imageUrl = res.data.data.display_url;
        const calculatedFinalAge = calculateAge(data.date)
        const newBioData = {
          name: data.name,
          age: calculatedFinalAge,
          biodata_image: imageUrl,
          gender: data.gender,
          birth: data.date,
          height: data.height,
          weight: data.weight,
          race: data.race,
          occupation: data.occupation,
          father_name: data.father,
          mother_name: data.mother,
          parmanent_address: data.permanent,
          present_address: data.present,
          expected_age: data.partnerage,
          expected_height: data.partnerheight,
          expected_weight: data.partnerweight,
          email: user.email,
          phone: data.phonenumber
        };

        secureAxios.put(`/biodata/${user.email}`, newBioData)
          .then(res => {
            console.log(res);
            if (res.data.modifiedCount > 0 || res.data.insertedId) {
              Swal.fire({
                title: "Successfully Done!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              navigate('/dashboard/viewdata')
            }
          })
      }
    });

  }



  return (
    <div className=" py-10">
      <form onSubmit={handleSubmit(onSubmit)} className=" bg-blue-200 rounded-xl p-5 max-w-2xl mx-auto">
        <h1 className=" text-2xl font-semibold my-3 text-center">Edit Your Biodata</h1>
        <small>Enter Name</small>
        <input {...register("name", { required: true })} className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter Your Name" />
        {errors.name && <span className="block -mt-3 text-red-500">This field is required</span>}
        
        <small>Enter Photo URL</small>
        <input {...register("image",{required:true})} className="bg-blue-400 text-white px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" type="file" />
        {errors.image && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Select your Gender</small>
        <select className=" px-3 py-2 text-lg rounded-lg w-full mb-3"  {...register("gender", { required: true })}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <span className="block -mt-3 text-red-500">This field is required</span>}


        <small>Enter your birthday</small>
        <input {...register("date", { required: true })} type="date" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.date && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Enter your Height</small>
        <select className=" px-3 py-2 text-lg rounded-lg w-full mb-3"  {...register("height", { required: true })}>
          <option value="medium">Medium</option>
          <option value="tall">Tall</option>
          <option value="short">Short</option>
        </select>
        {errors.height && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Select your Weight</small>
        <select className=" px-3 py-2 text-lg rounded-lg w-full mb-3"  {...register("weight", { required: true })}>
          <option value="slim">Slim Weight</option>
          <option value="medium">Medium Weight</option>
          <option value="heavy">Heavy Weight</option>
          <option value="too heavy">Too Heavy Weight</option>
        </select>
        {errors.weight && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Select your Race</small>
        <select className=" px-3 py-2 text-lg rounded-lg w-full mb-3"  {...register("race", { required: true })}>
          <option value="Khan">Khan</option>
          <option value="Sheikh">Sheikh</option>
          <option value="Gazi">Gazi</option>
          <option value="Talukder">Talukder</option>
          <option value="Mirza">Mirza</option>
          <option value="Pathan">Pathan</option>
          <option value="Mollah">Mollah</option>
          <option value="Dewan">Dewan</option>
          <option value="Shah">Shah</option>
          <option value="Sikdar">Sikdar</option>
          <option value="Jawader">Jawader</option>
          <option value="Lashkar">Lashkar</option>
          <option value="Gong">Gong</option>
          <option value="Sarker">Sarker</option>
          <option value="Pramanik">Pramanik</option>
          <option value="Roy">Roy</option>
          <option value="Das">Das</option>
        </select>
        {errors.race && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Select Your Occupation</small>
        <select className=" px-3 py-2 text-lg rounded-lg w-full mb-3"  {...register("occupation", { required: true })}>
          <option value="employee">Employee</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        {errors.occupation && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Enter your fathers name</small>
        <input {...register("father", { required: true })} type="text" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your father name" />
        {errors.father && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Enter your mothers name</small>
        <input {...register("mother", { required: true })} type="text" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your mother name" />
        {errors.mother && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Enter Parmanent Division</small>
        <select {...register("permanent", { required: true })} className=" px-3 py-2 text-lg rounded-lg w-full mb-3">
          <option value={'Dhaka'}>Dhaka</option>
          <option value={'Barishal'}>Barishal</option>
          <option value={'Chattogram'}>Chattogram</option>
          <option value={'Khulna'}>Khulna</option>
          <option value={'Rajshahi'}>Rajshahi</option>
          <option value={'Rangpur'}>Rangpur</option>
          <option value={'Mymensingh'}>Mymensingh</option>
          <option value={'Sylhet'}>Sylhet</option>
        </select>
        {errors.permanent && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Enter Present Division</small>
        <select {...register("present", { required: true })} className=" px-3 py-2 text-lg rounded-lg w-full mb-3">
          <option value={'Dhaka'}>Dhaka</option>
          <option value={'Barishal'}>Barishal</option>
          <option value={'Chattogram'}>Chattogram</option>
          <option value={'Khulna'}>Khulna</option>
          <option value={'Rajshahi'}>Rajshahi</option>
          <option value={'Rangpur'}>Rangpur</option>
          <option value={'Mymensingh'}>Mymensingh</option>
          <option value={'Sylhet'}>Sylhet</option>
        </select>
        {errors.present && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Expected Partner Age</small>
        <input {...register("partnerage", { required: true })} type="number" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />
        {errors.partnerage && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Expected Partner Height </small>
        <select className=" px-3 py-2 text-lg rounded-lg w-full mb-3"  {...register("partnerheight", { required: true })}>
          <option value="medium">Medium</option>
          <option value="tall">Tall</option>
          <option value="short">Short</option>
        </select>
        {errors.partnerheight && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>Expected Partner Weight</small>
        <select className=" px-3 py-2 text-lg rounded-lg w-full mb-3"  {...register("partnerweight", { required: true })}>
          <option value="slim">Slim Weight</option>
          <option value="medium">Medium Weight</option>
          <option value="heavy">Heavy Weight</option>
          <option value="too heavy">Too Heavy Weight</option>
        </select>
        {errors.partnerweight && <span className="block -mt-3 text-red-500">This field is required</span>}

        <small>My Email</small>
        <input defaultValue={user.email} disabled {...register("myemail")} type="email" className="border border-gray-400 px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your photo URL" />

        <small>Phone Number</small>
        <input {...register("phonenumber", { required: true })} type="number" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter your phone number" />
        {errors.phonenumber && <span className="block -mt-3 text-red-500">This field is required</span>}

        <input className="px-5 py-2 cursor-pointer bg-blue-400 text-white rounded-lg w-full mb-3" type="submit" />
      </form>
    </div>
  )
}

export default UserBioDataEdit