import { Close } from "@mui/icons-material";
import { Breakpoint, Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

interface props {
    open: boolean;
    title: string;
    handleClose: () => void;
    size: Breakpoint
    children: ReactNode;
}
export default function ModalDefault({open,handleClose,children,title,size}: props){
    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth={size} >
            <DialogTitle>
                <Stack sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row"
                }}>
                    <Typography variant="h5">{title}</Typography>
                    <IconButton onClick={handleClose}><Close/></IconButton>
                </Stack>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}