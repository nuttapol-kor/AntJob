import React, { Fragment } from "react";
import { Button, Stack, Typography } from "@mui/material";

const InformationThree = (props) => {
    return(
        <Fragment>
            <div>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography gutterBottom style={{color: "#9e9e9e"}}>ประสบการณ์ทำงาน</Typography>
                    <Button className="btn-addSkill" startIcon={<i className="fa-solid fa-plus"></i>} variant="outlined" style={{paddingLeft: 32, paddingRight: 32}}>เพิ่มประสบการณ์</Button>
                </Stack>
            </div>

            <div style={{marginTop: 48}}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography gutterBottom style={{color: "#9e9e9e"}}>ประวัติการศึกษา</Typography>
                    <Button className="btn-addSkill" startIcon={<i className="fa-solid fa-plus"></i>} variant="outlined" style={{paddingLeft: 32, paddingRight: 32}}>เพิ่มประวัติ</Button>
                </Stack>
            </div>
        </Fragment>
    )
}

export default InformationThree;
