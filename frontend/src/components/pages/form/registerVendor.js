import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  Button,
  Grid,
  Divider,
  IconButton,
  Paper,
  TextField,
  MenuItem,
} from "@mui/material";
import ButtonBlue from "../shared/general/ButtonBlue";
import TextFieldTheme from "../shared/general/TextFieldTheme";
import AddIcon from "@mui/icons-material/Add";
import DialogBranchForm from "./dialogBranchForm";
import jobGroup from "../assets/data/jobGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const StyledRoot = styled("div")({
  marginTop: 100,
  "& .register-head": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 100,
    marginBottom: 30,
  },
  "& .register-body": {
    // display: "flex"
  },
});

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

const StyledPaper = styled(Paper)({
  height: 96,
  borderRadius: 16,
  position: "relative",
  padding: 16,
  boxSizing: "border-box",
  cursor: "pointer",
  "&:hover": {
    // background: "transparent",
    color: "#1976d2",
  },
  //   "& .wrap-btn-select": {
  //     position: "absolute",
  //     right: 16,
  //     top: 8,
  //     "& .MuiButtonBase-root": {
  //       backgroundColor: "#0000000a",
  //       padding: 2,
  //       fontSize: 16,
  //     },
  //   },
  "& .wrap-name": {
    width: 160,
    "& .MuiTypography-root": {
      fontSize: 20,
    },
  },
  "& .wrap-icon": {
    position: "absolute",
    fontSize: 35,
    color: "#919eab",
    right: 16,
    bottom: 8,
  },
});

const StyledRootPaper = styled("div")({
  "& .selected": {
    color: "#1976d2",
    border: "1px solid #1976D2",
    background: "#1976d20d",
  },
});

function ExpertItem(props) {
  const { value, setEnpertise } = props;
  const [selected, setSelected] = useState(false);

  const onSelect = () => {
    setSelected(!selected);
    setEnpertise(value.name);
    console.log(`selected: ${selected}, value: ${value.name}`);
  };
  return (
    <StyledRootPaper>
      <StyledPaper
        variant="outlined"
        onClick={onSelect}
        className={`${selected ? "selected" : ""}`}
      >
        <div className="wrap-name">
          <Typography variant="subtitle">{value.name}</Typography>
        </div>
        <div className="wrap-icon">{value.icon}</div>
      </StyledPaper>
    </StyledRootPaper>
  );
}

const schema = yup.object().shape({
  companyName: yup.string().required("ต้องระบุข้อมูลในช่องนี้"),
  companyDetail: yup.string(),
  registeredCapital: yup
    .number()
    .typeError('ทุนจดทะเบียนควรเป็นตัวเลข')
    .moreThan(15, "ทุนในการจดทะเบียนต้องมากกว่า 15 บาท")
    .integer("ทุนจดทะเบียนควรเป็นเลขจำนวนเต็ม")
    .required(),
  registeredYear: yup.number().positive().integer().required(),
  revenue: yup.number().typeError('รายได้ควรเป็นตัวเลข').positive("รายได้ควรมากกว่า 0").required(),
  manNumber: yup.string().required("ต้องระบุข้อมูลในช่องนี้"),
  contactName: yup.string().required("ต้องระบุข้อมูลในช่องนี้"),
  contactEmail: yup.string().email("email ไม่ถูกต้อง").required("ต้องระบุข้อมูลในช่องนี้"),
  contactPhone: yup.string().matches(/^[0-9]{10}/, {message:"เบอร์ไม่ถูกต้อง", excludeEmptyString:true}).required("ต้องระบุข้อมูลในช่องนี้"),
  enpertise: yup.array(),
  headOfficeAddress: yup.string().required("ต้องระบุข้อมูลในช่องนี้"),
  headOfficeEmail: yup.string().email("email ไม่ถูกต้อง").required("ต้องระบุข้อมูลในช่องนี้"),
  headOfficePhone: yup.string().matches(/^[0-9]{10}/, {message:"เบอร์ไม่ถูกต้อง", excludeEmptyString:true}).required("ต้องระบุข้อมูลในช่องนี้"),
  // branch: yup.array().of(
  //   yup.object().shape({
  //     name: yup.string(),
  //     address: yup.string(),
  //     email: yup.string().email(),
  //     phone: yup.string(),
  //   })
  // ),
});

const RegisterVendor = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      companyName: "",
      companyDetail: "",
      registeredCapital: 0,
      registeredYear: 0,
      revenue: 0,
      manNumber: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      enpertise: [],
      headOfficeAddress: "",
      headOfficeEmail: "",
      headOfficePhone: "",
    },
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [valueDialog, setValueDialog] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [year, setYear] = useState(new Date());
  const manNumberArr = ["1-50", "51-100", "101-150", "200-299", "300 ขึ้นไป"];

  const {
    fields: branchField,
    append: branchAppend,
    remove: branchRemove,
  } = useFieldArray({
    control: control,
    name: "branch",
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

  const handleDeleteBranch = (value) => {
    branchRemove(value);
  };

  const onSubmit = (data) => {
    const newData = { ...data, branch: branchField };
    console.log(newData);
  };

  const onSelectEnpertise = (item) => {
    const currentEnpertise = getValues("enpertise");
    if (currentEnpertise.includes(item)) {
      setValue(
        "enpertise",
        currentEnpertise.filter((x) => x !== item)
      );
      return;
    }
    currentEnpertise.push(item);
    setValue("enpertise", currentEnpertise);
  };

  // console.log(watch())

  return (
    <StyledRoot>
      <Container maxWidth="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5">Profile</Typography>
              <Divider />
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="companyName"
                  control={control}
                  render={({ field }) => (
                    <TextFieldTheme
                      {...field}
                      label="ชื่อบริษัท"
                      error={!!errors.companyName}
                      helperText={errors.companyName?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="companyDetail"
                  control={control}
                  render={({ field }) => (
                    <TextFieldTheme
                      {...field}
                      label="เกี่ยวกับบริษัท"
                      multiline={true}
                      rows={4}
                      error={!!errors.companyDetail}
                      helperText={errors.companyDetail?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="registeredCapital"
                  control={control}
                  render={({ field }) => (
                    <TextFieldTheme
                      {...field}
                      label="ทุนจดทะเบียน"
                      error={!!errors.registeredCapital}
                      helperText={errors.registeredCapital?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Controller
                    name="registeredYear"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        label="ปีที่จดทะเบียน"
                        views={["year"]}
                        value={year}
                        onChange={(newValue) => {
                          setValue("registeredYear", newValue.$y);
                          setYear(newValue);
                        }}
                        renderInput={(props) => (
                          <TextField
                            {...props}
                            error={!!errors.registeredYear}
                            helperText={errors.registeredYear?.message}
                            fullWidth
                          />
                        )}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="revenue"
                  control={control}
                  render={({ field }) => (
                    <TextFieldTheme
                      {...field}
                      label="รายได้ (ปีล่าสุด)"
                      error={!!errors.revenue}
                      helperText={errors.revenue?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="manNumber"
                  control={control}
                  render={({ field }) => (
                    <TextFieldTheme
                      {...field}
                      label="จำนวน Manpower"
                      error={!!errors.manNumber}
                      helperText={errors.manNumber?.message}
                      select
                    >
                      {manNumberArr.map((value) => (
                        <MenuItem value={value}>{value}</MenuItem>
                      ))}
                    </TextFieldTheme>
                  )}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Contact</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="contactName"
                control={control}
                render={({ field }) => (
                  <TextFieldTheme
                    {...field}
                    label="ชื่อผู้ติดต่อ"
                    error={!!errors.contactName}
                    helperText={errors.contactName?.message}
                    fullwidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="contactEmail"
                control={control}
                render={({ field }) => (
                  <TextFieldTheme
                    {...field}
                    label="Email"
                    error={!!errors.contactEmail}
                    helperText={errors.contactEmail?.message}
                    fullwidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="contactPhone"
                control={control}
                render={({ field }) => (
                  <TextFieldTheme
                    {...field}
                    label="เบอร์โทรศัพท์"
                    error={!!errors.contactPhone}
                    helperText={errors.contactPhone?.message}
                    fullwidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Enpertise</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {jobGroup.map((value, index) => (
                  <Grid item xs={12} sm={4}>
                    <ExpertItem
                      value={value}
                      setEnpertise={onSelectEnpertise}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Location</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <StyledHeadLabel variant="body2">สำนักงานหลัก</StyledHeadLabel>
              <Grid container spacing={2} style={{ marginBottom: 16 }}>
                <Grid item xs={12}>
                  <Controller
                    name="headOfficeAddress"
                    control={control}
                    render={({ field }) => (
                      <TextFieldTheme
                        {...field}
                        label="ที่อยู่"
                        error={!!errors.headOfficeAddress}
                        helperText={errors.headOfficeAddress?.message}
                        multiline={true}
                        maxRows={2}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="headOfficeEmail"
                    control={control}
                    render={({ field }) => (
                      <TextFieldTheme
                        {...field}
                        label="Email"
                        error={!!errors.headOfficeEmail}
                        helperText={errors.headOfficeEmail?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="headOfficePhone"
                    control={control}
                    render={({ field }) => (
                      <TextFieldTheme
                        {...field}
                        label="เบอร์โทรศัพท์"
                        error={!!errors.headOfficePhone}
                        helperText={errors.headOfficePhone?.message}
                      />
                    )}
                  />
                </Grid>
              </Grid>

              <StyledWrapBranch>
                <div className="wrap-branch-top">
                  <StyledHeadLabel variant="body2">
                    {/* Branch {userProfile && `(${userProfile.branchOffice.length})`} */}
                    {`สาขา (${branchField.length})`}
                  </StyledHeadLabel>
                  <div>
                    <ButtonBlue
                      size="small"
                      startIcon={<AddIcon />}
                      variant="outlined"
                      onClick={handleAddNewBranch}
                    >
                      เพิ่มสาขา
                    </ButtonBlue>
                  </div>
                </div>

                <div className="branch-scroll">
                  {branchField.map((branch, index) => (
                    <div key={index}>
                      <div className="action">
                        {/* <StyledIconButton
                    aria-label="delete"
                    size="small"
                    onClick={() => handleEditBranch(branch)}
                  >
                    <i class="fal fa-edit"></i>
                  </StyledIconButton> */}
                        <StyledIconButton
                          aria-label="delete"
                          size="small"
                          onClick={() => handleDeleteBranch(index)}
                        >
                          <i class="fal fa-trash-alt"></i>
                        </StyledIconButton>
                      </div>
                      <div>
                        <Typography variant="subtitle1" className="address">
                          {branch.name}
                        </Typography>
                        <Typography variant="subtitle1">
                          {branch.address}
                        </Typography>
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
                append={branchAppend}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained">
            สมัคร
          </Button>
        </form>
      </Container>
    </StyledRoot>
  );
};

export default RegisterVendor;
