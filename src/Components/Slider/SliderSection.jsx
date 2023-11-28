import { Link } from "react-router-dom"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const SliderSection = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = false
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )





    return (
        <div ref={sliderRef} className="keen-slider my-5">
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide1" className="carousel-item w-full max-h-[800px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://i.ibb.co/th9b7RZ/couple-love-drinking-coffee-coffee-shop.jpg' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className='mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold  w-full block'>Official Matrimony Service</h1>
                        <p className='hidden md:block font-semibold text-xs md:text-base lg:text-lg mb-5'>Find Bangladeshi to marry from all spheres of life, including NRB members! <br /> Find Bangladeshi to marry from all spheres of life, including NRB members!</p>
                        <div className='flex justify-center'>
                            <Link to={'/biodatas'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-pink-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>View Biodatas</button></Link>
                            <Link to={'/contact'}><button className='text-sm lg:text-base btn btn-outline border px-3 py-2 rounded-lg font-bold text-white'>Contact Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide2" className="carousel-item w-full max-h-[800px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://i.ibb.co/0V6dN8B/hispanic-couple-with-electronic-devices-cafe.jpg' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className='mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold  w-full block'>Official Matrimony Service</h1>
                        <p className='hidden md:block font-semibold text-xs md:text-base lg:text-lg mb-5'>Find Bangladeshi to marry from all spheres of life, including NRB members!<br /> Find Bangladeshi to marry from all spheres of life, including NRB members!</p>
                        <div className='flex justify-center'>
                            <Link to={'/biodatas'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-pink-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>View Biodatas</button></Link>
                            <Link to={'/contact'}><button className='text-sm lg:text-base btn btn-outline border px-3 py-2 rounded-lg font-bold text-white'>Contact Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide3" className="carousel-item w-full max-h-[800px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://i.ibb.co/Zhw7vzd/romantic-couple-outdoors-near-cafe.jpg' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className='mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold  w-full block'>Official Matrimony Service</h1>
                        <p className='hidden md:block font-semibold text-xs md:text-base lg:text-lg mb-5'>Find Bangladeshi to marry from all spheres of life, including NRB members! <br /> Find Bangladeshi to marry from all spheres of life, including NRB members!</p>
                        <div className='flex justify-center'>
                            <Link to={'/biodatas'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-pink-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>View Biodatas</button></Link>
                            <Link to={'/contact'}><button className='text-sm lg:text-base btn btn-outline border px-3 py-2 rounded-lg font-bold text-white'>Contact Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide4" className="carousel-item w-full max-h-[800px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://i.ibb.co/vLXZBR8/low-angle-woman-male-restaurant.jpg' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className='mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold  w-full block'>Official Matrimony Service</h1>
                        <p className='hidden md:block font-semibold text-xs md:text-base lg:text-lg mb-5'>Find Bangladeshi to marry from all spheres of life, including NRB members!<br /> Find Bangladeshi to marry from all spheres of life, including NRB members!</p>
                        <div className='flex justify-center'>
                            <Link to={'/biodatas'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-pink-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>View Biodatas</button></Link>
                            <Link to={'/contact'}><button className='text-sm lg:text-base btn btn-outline border px-3 py-2 rounded-lg font-bold text-white'>Contact Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide5" className="carousel-item w-full max-h-[800px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://i.ibb.co/D1VCLd7/stylish-couple-enjoying-dinner.jpg' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className='mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold  w-full block'>Official Matrimony Service</h1>
                        <p className='hidden md:block font-semibold text-xs md:text-base lg:text-lg mb-5'>Find Bangladeshi to marry from all spheres of life, including NRB members!<br />Find Bangladeshi to marry from all spheres of life, including NRB members!</p>
                        <div className='flex justify-center'>
                            <Link to={'/biodatas'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-pink-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>View Biodatas</button></Link>
                            <Link to={'/contact'}><button className='text-sm lg:text-base btn btn-outline border px-3 py-2 rounded-lg font-bold text-white'>Contact Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide6" className="carousel-item w-full max-h-[800px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://i.ibb.co/cD0cHLy/couple-having-romantic-meeting-restaurant.jpg' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className='mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold  w-full block'>Official Matrimony Service</h1>
                        <p className='hidden md:block font-semibold text-xs md:text-base lg:text-lg mb-5'>Find Bangladeshi to marry from all spheres of life, including NRB members!<br />Find Bangladeshi to marry from all spheres of life, including NRB members!</p>
                        <div className='flex justify-center'>
                            <Link to={'/biodatas'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-pink-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>View Biodatas</button></Link>
                            <Link to={'/contact'}><button className='text-sm lg:text-base btn btn-outline border px-3 py-2 rounded-lg font-bold text-white'>Contact Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderSection