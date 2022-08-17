import React, { Fragment } from "react";
import { Grid, MenuItem, Typography, styled, Stack, Button, IconButton } from "@mui/material";
import TextFieldTheme from "../../shared/general/TextFieldTheme";
import { Controller, useFieldArray } from "react-hook-form";

const jobRole = {
	"Business & Operations": [
		"Account (Client) Manager",
		"Customer Service",
		"Executive Management",
		"Finance and Accounting",
		"General Management",
		"Human Resource Manager",
		"Office Manager",
		"Operations Manager",
		"Project Manager"
	],
	"Design":[
		"Animator",
		"Creative Designer",
		"Game Designer",
		"Graphic Designer",
		"Interactive Designer",
		"Motion Graphic Designer",
		"Multimedia Designer",
		"UI Designer",
		"UX/UI Designer",
		"UX Designer",
		"UX Researcher",
		"Video Editor"
	],
	"DevOps & IT":[
		"Build/Release Engineer",
		"Database Adminstrator",
		"Desktop Support",
		"DevOps Engineer",
		"Hardware Engineer",
		"IT Architecture",
		"IT Audit",
		"IT Infrastructure",
		"IT Manager",
		"Network Adminstrator",
		"Network Engineer",
		"Site Reliability Engineer",
		"Solution Achitect",
		"Sytem Analyst",
		"Sytems Adminstrator"
	]

}

const jobSpecialization = [
	"Business & Operations",
	"Design",
	"DevOps & IT",
	"Marketing",
	"Product Management",
	"Quality Assurance",
	"Sales",
	"Software Engineering",
	"Data Science and Analytics",
]

const StyledSpecialization = styled('div')(({selected})=>({
    minHeight: 100,
    padding: "24px 16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxSizing: "border-box",
    cursor: "pointer",
    border: selected? "1px solid #1976d2": "1px solid #ececec",
    backgroundColor: selected? "#1976d2": "#ffffff",
    transition: "border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: 20,
    userSelect: "none",
    "& .MuiTypography-root": {
        color: selected? "#ffffff": "#9e9e9e",
        transition: "color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
}))

const StyledRole = styled(StyledSpecialization)({
   minHeight: 80,
   padding: "16px",
})

const StyledSkill = styled('div')({
    marginTop: 20,
    display: "grid",
    gridTemplateColumns: "calc(100% - 220px) 180px auto",
    // gridGap: "0 8px",
    alignItems: "center",
})

const InformationTwo = (props) => {
    const { formProps: {register, control, getValues, setValue, formState: { errors }, watch } } = props;
    const { fields: jobSkillFields, append: jobSkillAppend, remove: jobSkillRemove} = useFieldArray({ control, name: "jobSkill", });

    const jobSpecializationWatched = watch('jobSpecialization');

    const onClickSpecialization = (specialization) => {
        const currentSpecialization = getValues('jobSpecialization');
        setValue('jobRole', [])
        if(specialization !== currentSpecialization){
            setValue('jobSpecialization', specialization)
            return
        }
        setValue('jobSpecialization', "")
    }

    const onClickRole = (role) => {
        const currentRole = getValues('jobRole');
        if(!currentRole.includes(role) && currentRole.length < 3){
            setValue('jobRole', [...currentRole, role])
            return
        }else if(!currentRole.includes(role) && currentRole.length === 3){
            setValue('jobRole', [...currentRole.splice(1), role])
            return
        }
        const newRole = currentRole.filter(item => item !== role)
        setValue('jobRole', newRole)
    }

    return(
        <Fragment>
            <Typography gutterBottom style={{color: "#9e9e9e"}}>ความถนัดของพนักงานคนนี้</Typography>
            <Grid container spacing={1} alignItems="start">
                <Controller
                    name="jobSpecialization"
                    control={control}
                    render={(field)=>(
                        <>
                            {jobSpecialization.map(specialization => (
                                <Grid key={`specialization_${specialization}`} item xs={6} sm={4}>
                                    <StyledSpecialization onClick={()=>{onClickSpecialization(specialization)}} selected={specialization === getValues('jobSpecialization')}>
                                        <Typography textAlign="center">{specialization}</Typography>
                                    </StyledSpecialization>
                                </Grid>
                            ))}
                        </>
                    )}
                />
            </Grid>
            {jobSpecializationWatched && <div style={{marginTop: 48}}>
                <Typography gutterBottom style={{color: "#9e9e9e"}}>เลือก 3 บทบาทที่บอกถึงพนักงานคนนี้</Typography>
                <Grid container spacing={1} alignItems="start">
                    <Controller
                        name="jobRole"
                        control={control}
                        render={(field)=>(
                            <>  
                                {jobRole[getValues('jobSpecialization')]?.map(role => (
                                    <Grid key={`role_${role}`} item xs={6} sm={4}>
                                        <StyledRole onClick={()=>{onClickRole(role)}} selected={getValues('jobRole').includes(role)}>
                                            <Typography textAlign="center">{role}</Typography>
                                        </StyledRole>
                                    </Grid>
                                ))}
                            </>
                        )}
                    />
                </Grid>
            </div>}

            <div style={{marginTop: 48}}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography gutterBottom style={{color: "#9e9e9e"}}>เพิ่มทักษะอื่น ๆ</Typography>
                    <Button className="btn-addSkill" startIcon={<i className="fa-solid fa-plus"></i>} variant="outlined" style={{paddingLeft: 32, paddingRight: 32}} onClick={()=>{jobSkillAppend({skill: "", year: ""})}}>เพิ่มทักษะ</Button>
                </Stack>
                {jobSkillFields.map((item, index) => (
                    <StyledSkill key={item.id}>
                        <Controller
                            control={control}
                            id={`jobSkill.${index}.skill`}
                            name={`jobSkill.${index}.skill`}
                            render={({field})=>(
                                <TextFieldTheme {...field} placeholder="ชื่อทักษะ" />
                            )}
                        />
                        <Controller
                            control={control}
                            id={`jobSkill.${index}.year`}
                            name={`jobSkill.${index}.year`}
                            render={({field})=>(
                                <TextFieldTheme {...field} placeholder="ปี" select>
                                    <MenuItem value={0}>น้อยกว่า 1 ปี</MenuItem>
                                    <MenuItem value={1}>1 ปี</MenuItem>
                                    <MenuItem value={2}>2 ปี</MenuItem>
                                    <MenuItem value={3}>3 ปี</MenuItem>
                                    <MenuItem value={4}>4 ปี</MenuItem>
                                    <MenuItem value={5}>5 ปี</MenuItem>
                                    <MenuItem value={6}>6 ปี</MenuItem>
                                    <MenuItem value={7}>7 ปี</MenuItem>
                                    <MenuItem value={8}>8 ปี</MenuItem>
                                    <MenuItem value={9}>มากกว่า 9 ปี</MenuItem>
                                </TextFieldTheme>
                            )}
                        />
                        <IconButton style={{width: 40, height: 40}} onClick={()=>{jobSkillRemove(index)}}><i className="fa-solid fa-trash-can"></i></IconButton>
                    </StyledSkill>
                ))}
            </div>
        </Fragment>
    )
}

export default InformationTwo;