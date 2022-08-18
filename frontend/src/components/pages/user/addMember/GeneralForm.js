import React, { Fragment, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import TextFieldTheme from "../../shared/general/TextFieldTheme";
import { Controller } from "react-hook-form";

const GeneralForm = (props) => {
    const { formProps: { control, setValue, formState: { errors } } } = props;
    const { fname, lname, phone, email } = props.fetchData
    useEffect(() => {
        setValue("firstName", fname)
        setValue("lastName", lname)
        setValue("mobileNumber", phone)
        setValue("email", email)
    }, [fname, lname, phone, email])
    return(
        <Fragment>
            <Typography className="form-title" gutterBottom>ข้อมูลทั่วไป</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        id="firstName"
                        name="firstName"
                        render={({field})=>(
                            <TextFieldTheme {...field} label="ชื่อ" fullWidth error={!!errors.firstName} helperText={errors.firstName?.message} />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        id="lastName"
                        name="lastName"
                        render={({field})=>(
                            <TextFieldTheme {...field} label="นามสกุล" fullWidth error={!!errors.lastName} helperText={errors.lastName?.message} />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        id="mobileNumber"
                        name="mobileNumber"
                        render={({field})=>(
                            <TextFieldTheme {...field} label="เบอร์ติดต่อ(เพิ่มเติม)" fullWidth error={!!errors.mobileNumber} helperText={errors.mobileNumber?.message} />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        id="email"
                        name="email"
                        render={({field})=>(
                            <TextFieldTheme {...field} label="อีเมลล์" fullWidth error={!!errors.email} helperText={errors.email?.message} />
                        )}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default GeneralForm;