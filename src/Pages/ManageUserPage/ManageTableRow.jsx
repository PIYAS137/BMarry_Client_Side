import { TableCell, TableRow } from "@mui/material"
import useSecureAxios from "../../hooks/secureAxiosDataFetchHook/useSecureAxios";
import Swal from "sweetalert2";
import useGetAllUsers from "../../hooks/getAllUsersHook/useGetAllUsers";

const ManageTableRow = ({ data }) => {

    const secureAxios = useSecureAxios()
    const [refetch] = useGetAllUsers()


    const handleClickMakeAdmin = () => {
        Swal.fire({
            title: "Are you sure? Make Admin ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make him admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                secureAxios.patch(`/user/admin/${data._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Done !",
                                text: "Your operation has been sucessfully done.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleClickMakePremium=()=>{
        Swal.fire({
            title: "Are you sure? Make Premium ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make him premium!"
        }).then((result) => {
            if (result.isConfirmed) {
                secureAxios.patch(`/user/premium/${data._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Done !",
                                text: "Your operation has been sucessfully done.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {data.name}
            </TableCell>
            <TableCell align="center">{data.email}</TableCell>
            <TableCell align="center">
                {
                    data.role === 'admin' ?
                    <span className=" text-green-700 font-semibold italic">admin</span>
                    :
                    <button onClick={handleClickMakeAdmin} className=" py-2 px-4 text-xs bg-green-700 text-white rounded-lg">Make Admin</button>
                }
            </TableCell>
            <TableCell align="center">
            {
                    data.is_premium ?
                    <span className=" text-purple-700 font-semibold italic">premiumed</span>
                    :
                    <button onClick={handleClickMakePremium} className=" py-2 px-4 text-xs bg-purple-600 text-white rounded-lg">Make Premium</button>
                }
            </TableCell>
        </TableRow>
    )
}

export default ManageTableRow