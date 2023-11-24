import { TableCell, TableRow } from "@mui/material"

const ApproveConReqRow = ({data}) => {
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {data.name}
            </TableCell>
            <TableCell align="center">{data.email}</TableCell>
            <TableCell align="center">
                <span>123</span>
            </TableCell>
            <TableCell align="center">
                <button className=" py-2 px-4 text-xs bg-blue-400 text-white rounded-lg">Approve Req</button>
            </TableCell>
        </TableRow>
    )
}

export default ApproveConReqRow