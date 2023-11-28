import { useContext, useEffect, useState } from "react";
import SectionHeader from "../../Components/SectionHeader/SectionHeader"
import ManageUserTable from "./ManageUserTable"
import useSecureAxios from "../../hooks/secureAxiosDataFetchHook/useSecureAxios";
import { AuthContext } from "../../Context/FirebaseAuthContext";

const ManageUserPage = () => {

  const [query, setQuery] = useState('')
  const secureAxios = useSecureAxios()
  const { user } = useContext(AuthContext)
  const [datas,setDatas] = useState([])
  const [resetStatus,setResetStatus] = useState(false)


  useEffect(() => {
    secureAxios.get(`/users?email=${user?.email}&text=${query}`)
    .then(res=>{
      setDatas(res.data)
    })
  }, [resetStatus])


  const handleSubmit = (event) => {
    event.preventDefault();
    setResetStatus(true)
    console.log(query);
  }

  const handleClickReset=()=>{
    setResetStatus(false)
    setQuery('')
  }

  return (
    <div className="px-3 lg:px-0">
      <SectionHeader big={'Manage User Page'} small={'admin can manage user from here'} />
      <div>
        <p className=" text-center text-red-700">Total {datas.length} Users Found !</p>
        <form onSubmit={handleSubmit} className=" bg-red-100 max-w-xl p-4 mx-auto rounded-lg flex space-x-5 items-center">
          <input value={query} onChange={e => setQuery(e.target.value)} type="search" placeholder="Search by name" className=" flex-1 py-2 px-3 rounded-lg" />
          <button className="bg-red-300 px-5 py-2 rounded-xl">Search</button>
          {resetStatus && <button onClick={handleClickReset} className="bg-purple-500 text-white px-5 py-2 rounded-xl">Reset</button>}
        </form>
        <div>
          {datas.length > 0 && <ManageUserTable datas={datas} />}
        </div>
      </div>
    </div>
  )
}

export default ManageUserPage