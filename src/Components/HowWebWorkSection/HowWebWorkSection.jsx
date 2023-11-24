import SectionHeader from "../SectionHeader/SectionHeader"
import WorkProcess from "./WorkProcess"


const HowWebWorkSection = () => {
    return (
        <div>
            <SectionHeader small={"this is how you use our website!"} big={'How Website Work'} />
            <div className=" flex flex-col-reverse lg:flex-row">
                <div className="flex justify-center items-center flex-1 ">
                    <WorkProcess />
                </div>
                <div className="flex justify-center items-center flex-1 pb-10 lg:pb-0">
                    <img className="w-full max-w-lg " src="https://i.ibb.co/GHcSTRp/kisspng-business-process-management-outsourcing-pardot-rh-5b301164e48a95-3604194715298768369361.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HowWebWorkSection