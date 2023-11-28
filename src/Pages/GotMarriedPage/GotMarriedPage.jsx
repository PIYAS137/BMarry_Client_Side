import { useContext, useEffect, useState } from "react"
import SectionHeader from "../../Components/SectionHeader/SectionHeader"
import { useForm } from "react-hook-form"
import useSecureAxios from "../../hooks/secureAxiosDataFetchHook/useSecureAxios"
import { AuthContext } from "../../Context/FirebaseAuthContext"
import Swal from "sweetalert2"

const GotMarriedPage = () => {

    const secureAxios = useSecureAxios()
    const [userData, setUserData] = useState({})
    const { user } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm()



    useEffect(() => {
        secureAxios.get(`/biodata/${user?.email}`)
            .then(res => {
                setUserData(res.data)
            })
    }, [])


    useEffect(() => {
        setValue("myid", userData.biodata_id)
    }, [userData])

    const onSubmit = (data) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, do it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const dataThatSend = {
                    selfBiodataId: userData?.biodata_id,
                    partnerBiodataId: data.partnerId,
                    coupleImageLink: data.imglink,
                    successStory: data.story,
                    selfName: userData?.name,
                    rating: data.rating,
                    marriageDate: data.date,
                    selfEmail: userData?.email
                }
                secureAxios.post('/success', dataThatSend)
                    .then(res => {
                        if (res.data.message === "PartnerNotFount") {
                            Swal.fire({
                                title: "Partner Not Found",
                                text: "Your partner is out of our community",
                                icon: "error"
                            });
                        }
                        if (res.data.message === "AlreadyAdded") {
                            Swal.fire({
                                title: "Already Added",
                                text: "You already submit your story",
                                icon: "warning"
                            });
                        }
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Successfully Added",
                                text: "Congratulation Again",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    }


    return (
        <div className=" mb-10">
            <SectionHeader small={'Congratulation couple !'} big={'Got Married Page'} />
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className=" bg-red-200 rounded-xl p-5 max-w-2xl mx-auto">
                    <h1 className=" text-3xl text-center font-semibold my-5">Congratulation Couple</h1>
                    <small>Self Biodata Id</small>
                    <input {...register("myid", { required: true })} type="number" className="border border-gray-400 px-3 py-2 text-lg rounded-lg w-full mb-3" disabled />
                    {errors.myid && <span className="block -mt-3 text-red-500">This field is required</span>}

                    <small>Partner Biodata Id</small>
                    <input {...register("partnerId", { required: true })} type="number" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter partner biodata id" />
                    {errors.partnerId && <span className="block -mt-3 text-red-500">This field is required</span>}

                    <small>Write Rating out of 5 </small>
                    <input
                        max={5}
                        min={1}
                        {...register("rating", { required: true })}
                        type="number"
                        className="px-3 py-2 text-lg rounded-lg w-full mb-3"
                        placeholder="Rating (1 - 5)"
                    />

                    <small>Couple Image Link</small>
                    <input {...register("imglink", { required: true })} type="text" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter couple image URL" />
                    {errors.imglink && <span className="block -mt-3 text-red-500">This field is required</span>}

                    <small>marriage Date </small>
                    <input {...register("date", { required: true })} type="date" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" />
                    {errors.date && <span className="block -mt-3 text-red-500">This field is required</span>}

                    <small>Yours Success Story</small>
                    <textarea rows={5} {...register("story", { required: true })} type="text" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Tell Us Your Stroy" />
                    {errors.story && <span className="block -mt-3 text-red-500">This field is required</span>}

                    <div className=" flex justify-center">
                        <button className=" bg-blue-400 text-white px-7 py-2 rounded-lg">Submit Story</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GotMarriedPage