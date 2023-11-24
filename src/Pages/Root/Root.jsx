import { Outlet } from "react-router-dom"
import AppNavbar from "../../Layouts/AppNavbar"
import AppFooter from "../../Layouts/AppFooter"


const Root = () => {
    return (
        <div>
            <AppNavbar />
            <div className=" max-w-[1480px] mx-auto">
                <Outlet />
            </div>
                <AppFooter/>
        </div>
    )
}

export default Root