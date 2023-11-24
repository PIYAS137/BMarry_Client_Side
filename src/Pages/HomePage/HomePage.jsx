import HowWebWorkSection from "../../Components/HowWebWorkSection/HowWebWorkSection"
import PremiereMembersSeciton from "../../Components/PremiereMembersSeciton/PremiereMembersSeciton"
import SliderSection from "../../Components/Slider/SliderSection"
import SuccessCounter from "../../Components/SuccessCounterSection/SuccessCounter"
import SuccessStorySection from "../../Components/SuccessStorySection/SuccessStorySection"


const HomePage = () => {
  return (
    <div>
        <SliderSection/>
        <PremiereMembersSeciton/>
        <HowWebWorkSection/>
        <SuccessCounter/>
        <SuccessStorySection/>
    </div>
  )
}

export default HomePage