import SectionHeader from "../../Components/SectionHeader/SectionHeader"
import { useForm } from "react-hook-form"

const GotMarriedPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <div>
            <SectionHeader small={'Congratulation couple !'} big={'Got Married Page'} />
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className=" bg-red-200 rounded-xl p-5 max-w-2xl mx-auto">
                    <h1 className=" text-3xl text-center font-semibold my-5">Congratulation Couple</h1>
                    <small>Self Biodata Id</small>
                    <input value={'123'} {...register("myid", { required: true })} type="number" className="border border-gray-400 px-3 py-2 text-lg rounded-lg w-full mb-3" disabled />
                    {errors.myid && <span className="block -mt-3 text-red-500">This field is required</span>}

                    <small>Partner Biodata Id</small>
                    <input {...register("partnerId", { required: true })} type="number" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter partner biodata id" />
                    {errors.partnerId && <span className="block -mt-3 text-red-500">This field is required</span>}

                    <small>Couple Image Link</small>
                    <input {...register("imglink", { required: true })} type="text" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter couple image URL" />
                    {errors.imglink && <span className="block -mt-3 text-red-500">This field is required</span>}

                    <small>Yours Success Story</small>
                    <textarea rows={5} {...register("story", { required: true })} type="text" className=" px-3 py-2 text-lg rounded-lg w-full mb-3" placeholder="Enter couple image URL" />
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