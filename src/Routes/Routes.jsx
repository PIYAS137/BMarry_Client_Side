import { createBrowserRouter } from 'react-router-dom'
import Root from '../Pages/Root/Root'
import HomePage from '../Pages/HomePage/HomePage'
import BioDataPage from '../Pages/BioDataPage/BioDataPage'
import AboutPage from '../Pages/AboutPage/AboutPage'
import ContactPage from '../Pages/ContactPage/ContactPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import RegistrationPage from '../Pages/RegistrationPage/RegistrationPage'
import DashBoard from '../Layouts/DashBoard'
import UserDashboard from '../Pages/Root/UserDashboard/UserDashboard'
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
                element: <BioDataPage />
            },
            {
                path: '/biodatas/sid',
                element: <BioDataDetailsPage />
            },
            {
                path: '/payment',
                element: <PaymentPage />
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
        element: <DashBoard />,
        children: [
            // --------------admin routes--------------
            {
                path: 'adminDashboard',
                element: <AdminDashboardPage />
            },
            {
                path: 'adminManageUser',
                element: <ManageUserPage />
            },
            {
                path: 'adminApprovePrimium',
                element: <ApprovePremiumPage />
            },
            {
                path: 'adminApproveContactReq',
                element: <ApproveContactReqPage />
            },
            {
                path:'adminSuccessStory',
                element:<UsersSuccessStoryPage/>
            },
            // --------------admin routes--------------
            {
                path: 'userDashboard',
                element: <UserDashboard />,
            },
            {
                path: 'editdata',
                element: <UserBioDataEdit />
            },
            {
                path: 'viewdata',
                element: <UserBioDataView />
            },
            {
                path: 'mycontactreq',
                element: <MyContactRequest />
            },
            {
                path: 'favbiodata',
                element: <FavBioDataPage />
            },
            {
                path:'married',
                element:<GotMarriedPage/>
            }
        ]
    }
])

export default router;