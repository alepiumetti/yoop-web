import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import InfoIcon from "@material-ui/icons/Info";
import { Tooltip, Divider } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="¿Necesitás ayuda?" placement="right" arrow>
        <IconButton aria-label="ayuda" onClick={handleClickOpen}>
          <InfoIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Ayuda
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Asociandoté vas a obtener todos los descuentos. Para hacerlo, podés abonar con diferentes medios de pago.
          </Typography>
          <Typography gutterBottom>
            Seleccionando "T.de Crédito", vas a poder asociarte con tu tarjeta de crédito o tarjeta prepaga y el pago se va a hacer automático, todos los meses (Débito automático)
          </Typography>
          <Typography gutterBottom>
            En cambio, con "+ Formas de pago" vas a poder asociarte pagando por RapiPago/PagoFacil, tarjeta de débito o crédito. De esta forma, los pagos no se hacen automático.
          </Typography>
          <br/>
          <Divider/>
          <Typography gutterBottom>
            <b>La acreditación de los pagos puede tardar entre 2hs a 48hs, por lo que la actualización del pago dentro de la app puede tardar ese periodo de tiempo.</b>
          </Typography>
          <Divider/>
          <br/>
          <Typography gutterBottom>
            Si tenés más preguntas podés consultarnos directamente por{" "}
            <a
              style={{ color: "#115bcc" }}
              href="http://wpp-redirect.herokuapp.com/go/?p=543413717471&m=Hola!%20Tengo%20una%20pregunta%20para%20asociarme.%20"
            >
              WhatsApp
            </a>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            ¡Gracias!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
