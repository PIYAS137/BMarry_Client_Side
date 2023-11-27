import { TableCell, TableRow } from "@mui/material"

const ApproveConReqRow = ({data, handleApprove}) => {

    console.log(data);




    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {data.name}
            </TableCell>
            <TableCell align="center">{data.email}</TableCell>
            <TableCell align="center">
                <span>{data.userBioId}</span>
            </TableCell>
            <TableCell align="center">
                {
                    data.status ? 
                    <span className="  text-xs text-blue-500 font-semibold italic">Approve Req</span>
                    :
                    <button onClick={()=>handleApprove(data._id)} className=" py-2 px-4 text-xs bg-blue-400 text-white rounded-lg">Approve Req</button>
                }
            </TableCell>
        </TableRow>
    )
}

export default ApproveConReqRow