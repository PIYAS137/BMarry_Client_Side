import { TableCell, TableRow } from '@mui/material'
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/FirebaseAuthContext';
import { Link } from 'react-router-dom';
import usePublicAxiosHook from '../../hooks/publicAxiosDataFetchHook/usePublicAxiosHook';

const FavDatasRow = ({ data, refetch}) => {
    const { user } = useContext(AuthContext);
    const publicAxios = usePublicAxiosHook()


    const hanldeDeleteData = (sid) => {
        Swal.fire({
            title: "Want to Delete ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                const dataThatSend = { sid }
                publicAxios.patch(`/favourite?email=${user?.email}`, dataThatSend)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
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
            <TableCell align="center">{data.biodata_id}</TableCell>
            <TableCell align="center">{data.parmanent_address}</TableCell>
            <TableCell align="center">
                <span className=" ">{data.occupation}</span>
            </TableCell>
            <TableCell align="center">
                <Link to={`/biodatas/${data._id}`}><button className=" py-2 px-4 text-xs bg-purple-500 text-white rounded-lg">View Biodata</button></Link>
            </TableCell>
            <TableCell align="center">
                <button onClick={() => hanldeDeleteData(data._id)} className=" py-2 px-4 text-xs bg-red-500 text-white rounded-lg">Delete</button>
            </TableCell>
        </TableRow>
    )
}

export default FavDatasRow