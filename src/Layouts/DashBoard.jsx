import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './DashboardStyle.css';
import useGetAdminStatus from '../hooks/getAdminStatusHook/useGetAdminStatus';
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/FirebaseAuthContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const DashBoard = () => {
  const [clickStatus, setClickStatus] = useState(true)

  const { Firebase_Logout_User } = useContext(AuthContext)
  const location = useLocation();
  const pathName = location.pathname.split('/')[2];
  const [adminStatus] = useGetAdminStatus()

  const isAdmin = adminStatus

  const handleClickLogOut = () => {
    Firebase_Logout_User()
      .then().catch()
  }

  const handleClickChange = () => {
    setClickStatus(!clickStatus)
  }


  return (
    <div className="h-screen flex overflow-hidden">
      <div className='md:hidden absolute  p-5'>
        {
          clickStatus ?
            <CloseIcon onClick={handleClickChange} />
            :
            <MenuIcon onClick={handleClickChange} />
        }
      </div>
      {
        clickStatus &&
        <nav className="absolute rounded-lg md:rounded-none md:relative top-14 md:top-0 left-5 md:left-0 md:block w-[300px] bg-red-200 p-5">
          <ul>

            {/* --------------------------------------admin routes------------------------------------- */}
            {isAdmin &&
              <>
                <NavLink to={'adminDashboard'}><li className={`bg-pink-700 text-white px-3 py-2 mb-2 rounded-lg ${pathName === 'adminDashboard' ? 'activeNavLink' : ''}`}>Admin Dashboard</li></NavLink>
                <NavLink to={'adminManageUser'}><li className={`bg-pink-700 text-white px-3 py-2 mb-2 rounded-lg ${pathName === 'adminManageUser' ? 'activeNavLink' : ''}`}>Manage User</li></NavLink>
                <NavLink to={'adminApprovePrimium'}><li className={`bg-pink-700 text-white px-3 py-2 mb-2 rounded-lg ${pathName === 'adminApprovePrimium' ? 'activeNavLink' : ''}`}>Approve Premium</li></NavLink>
                <NavLink to={'adminApproveContactReq'}><li className={`bg-pink-700 text-white px-3 py-2 mb-2 rounded-lg ${pathName === 'adminApproveContactReq' ? 'activeNavLink' : ''}`}>Approve Contact Request</li></NavLink>
                <NavLink to={'adminSuccessStory'}><li className={`bg-pink-700 text-white px-3 py-2 mb-2 rounded-lg ${pathName === 'adminSuccessStory' ? 'activeNavLink' : ''}`}>Success Storys</li></NavLink>
                <hr className=' h-[3px] bg-red-500 my-3' />
              </>}
            {/* --------------------------------------admin routes------------------------------------- */}
            <NavLink to={'userDashboard'}><li className={`bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg ${pathName === 'userDashboard' ? 'activeNavLink' : ''}`}>Your Dashboard</li></NavLink>
            <NavLink to={'editdata'}><li className={`bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg ${pathName === 'editdata' ? 'activeNavLink' : ''}`}>Edit Biodata</li></NavLink>
            <NavLink to={'viewdata'}><li className={`bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg ${pathName === 'viewdata' ? 'activeNavLink' : ''}`}>View Biodata</li></NavLink>
            <NavLink to={'mycontactreq'}><li className={`bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg ${pathName === 'mycontactreq' ? 'activeNavLink' : ''}`}>My Contact Request</li></NavLink>
            <NavLink to={'favbiodata'}><li className={`bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg ${pathName === 'favbiodata' ? 'activeNavLink' : ''}`}>Favourite Biodata</li></NavLink>
            <NavLink to={'married'}><li className={`bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg ${pathName === 'married' ? 'activeNavLink' : ''}`}>Got Married</li></NavLink>
            <hr className=' h-[4px] bg-red-500 my-3' />
            <li onClick={handleClickLogOut} className="bg-red-500 text-white px-3 py-2 mb-2 rounded-lg">
              <button>Log Out</button>
            </li>
            <li className="bg-green-500  text-black px-3 py-2 mb-2 rounded-lg">
              <NavLink to={'/'}><button>Back To Home Page</button></NavLink>
            </li>
          </ul>
        </nav>
      }
      <div className=" flex-1  overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  )
}

export default DashBoard