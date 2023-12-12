import Swal from "sweetalert2";
import SectionHeader from "../../Components/SectionHeader/SectionHeader"
import emailjs from '@emailjs/browser';
import { useRef } from "react";



const ContactPage = () => {

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default1', 'template_wpuri8h', e.currentTarget, 'R-PIU8JgrSoL-sOGO')
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Piyas Receive Your Response. Let check your email...!",
          showConfirmButton: false,
          timer: 2000
        });
      }, (error) => {
        console.log(error.text);
      });
    e.currentTarget.reset()
  }





  return (
    <div className="  px-3 md:px-0">
      <SectionHeader small={'here is the way of contact with us !'} big={'Contact Page'} />

      <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden max-w-4xl mx-auto">
        <div className=" w-full h-full bg-red-200">
          <h1 className=" bg-red-200 p-10 text-3xl font-bold text-center">Our Headquater</h1>
          <img className=" w-full -mt-1 h-full" src="https://i.ibb.co/TLrf4sy/Tenniswood-Inspiration-Photo.jpg" alt="" />
        </div>
        <div className="">
          <form ref={form} className='dark:bg-slate-600 bg-green-200 p-5 h-full pt-10 md:pt-16 flex items-center flex-col' onSubmit={sendEmail}>
            <h1 className=' text-2xl mb-4 font-black text-green-600'>Contact With Us</h1>
            <div className=' w-full'>
              <input className='w-full p-2 rounded-lg' placeholder='Enter Your name' type="text" name="from_name" />
            </div>
            <div className=' w-full mt-2'>
              <input className='w-full p-2 rounded-lg' placeholder='Enter your email' type="email" name="from_email" />
            </div>
            <div className=' w-full mt-2'>
              <textarea className='w-full p-2 rounded-lg' rows={6} placeholder='Enter your message' name="message" />
            </div>
            <div>
              <input className='border border-green-500 py-2 px-7 rounded-lg bg-white font-bold text-green-600' type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
