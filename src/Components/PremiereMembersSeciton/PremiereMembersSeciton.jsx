
import useGetSixPremiumCard from "../../hooks/getSixPremiumMembers/useGetSixPremiumCard"
import SectionHeader from "../SectionHeader/SectionHeader"
import OnePremiereMemberCard from "./OnePremiereMemberCard"


const PremiereMembersSeciton = () => {

  const [getPremiumSix] = useGetSixPremiumCard()



  return (
    <div>
      <SectionHeader small={"Lets find out your partner"} big={"Premium Members"} />
      <div className=" flex flex-wrap justify-around">
          {
            getPremiumSix?.map((one)=><OnePremiereMemberCard key={one._id} data={one}/>)
          }
        </div>
    </div>
  )
}

export default PremiereMembersSeciton