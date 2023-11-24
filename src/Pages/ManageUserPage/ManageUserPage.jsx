import SectionHeader from "../../Components/SectionHeader/SectionHeader"
import ManageUserTable from "./ManageUserTable"

const ManageUserPage = () => {
  return (
    <div>
      <SectionHeader big={'Manage User Page'} small={'admin can manage user from here'} />
      <div>
        <p className=" text-center text-red-600">backend theke asbe ei data for every submit and update the table</p>
        <form className=" bg-red-100 max-w-xl p-4 mx-auto rounded-lg flex space-x-5 items-center">
          <input type="search" placeholder="Search by name" className=" flex-1 py-2 px-3 rounded-lg"/>
          <button className="bg-red-300 px-5 py-2 rounded-xl">Search</button>
        </form>
        <div>
          <ManageUserTable/>
        </div>
      </div>
    </div>
  )
}

export default ManageUserPage