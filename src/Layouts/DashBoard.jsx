import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      <nav className=" w-[300px] bg-red-200 p-5">
        <ul>
          <NavLink to={'userDashboard'}><li className="bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg">User Dashboard</li></NavLink>
          <NavLink to={'editdata'}><li className="bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg">Edit Biodata</li></NavLink>
          <NavLink to={'viewdata'}><li className="bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg">View Biodata</li></NavLink>
          <NavLink to={'mycontactreq'}><li className="bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg">My Contact Request</li></NavLink>
          <NavLink to={'favbiodata'}><li className="bg-pink-500 text-white px-3 py-2 mb-2 rounded-lg">Favourite Biodata</li></NavLink>
          <li className="bg-red-500 text-white px-3 py-2 mb-2 rounded-lg">
            <button>Log Out</button>
          </li>
          <li className="bg-green-500 text-black px-3 py-2 mb-2 rounded-lg">
            <button>Back To Home Page</button>
          </li>
        </ul>
      </nav>
      <div className=" flex-1  overflow-y-scroll">
        <Outlet/>
      </div>
    </div>
  )
}

export default DashBoard