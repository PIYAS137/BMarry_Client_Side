import { TableCell, TableRow } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../hooks/secureAxiosDataFetchHook/useSecureAxios";
import { useContext } from "react";
import { AuthContext } from "../../Context/FirebaseAuthContext";

const OneRow = ({ data,handleDeleteReq }) => {

    const secureAxios = useSecureAxios()
    const { user, loader } = useContext(AuthContext)




    return (

        <TableRow>
            <TableCell component="th" scope="row">
                {data.requestedBiodataName}
            </TableCell>
            <TableCell align="center">{data.requestedBiodataId}</TableCell>
            {data.status ?
                <TableCell align="center">{data.requestedBiodataEmail}</TableCell>
                :
                <TableCell align="center" sx={{ color: 'red' }}>restricted</TableCell>
            }
            {data.status ?
                <TableCell align="center">{data.requestedBiodataPhone}</TableCell>
                :
                <TableCell align="center" sx={{ color: 'red' }}>restricted</TableCell>
            }
            <TableCell align="center">
                <button onClick={()=>handleDeleteReq(data._id)} className=" py-2 px-4 text-xs bg-red-500 text-white rounded-lg">Delete</button>
            </TableCell>
            <TableCell align="left">
                {data.status ?
                    <span className=" text-green-700 italic font-semibold text-xs">accepted</span>
                    :
                    <span className=" text-purple-700 italic font-semibold text-xs">pending</span>
                }
            </TableCell>
        </TableRow>

    )
}

export default OneRow