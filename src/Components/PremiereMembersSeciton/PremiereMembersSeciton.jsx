
import SectionHeader from "../SectionHeader/SectionHeader"
import OnePremiereMemberCard from "./OnePremiereMemberCard"


const PremiereMembersSeciton = () => {

  const arr = [1, 2, 3, 4, 5, 6]



  return (
    <div>
      <SectionHeader small={"Lets find out your partner"} big={"Premium Members"} />
      <div className=" flex flex-wrap justify-around">
          {
            arr.map((one,i)=><OnePremiereMemberCard key={i} data={one}/>)
          }
        </div>
    </div>
  )
}

export default PremiereMembersSeciton