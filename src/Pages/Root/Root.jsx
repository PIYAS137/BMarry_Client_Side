import { Outlet } from "react-router-dom"
import AppNavbar from "../../Layouts/AppNavbar"


const Root = () => {
    return (
        <div>
            <AppNavbar />
            <div className=" max-w-[1480px] mx-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default Root