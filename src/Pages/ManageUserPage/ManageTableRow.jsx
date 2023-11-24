import { TableCell, TableRow } from "@mui/material"

const ManageTableRow = ({ data }) => {
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {data.name}
            </TableCell>
            <TableCell align="center">{data.email}</TableCell>
            <TableCell align="center">
                <button className=" py-2 px-4 text-xs bg-green-700 text-white rounded-lg">Make Admin</button>
            </TableCell>
            <TableCell align="center">
                <button className=" py-2 px-4 text-xs bg-purple-600 text-white rounded-lg">Make Premium</button>
            </TableCell>
        </TableRow>
    )
}

export default ManageTableRow