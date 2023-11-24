import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {


  const isAdmin = true


  return (
    <div className="h-screen flex overflow-hidden">
      <nav className=" w-[300px] bg-red-200 p-5">
        <ul>

          {/* --------------------------------------admin routes------------------------------------- */}
          {isAdmin &&
            <>
              <NavLink to={'adminDashboard'}><li className="bg-pink-700 text-white px-3 py-2 mb-2 rounded-lg">Admin Dashboard</li></NavLink>
              <NavLink to={'adminManageUser'}><li className="bg-pink-700 text-white px-3 py-2 mb-2 rounded-lg">Manage User</li></NavLink>
              <NavLink to={'adminApprovePrimium'}><li className="bg-pink-700 text-white px-3 py-2 mb-2 rounded-lg">Approve Premium</li></NavLink>
              <NavLink to={'adminApproveContactReq'}><li className="bg-pink-700 text-white px-3 py-2 mb-2 rounded-lg">Approve Contact Request</li></NavLink>
              <hr className=' h-[3px] bg-red-500 my-3' />
            </>}
          {/* --------------------------------------admin routes------------------------------------- */}
          <NavLink to={'userDashboard'}><li className="bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg">Your Dashboard</li></NavLink>
          <NavLink to={'editdata'}><li className="bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg">Edit Biodata</li></NavLink>
          <NavLink to={'viewdata'}><li className="bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg">View Biodata</li></NavLink>
          <NavLink to={'mycontactreq'}><li className="bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg">My Contact Request</li></NavLink>
          <NavLink to={'favbiodata'}><li className="bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg">Favourite Biodata</li></NavLink>
          <NavLink to={'married'}><li className="bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg">Got Married</li></NavLink>
          <li className="bg-red-500 text-white px-3 py-2 mb-2 rounded-lg">
            <button>Log Out</button>
          </li>
          <li className="bg-green-500  text-black px-3 py-2 mb-2 rounded-lg">
            <NavLink to={'/'}><button>Back To Home Page</button></NavLink>
          </li>
        </ul>
      </nav>
      <div className=" flex-1  overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  )
}

export default DashBoard