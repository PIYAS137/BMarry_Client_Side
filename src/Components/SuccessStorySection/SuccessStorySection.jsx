import SectionHeader from "../SectionHeader/SectionHeader"
import SuccessStoryCard from "./SuccessStoryCard"


const arr = [1, 2, 3, 4]

const SuccessStorySection = () => {
    return (
        <div>
            <SectionHeader small={'our best success storys'} big={'Success Storys'} />
            <div className=" flex flex-wrap justify-between items-center">
                {
                    arr.map((one,i)=><SuccessStoryCard key={i} data={one}/>)
                }
            </div>
        </div>
    )
}

export default SuccessStorySection