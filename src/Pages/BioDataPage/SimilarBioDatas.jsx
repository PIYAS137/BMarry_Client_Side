
const SimilarBioDatas = () => {


    const arr=[1,2,3,5,6,6]



  return (
    <div className=" ">
        <div>
            <h1 className=" text-2xl text-center font-semibold">Similar Biodatas</h1>
            <hr className="bold  bg-red-300 h-[2px] my-5"/>
            <div>
                {
                    arr.map((one,i)=>{
                        return(
                            <div key={i} className=" flex mb-2 items-center space-x-5 w-full
                            ">

                                <div className=" h-[150px] rounded-lg overflow-hidden">
                                    <img className=" h-full" src="https://i.ibb.co/F60MHS9/IMG-20220219-WA0053.jpg" alt="" />
                                </div>
                                <div>
                                    <p className=" font-semibold">Name : S M Piyas Mahamude Alif</p>
                                    <p className=" font-semibold">Age : 22</p>
                                    <p className=" font-semibold">Occupation : Student</p>
                                    <p className=" font-semibold">Permanent Division : Dhaka</p>
                                </div>
                                <div className="flex-1  flex justify-end">
                                    <button className=" bg-blue-400 text-white px-5 py-2 rounded-lg">View Profile</button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default SimilarBioDatas