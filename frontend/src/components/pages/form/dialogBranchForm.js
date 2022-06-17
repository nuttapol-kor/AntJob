import React, { useState, useEffect } from "react";
import { styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import ButtonBlue from "../shared/general/ButtonBlue";
import TextFieldTheme from "../shared/general/TextFieldTheme";

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

  const handleUpdate = () => {
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
        {value && value.name === "" ? "เพิ่มสาขา" : "Edit Branch"}
      </DialogTitle>
      <DialogContent style={{ paddingTop: 16 }}>
        <StyledTextFieldTheme
          label="ชื่อสาขา"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <StyledTextFieldTheme
          label="ที่อยู่"
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
          label="เบอร์โทรศัพท์"
          name="phone"
          value={state.phone}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <ButtonBlue onClick={handleClose}>ยกเลิก</ButtonBlue>
        {/* {value && value.name === "" ? <ButtonBlue onClick={handleSubmit}>Add Branch</ButtonBlue> : <ButtonBlue onClick={handleUpdate}>Save Branch</ButtonBlue>} */}
        <ButtonBlue onClick={handleSubmit}>
          {/* {value && value.name === "" ? "Add Branch" : "Save Branch"} */}
          ยืนยัน
        </ButtonBlue>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBranchForm;