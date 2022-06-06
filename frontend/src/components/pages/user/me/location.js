import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, styled, Grid, IconButton, Divider } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import DialogBranchForm from "./dialogBranchForm";

import TextFieldTheme from "../../shared/general/TextFieldTheme";
import ButtonBlue from "../../shared/general/ButtonBlue";

const StyledHeadLabel = styled(Typography)({
  fontWeight: 600,
  marginBottom: 16,
});

const StyledWrapBranch = styled("div")({
  marginTop: 48,
  "& .wrap-branch-top": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    "& .MuiTypography-body2": {
      margin: 0,
    },
  },
  "& .branch-scroll": {
    height: 280,
    overflow: "auto",
  },
  "& .action": {
    textAlign: "right",
    "& .fal": {
      fontSize: 18,
    },
  },
  "& .address": {
    fontWeight: 600,
    fontSize: 18,
  },
  "& .contact": {
    "& .fal": {
      marginRight: 8,
    },
  },
});

const StyledIconButton = styled(IconButton)({
  margin: "0 4px",
  "&:hover": {
    background: "transparent",
    color: "#007afe",
  },
});

const LocationTab = () => {
  const { result: userProfile } = useSelector((state) => state.userProfile);

  const [openDialog, setOpenDialog] = useState(false);
  const [valueDialog, setValueDialog] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleCloseDialogBranchForm = () => {
    setOpenDialog(false);
  };

  const handleOpenDialogBranchForm = () => {
    setOpenDialog(true);
  };

  const handleAddNewBranch = () => {
    setValueDialog({
      name: "",
      address: "",
      phone: "",
      email: "",
    });
    handleOpenDialogBranchForm();
  };

  const handleEditBranch = (value) => {
    setValueDialog(value);
    handleOpenDialogBranchForm();
  };

  return (
    <div>
      <StyledHeadLabel variant="body2">Head office</StyledHeadLabel>
      {userProfile && (
        <Grid container spacing={2} style={{ marginBottom: 16 }}>
          <Grid item xs={12}>
            <TextFieldTheme
              label="Address"
              multiline={true}
              maxRows={2}
              value={userProfile.headOffice.address}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextFieldTheme label="Email" value={userProfile.headOffice.email}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextFieldTheme label="Phone" value={userProfile.headOffice.phone}/>
          </Grid>
        </Grid>
      )}

      <StyledWrapBranch>
        <div className="wrap-branch-top">
          <StyledHeadLabel variant="body2">
            Branch {userProfile && `(${userProfile.branchOffice.length})`}
          </StyledHeadLabel>
          <div>
            <ButtonBlue
              size="small"
              startIcon={<AddIcon />}
              variant="outlined"
              onClick={handleAddNewBranch}
            >
              New branch
            </ButtonBlue>
          </div>
        </div>

        <div className="branch-scroll">
          {userProfile &&
            userProfile.branchOffice.map((branch, index) => (
              <div key={index}>
                <div className="action">
                  <StyledIconButton
                    aria-label="delete"
                    size="small"
                    onClick={() => handleEditBranch(branch)}
                  >
                    <i class="fal fa-edit"></i>
                  </StyledIconButton>
                  <StyledIconButton aria-label="delete" size="small">
                    <i class="fal fa-trash-alt"></i>
                  </StyledIconButton>
                </div>
                <div>
                  <Typography variant="subtitle1" className="address">
                    {branch.name}
                  </Typography>
                  <Typography variant="subtitle1">{branch.address}</Typography>
                  <div className="contact">
                    <Typography color="text.third">
                      <i class="fal fa-phone-alt"></i>
                      {branch.phone}
                    </Typography>
                    <Typography color="text.third">
                      <i class="fal fa-envelope-open-text"></i>
                      {branch.email}
                    </Typography>
                  </div>
                </div>
                <Divider style={{ margin: "8px 0" }} />
              </div>
            ))}
        </div>
      </StyledWrapBranch>

      <DialogBranchForm
        open={openDialog}
        value={valueDialog}
        handleClose={handleCloseDialogBranchForm}
      />
    </div>
  );
};

export default LocationTab;
