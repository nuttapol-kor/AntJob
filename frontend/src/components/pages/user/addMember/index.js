import React, { useState } from "react";
import StyledPage from "../../shared/general/StyledPage";
import { Button, Container, Divider, styled, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InformationJobRegistration from "./InformationJobRegistration";
import GeneralForm from "./GeneralForm";
import InformationOneForm from "./InformationOneForm";
import InformationTwoForm from "./InformationTwoForm";
import InformationThreeForm from "./InformationThreeForm";
import UploadFile from "./UploadFile";
// import CheckMemberForm from "./CheckMemberForm";

const StyledRoot = styled("div")({
  "& .register_form_container": {
    display: "grid",
    gridGap: 16,
    gridAutoFlow: "dense",
    "& .controller": {
      marginTop: 24,
      display: "flex",
      justifyContent: "space-between",
    },
    "& .form-title": {
      marginBottom: 24,
    },
    "& .flex-end": {
      justifyContent: "flex-end",
    },
    "& .margin-Bottom": {
      marginBottom: 24,
    },
    "& form": {
      order: -1,
    },
    "@media (min-width: 900px)": {
      gridTemplateColumns: "400px auto",
      "& form": {
        order: 1,
      },
    },
  },
  "& .check_member_container": {
    "& .check_title": {
      marginBottom: 24,
      fontSize: 24,
      fontWeight: 500,
    },
  },
  "& .MuiDivider-root": {
    margin: "24px 0",
  },
});

const generalSchema = yup.object().shape({
  firstName: yup.string().required("This field is required."),
  lastName: yup.string().required("This field is required."),
  mobileNumber: yup
    .string()
    .matches(/^[0-9]{10}/, {
      message: "เบอร์ไม่ถูกต้อง",
      excludeEmptyString: true,
    }),
  email: yup.string().email("Must be a valid email"),
});

const informationOneSchema = yup.object().shape({});

const informationTwoSchema = yup.object().shape({});

const informationThreeSchema = yup.object().shape({});

const checkMemberSchema = yup.object().shape({
  firstName: yup.string().required("This field is required."),
  lastName: yup.string().required("This field is required."),
});

const AddMember = () => {
  // const { skipHandler } = props;
  const [activeStep, setActiveStep] = useState(0);
  const [resumeData, setResumeData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    skills: [],
    education: [],
    experience: [],
  });

  const checkMemberForm = useForm({
    resolver: yupResolver(checkMemberSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const generalForm = useForm({
    resolver: yupResolver(generalSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
    },
  });

  const informationOneForm = useForm({
    resolver: yupResolver(informationOneSchema),
    defaultValues: {
      jobLevel: "",
      yearOfExperience: "",
      jobType: [],
      expectedSalary: "",
      currentSalary: "",
    },
  });

  const informationTwoForm = useForm({
    resolver: yupResolver(informationTwoSchema),
    defaultValues: {
      jobSpecialization: "",
      jobRole: [],
      jobSkill: [],
    },
  });

  const informationThreeForm = useForm({
    resolver: yupResolver(informationThreeSchema),
    defaultValues: {
      jobExperience: [],
      education: [],
    },
  });

  const getStep = (index) => {
    switch (index) {
      case 0:
        return <GeneralForm formProps={generalForm} fetchData={resumeData} />;
      case 1:
        return (
          <InformationOneForm
            formProps={informationOneForm}
            fetchData={resumeData}
          />
        );
      case 2:
        return (
          <InformationTwoForm
            formProps={informationTwoForm}
            fetchData={resumeData}
          />
        );
      case 3:
        return (
          <InformationThreeForm
            formProps={informationThreeForm}
            fetchData={resumeData}
          />
        );
    }
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const onSubmit = (data) => {
    if (activeStep === 3) {
      console.log(generalForm.getValues());
      console.log(informationOneForm.getValues());
      console.log(informationTwoForm.getValues());
      console.log(informationThreeForm.getValues());
      return;
    }
    handleNext();
  };

  const onCheckSubmit = (data) => {
    console.log(data);
  };

  const onSelectSubmit = () => {
    switch (activeStep) {
      case 0:
        return generalForm.handleSubmit(onSubmit);
      case 1:
        return informationOneForm.handleSubmit(onSubmit);
      case 2:
        return informationTwoForm.handleSubmit(onSubmit);
      case 3:
        return informationThreeForm.handleSubmit(onSubmit);
    }
  };

  return (
    <StyledPage className="page">
      <StyledRoot>
        {/* <Container className="check_member_container">
                    <form onSubmit={checkMemberForm.handleSubmit(onCheckSubmit)}>
                        <CheckMemberForm formProps={checkMemberForm} />
                    </form>
                </Container> */}
        <Container>
          <Divider />
        </Container>
        <Container className="register_form_container">
          <InformationJobRegistration
            generalForm={generalForm}
            informationOneForm={informationOneForm}
            informationTwoForm={informationTwoForm}
          />
          <form onSubmit={onSelectSubmit()}>
            {getStep(activeStep)}
            <div className={`controller ${activeStep === 0 ? "flex-end" : ""}`}>
              {activeStep > 0 && (
                <Button
                  className="btn-back"
                  variant="contained"
                  onClick={() => {
                    setActiveStep((prev) => prev - 1);
                  }}
                >
                  Back
                </Button>
              )}
              <Button variant="contained" type="submit">
                Next
              </Button>
            </div>
          </form>
        </Container>
        <Container>
          <Divider />
          <UploadFile setData={setResumeData} />
        </Container>
      </StyledRoot>
    </StyledPage>
  );
};

export default AddMember;
