import { TableCell, TableRow } from "@mui/material"

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




const SuccessStoryRow = ({ data }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <TableRow>
                <TableCell component="th" scope="row">
                    {data.self_name}
                </TableCell>
                <TableCell align="center">
                    <span>{data.self_biodata_id}</span>
                </TableCell>
                <TableCell align="center">{data.partner_name}</TableCell>
                <TableCell align="center">
                    <span>{data.partner_biodata_id}</span>
                </TableCell>
                <TableCell align="center">
                    <Button className=" py-2 px-4 text-xs bg-pink-400 text-white rounded-lg" variant="outlined" onClick={handleClickOpen}>
                        View Story
                    </Button>
                </TableCell>
            </TableRow>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {`${data.self_name} + ${data.partner_name} Story`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {data.success_story}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default SuccessStoryRow