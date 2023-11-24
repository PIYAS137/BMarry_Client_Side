import HowWebWorkSection from "../../Components/HowWebWorkSection/HowWebWorkSection"
import PremiereMembersSeciton from "../../Components/PremiereMembersSeciton/PremiereMembersSeciton"
import SliderSection from "../../Components/Slider/SliderSection"
import SuccessCounter from "../../Components/SuccessCounterSection/SuccessCounter"


const HomePage = () => {
  return (
    <div>
        <SliderSection/>
        <PremiereMembersSeciton/>
        <HowWebWorkSection/>
        <SuccessCounter/>
    </div>
  )
}

export default HomePage