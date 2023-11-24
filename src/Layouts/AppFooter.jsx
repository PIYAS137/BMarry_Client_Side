import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";



const AppFooter = () => {
    return (
        <div className=" h-[300px] bg-pink-300 mt-20  py-16">
            <div className="grid grid-cols-5 max-w-[1480px] mx-auto ">
                <div className=" col-span-2 space-y-2">
                    <h1>LOGO</h1>
                    <p className=" text-3xl font-black">BMarry</p>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div>
                    <ul>
                        <li className=" text-2xl font-bold">Socials</li>
                        <li className="flex items-center mt-2"><FaFacebookSquare className="mr-2 text-2xl"/> <span className=" text-lg">Facebook</span></li>
                        <li className="flex items-center mt-1"><FaTwitter className="mr-2 text-2xl"/> <span className=" text-lg">Twitter</span></li>
                        <li className="flex items-center mt-1"><FaInstagram className="mr-2 text-2xl"/> <span className=" text-lg">Instagram</span></li>
                        <li className="flex items-center mt-1"><FaLinkedin className="mr-2 text-2xl"/> <span className=" text-lg">LinkedIn</span></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><FaHouseUser className=" text-4xl pt-2"/></li>
                        <li className=" text-lg font-semibold mt-3">556/1, Mirpur-14</li>
                        <li className=" text-lg font-semibold ">Dhaka 1206, Bangladesh</li>,  
                        <li className=" text-lg font-semibold mt-3">556/1, Mirpur-14</li>
                        <li className=" text-lg font-semibold ">Dhaka 1206, Bangladesh</li>                    
                    </ul>
                </div>
                <div>
                <ul>
                        <li><FaPhoneAlt className=" text-4xl pt-2"/></li>
                        <li className=" text-lg font-semibold mt-3">Phone : 01315513173</li>                       
                        <li className=" text-lg font-semibold">Phone : 01315513173</li>                       
                        <li className=" text-lg font-semibold">Phone : 01315513173</li>                       
                        <li className=" text-lg font-semibold">Phone : 01315513173</li>                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AppFooter