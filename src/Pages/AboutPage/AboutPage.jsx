import SectionHeader from "../../Components/SectionHeader/SectionHeader"


const AboutPage = () => {
  return (
    <div>
      <SectionHeader small={'This is all about of our community'} big={'About Us'}/>
      <div className=" max-w-6xl grid grid-cols-1 md:grid-cols-2 mx-auto">
        <div>
          <img src="https://i.ibb.co/WFFyV7g/kisspng-child-royalty-free-clip-art-vector-child-on-earth-5a9e0505597ca7-3021880615203054133665.png" alt="" />
        </div>
        <div className=" p-10 flex flex-col items-center">
          <h1 className=" text-3xl italic rounded-l-lg bg-red-300 py-3 pr-2 text-white w-full text-right font-semibold">All About Us</h1>
          <ul className=" pt-5 text-right w-full">
            <li> We are since 2023</li>
            <li> We work for people</li>
            <li> Our 500+ success story</li>
            <li> Our 500+ achivment</li>
            <li> Our 500+ national award</li>
            <li> Our 500+ most powerful community</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutPage