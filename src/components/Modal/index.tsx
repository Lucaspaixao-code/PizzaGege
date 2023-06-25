import { Close } from "@mui/icons-material";
import { Breakpoint, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

interface props {
    open: boolean;
    title: string;
    handleClose: () => void;
    size: Breakpoint
    children: ReactNode;
    footer: ReactNode;
}
export default function ModalDefault({open,handleClose,children,title,size, footer}: props){
    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth={size} sx={{
            overflow: "hidden"
        }} >
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
                <Stack sx={{
                    width: "100%",
                    height: "100%",
                    marginTop: "1.5rem",
                    marginBottom: "1.5rem",
                }}>
                    {children}
                </Stack>
            </DialogContent>

            <DialogActions>
                {footer}
            </DialogActions>
        </Dialog>
    )
}