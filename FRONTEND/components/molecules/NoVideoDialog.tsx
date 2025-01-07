import React from 'react';
import { Button, Dialog, DialogActions, DialogTitle, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface NoVideoDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const NoVideoDialog: React.FC<NoVideoDialogProps> = ({ open, setOpen }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        '& .MuiDialog-paper': {
          minWidth: "500px",
        }
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: "700",
          textAlign: "center",
          paddingTop: "30px",
          color: "#555",
          fontSize: "18px",
          letterSpacing: "1px",
          fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Yu Gothic, Verdana, Meiryo, sans-serif",
        }}
      >
        登録されている手話がありません
      </DialogTitle>
      <DialogActions sx={{
        padding: "10px",
        margin: "5px 10px 10px 0",
      }}>
        <Button
          onClick={() => setOpen(false)}
          variant="contained"
          sx={{
            backgroundColor: "#bcbcbc",
            padding: "5px 20px",
            borderRadius: "1px",
            fontWeight: "600",
            fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Yu Gothic, Verdana, Meiryo, sans-serif",
            '&:hover': {
              backgroundColor: "#bcbcbc",
            }
          }}
        >
          確認
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default NoVideoDialog;