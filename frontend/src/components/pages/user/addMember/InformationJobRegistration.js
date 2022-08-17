import React from "react";
import { styled, Typography } from "@mui/material";

const StyledRoot = styled('div')({
    "& .title": {
        fontSize: 16,
        color: "#9e9e9e",
    },
    "& .margin-Bottom": {
        marginBottom: 24,
    }
})

const InformationJobRegistration = (props) => {
    const { watch: generalWatch } = props.generalForm;
    const { watch: informationOneWatch } = props.informationOneForm;
    const { watch: informationTwoWatch } = props.informationTwoForm;

    const firstname = generalWatch('firstName');
    const lastname = generalWatch('lastName');

    const jobLevel = informationOneWatch('jobLevel');
    const yearOfExperience = informationOneWatch('yearOfExperience');
    const jobType = informationOneWatch('jobType');
    const expectedSalary = informationOneWatch('expectedSalary');
    const currentSalary = informationOneWatch('currentSalary');

    const jobSpecialization = informationTwoWatch('jobSpecialization');
    const jobRole = informationTwoWatch('jobRole');
    const jobSkill = informationTwoWatch('jobSkill');

    const showYearOfExperience = () => {
        if(yearOfExperience === ''){
            return ''
        }
        if(yearOfExperience === 0){
            return `ประสบการณ์ น้อยกว่า 1 ปี`
        }
        else if(yearOfExperience === 9){
            return `ประสบการณ์ มากกว่า 9 ปี`
        }
        else{
            return `ประสบการณ์ ${yearOfExperience} ปี`
        }
    }

    const showJobSkill = (skill) => {
        if(skill.skill === '' || skill.year === ''){
            return ''
        }
        if(skill.year === 0){
            return `${skill.skill} (น้อยกว่า 1 ปี)`
        }
        else if(skill.year === 9){
            return `${skill.skill} (มากกว่า 9 ปี)`
        }
        else{
            return `${skill.skill} (${skill.year} ปี)`
        }
    }

    return(
        <StyledRoot>
            <Typography className="margin-Bottom" fontSize={20} gutterBottom>{`พนักงานที่จะถูกเพิ่ม..`}</Typography>
            <Typography className="margin-Bottom" fontSize={20} gutterBottom>{`${firstname} ${lastname}`}</Typography>
            <Typography fontSize={20} gutterBottom>{jobLevel && <span className="title">ระดับตำแหน่ง</span>} {`${jobLevel? `${jobLevel}`: ``}`}</Typography>
            <Typography className="margin-Bottom" fontSize={20} gutterBottom>{`${showYearOfExperience()}`}</Typography>
            {jobType.length > 0 && <Typography className="title" gutterBottom>กำลังมองหา</Typography>}
            <Typography className="margin-Bottom" fontSize={20} gutterBottom>{`${jobType.length > 0? `${jobType.join(', ')}`: ``}`}</Typography>
            <Typography fontSize={20} gutterBottom>{expectedSalary && <span className="title">เงินเดือนที่คาดหวัง</span>} {`${expectedSalary.length > 0? `${expectedSalary} บาท`: ``}`}</Typography>
            <Typography className="margin-Bottom" fontSize={20} gutterBottom>{currentSalary && <span className="title">เงินเดือนปัจจุบัน</span>} {`${currentSalary.length > 0? `${currentSalary} บาท`: ``}`}</Typography>
            <Typography fontSize={20} gutterBottom>{jobSpecialization.length > 0 && <span className="title">ความถนัด</span>} {`${jobSpecialization.length > 0? `${jobSpecialization}`: ``}`}</Typography>
            {jobRole.length > 0 && <Typography className="title" gutterBottom>บทบาท</Typography>}
            <Typography fontSize={20} gutterBottom whiteSpace="break-spaces" style={{wordBreak: "break-word"}}>{`${jobRole.length > 0? `${jobRole.join(`\n`)}`: ``}`}</Typography>
            {jobSkill.length > 0 && <Typography className="title" gutterBottom>ทักษะ</Typography>}
            <Typography fontSize={20} gutterBottom whiteSpace="break-spaces" style={{wordBreak: "break-word"}}>{`${jobSkill.map(skill=>showJobSkill(skill)).join('\n')}`}</Typography>
        </StyledRoot>
    )
}

export default InformationJobRegistration;