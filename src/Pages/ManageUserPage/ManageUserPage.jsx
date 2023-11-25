import SectionHeader from "../../Components/SectionHeader/SectionHeader"
import useGetAllUsers from "../../hooks/getAllUsersHook/useGetAllUsers"
import ManageUserTable from "./ManageUserTable"

const ManageUserPage = () => {

  const [refetch, allUsers] = useGetAllUsers();

  return (
    <div>
      <SectionHeader big={'Manage User Page'} small={'admin can manage user from here'} />
      <div>
        <p className=" text-center text-red-600">backend theke asbe ei data for every submit and update the table</p>
        <form className=" bg-red-100 max-w-xl p-4 mx-auto rounded-lg flex space-x-5 items-center">
          <input type="search" placeholder="Search by name" className=" flex-1 py-2 px-3 rounded-lg" />
          <button className="bg-red-300 px-5 py-2 rounded-xl">Search</button>
        </form>
        <div>
          {allUsers.length > 0 && <ManageUserTable datas={allUsers} />}
        </div>
      </div>
    </div>
  )
}

export default ManageUserPage