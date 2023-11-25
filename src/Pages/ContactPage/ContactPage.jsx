import SectionHeader from "../../Components/SectionHeader/SectionHeader"


const ContactPage = () => {
  return (
    <div className=" h-screen
    ">
      <SectionHeader small={'here is the way of contact with us !'} big={'Contact Page'} />

      <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden max-w-4xl mx-auto">
        <div className=" w-full h-full bg-red-200">
          <h1 className=" bg-red-200 p-10 text-3xl font-bold text-center">Our Headquater</h1>
          <img className=" w-full -mt-1 h-full" src="https://i.ibb.co/TLrf4sy/Tenniswood-Inspiration-Photo.jpg" alt="" />
        </div>
        <div className="">
          <form action="" className=" p-5 bg-red-200 h-full">
          <h1 className=" bg-red-200 p-6 text-3xl font-bold text-center">Our Headquater</h1>
            <label htmlFor="">Enter your email</label>
            <input type="text" placeholder="enter your email" className="mt-2 w-full px-3 py-2 text-lg mb-5 rounded-lg" />
            <label htmlFor="">Enter your message</label>
            <input type="text" placeholder="enter your message" className="mt-2 w-full px-3 py-2 text-lg rounded-lg" />
            <div className=" flex justify-center">
            <button className=" px-5 py-2 bg-red-400 text-white mt-3 rounded-lg">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
