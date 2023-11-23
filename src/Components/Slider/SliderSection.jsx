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
            {/* <div className="keen-slider__slide number-slide1">
                <div id="slide1" className="carousel-item relative w-full max-h-[700px] bg-red-500 rounded-xl overflow-hidden">
                    <img className=" w-full h-full object-cover" src='https://c0.wallpaperflare.com/path/785/119/722/blur-bowl-child-date-fruits-00629ad0502ff75118cd6a0903d7ea87.jpg' className="w-full object-cover" />
                    <div className="p-8 md:p-16 flex flex-col justify-center absolute left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full">
                        <div className=' text-white'>
                            <h1 className='mb-4 text-2xl md:text-4xl lg:text-6xl font-extrabold md:max-w-[35%]'>Share A Bite With Loving People</h1>
                            <p className='font-semibold text-xs md:text-base lg:text-lg mb-5'>Connecting people through food, one shared bite at a time. <br /> Join our food-sharing community and make new friends.</p>
                            <div className=''>
                                <Link to={'/availablefood'}><button className='text-xs lg:text-base bg-red-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Discover Food</button></Link>
                                <Link to={'/addfood'}><button className='text-xs lg:text-base btn btn-outline border-white text-white'>Donate Food</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-3">
                        <a href="#slide6" className="btn btn-circle md:p-4 rounded-lg mr-4 bg-black opacity-50 text-white border-none">❮</a>
                        <a href="#slide2" className="btn btn-circle md:p-4 rounded-lg bg-orange-600 hover:bg-orange-700 border-none text-white">❯</a>
                    </div>
                </div>
            </div> */}
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide1" className="carousel-item w-full max-h-[700px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://c0.wallpaperflare.com/path/785/119/722/blur-bowl-child-date-fruits-00629ad0502ff75118cd6a0903d7ea87.jpg' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className='mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold  w-full block'>Share A Bite With Loving People</h1>
                        <p className='hidden md:block font-semibold text-xs md:text-base lg:text-lg mb-5'>Connecting people through food, one shared bite at a time. <br /> Join our food-sharing community and make new friends.</p>
                        <div className='flex justify-center'>
                            <Link to={'/availablefood'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-pink-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Discover Food</button></Link>
                            <Link to={'/addfood'}><button className='text-sm lg:text-base btn btn-outline border px-3 py-2 rounded-lg font-bold text-white'>Donate Food</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide2" className="carousel-item w-full max-h-[700px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://c0.wallpaperflare.com/path/785/119/722/blur-bowl-child-date-fruits-00629ad0502ff75118cd6a0903d7ea87.jpg' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className='mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold  w-full block'>Share A Bite With Loving People</h1>
                        <p className='hidden md:block font-semibold text-xs md:text-base lg:text-lg mb-5'>Connecting people through food, one shared bite at a time. <br /> Join our food-sharing community and make new friends.</p>
                        <div className='flex justify-center'>
                            <Link to={'/availablefood'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-pink-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Discover Food</button></Link>
                            <Link to={'/addfood'}><button className='text-sm lg:text-base btn btn-outline border px-3 py-2 rounded-lg font-bold text-white'>Donate Food</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide3" className="carousel-item w-full max-h-[700px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://c0.wallpaperflare.com/path/785/119/722/blur-bowl-child-date-fruits-00629ad0502ff75118cd6a0903d7ea87.jpg' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className='mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold  w-full block'>Share A Bite With Loving People</h1>
                        <p className='hidden md:block font-semibold text-xs md:text-base lg:text-lg mb-5'>Connecting people through food, one shared bite at a time. <br /> Join our food-sharing community and make new friends.</p>
                        <div className='flex justify-center'>
                            <Link to={'/availablefood'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-pink-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Discover Food</button></Link>
                            <Link to={'/addfood'}><button className='text-sm lg:text-base btn btn-outline border px-3 py-2 rounded-lg font-bold text-white'>Donate Food</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide4" className="carousel-item w-full max-h-[700px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://c0.wallpaperflare.com/path/785/119/722/blur-bowl-child-date-fruits-00629ad0502ff75118cd6a0903d7ea87.jpg' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className='mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold  w-full block'>Share A Bite With Loving People</h1>
                        <p className='hidden md:block font-semibold text-xs md:text-base lg:text-lg mb-5'>Connecting people through food, one shared bite at a time. <br /> Join our food-sharing community and make new friends.</p>
                        <div className='flex justify-center'>
                            <Link to={'/availablefood'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-pink-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Discover Food</button></Link>
                            <Link to={'/addfood'}><button className='text-sm lg:text-base btn btn-outline border px-3 py-2 rounded-lg font-bold text-white'>Donate Food</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide5" className="carousel-item w-full max-h-[700px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://c0.wallpaperflare.com/path/785/119/722/blur-bowl-child-date-fruits-00629ad0502ff75118cd6a0903d7ea87.jpg' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className='mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold  w-full block'>Share A Bite With Loving People</h1>
                        <p className='hidden md:block font-semibold text-xs md:text-base lg:text-lg mb-5'>Connecting people through food, one shared bite at a time. <br /> Join our food-sharing community and make new friends.</p>
                        <div className='flex justify-center'>
                            <Link to={'/availablefood'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-pink-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Discover Food</button></Link>
                            <Link to={'/addfood'}><button className='text-sm lg:text-base btn btn-outline border px-3 py-2 rounded-lg font-bold text-white'>Donate Food</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide6" className="carousel-item w-full max-h-[700px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://c0.wallpaperflare.com/path/785/119/722/blur-bowl-child-date-fruits-00629ad0502ff75118cd6a0903d7ea87.jpg' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className='mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold  w-full block'>Share A Bite With Loving People</h1>
                        <p className='hidden md:block font-semibold text-xs md:text-base lg:text-lg mb-5'>Connecting people through food, one shared bite at a time. <br /> Join our food-sharing community and make new friends.</p>
                        <div className='flex justify-center'>
                            <Link to={'/availablefood'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-pink-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Discover Food</button></Link>
                            <Link to={'/addfood'}><button className='text-sm lg:text-base btn btn-outline border px-3 py-2 rounded-lg font-bold text-white'>Donate Food</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderSection