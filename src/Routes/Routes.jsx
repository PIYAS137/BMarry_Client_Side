import { createBrowserRouter } from 'react-router-dom'
import Root from '../Pages/Root/Root'
import HomePage from '../Pages/HomePage/HomePage'
import BioDataPage from '../Pages/BioDataPage/BioDataPage'
import AboutPage from '../Pages/AboutPage/AboutPage'
import ContactPage from '../Pages/ContactPage/ContactPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import RegistrationPage from '../Pages/RegistrationPage/RegistrationPage'
import DashBoard from '../Layouts/DashBoard'
import UserDashboard from '../Pages/UserDashboard/UserDashboard'
import BioDataDetailsPage from '../Pages/BioDataPage/BioDataDetailsPage'
import PaymentPage from '../Pages/PaymentPage/PaymentPage'
import UserBioDataEdit from '../Pages/UserBioDataEdit/UserBioDataEdit'
import UserBioDataView from '../Pages/UserBioDataView/UserBioDataView'
import MyContactRequest from '../Pages/MyContactRequest/MyContactRequest'
import FavBioDataPage from '../Pages/FavBioDataPage/FavBioDataPage'
import AdminDashboardPage from '../Pages/AdminDashboardPage/AdminDashboardPage'
import ManageUserPage from '../Pages/ManageUserPage/ManageUserPage'
import ApprovePremiumPage from '../Pages/ApprovePremiumPage/ApprovePremiumPage'
import ApproveContactReqPage from '../Pages/ApproveContactReqPage/ApproveContactReqPage'
import GotMarriedPage from '../Pages/GotMarriedPage/GotMarriedPage'
import UsersSuccessStoryPage from '../Pages/UsersSuccessStoryPage/UsersSuccessStoryPage'
import UserPrivateRoutes from '../Private/UserPrivateRoutes/UserPrivateRoutes'
import AdminPrivateRoutes from '../Private/AdminPrivateRoutes/AdminPrivateRoutes'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/biodatas',
                loader: ()=>fetch('https://backend-side-ten.vercel.app/biodatas'),
                element: <BioDataPage />
            },
            {
                path: '/biodatas/:sid',
                loader:({params})=>fetch(`https://backend-side-ten.vercel.app/oneBio/${params.sid}`),
                element: <UserPrivateRoutes><BioDataDetailsPage /></UserPrivateRoutes>
            },
            {
                path: '/payment/:sid',
                element:<PaymentPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/contact',
                element: <ContactPage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/registration',
                element: <RegistrationPage />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <UserPrivateRoutes><DashBoard /></UserPrivateRoutes>,
        children: [
            // --------------admin routes--------------
            {
                path: 'adminDashboard',
                element: <AdminPrivateRoutes><AdminDashboardPage /></AdminPrivateRoutes>
            },
            {
                path: 'adminManageUser',
                element: <AdminPrivateRoutes><ManageUserPage /></AdminPrivateRoutes>
            },
            {
                path: 'adminApprovePrimium',
                element: <AdminPrivateRoutes><ApprovePremiumPage /></AdminPrivateRoutes>
            },
            {
                path: 'adminApproveContactReq',
                element: <AdminPrivateRoutes><ApproveContactReqPage /></AdminPrivateRoutes>
            },
            {
                path:'adminSuccessStory',
                element:<AdminPrivateRoutes><UsersSuccessStoryPage/></AdminPrivateRoutes>
            },
            // --------------admin routes--------------
            {
                path: 'userDashboard',
                element: <UserPrivateRoutes><UserDashboard /></UserPrivateRoutes>,
            },
            {
                path: 'editdata',
                element: <UserPrivateRoutes><UserBioDataEdit /></UserPrivateRoutes>
            },
            {
                path: 'viewdata',
                element: <UserPrivateRoutes><UserBioDataView /></UserPrivateRoutes>
            },
            {
                path: 'mycontactreq',
                element: <UserPrivateRoutes><MyContactRequest /></UserPrivateRoutes>
            },
            {
                path: 'favbiodata',
                element: <UserPrivateRoutes><FavBioDataPage /></UserPrivateRoutes>
            },
            {
                path:'married',
                element: <UserPrivateRoutes><GotMarriedPage/></UserPrivateRoutes>
            }
        ]
    }
])

export default router;