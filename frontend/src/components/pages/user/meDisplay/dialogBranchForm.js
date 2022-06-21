import React, { useState, useEffect } from "react";
import { styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import ButtonBlue from "../../shared/general/ButtonBlue";
import TextFieldTheme from "../../shared/general/TextFieldTheme";

const StyledTextFieldTheme = styled(TextFieldTheme)({
  marginBottom: 20,
});

const DialogBranchForm = (props) => {
  const { open, handleClose, value, append } = props;
  const [state, setstate] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    append(state)
    handleClose();
  }

  useEffect(() => {
    setstate(value);
  }, [value]);

  return (
    <Dialog
      fullWidth
      maxWidth={"sm"}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {value && value.name === "" ? "Add Branch" : "Edit Branch"}
      </DialogTitle>
      <DialogContent style={{ paddingTop: 16 }}>
        <StyledTextFieldTheme
          label="Branch name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <StyledTextFieldTheme
          label="Address"
          name="address"
          value={state.address}
          onChange={handleChange}
          multiline
          rows={2}
        />
        <StyledTextFieldTheme
          label="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <StyledTextFieldTheme
          label="Phone"
          name="phone"
          value={state.phone}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <ButtonBlue onClick={handleClose}>cancel</ButtonBlue>
        <ButtonBlue onClick={handleSubmit}>
          {value && value.name === "" ? "Add Branch" : "Save Branch"}
        </ButtonBlue>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBranchForm;
