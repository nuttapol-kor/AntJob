import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  dropzone: {
    border: `2px dashed #1976d2`,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    height: 100,
    outline: "none",
    padding: 20,
    gap: 10,
  },
}));

const UploadFile = ({setData}) => {
  const classes = useStyles();
  const url = "http://127.0.0.1:8000/resume/extraction";
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      await axios
        .post(url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          setData(res.data)
          console.log(res.data)
        })
        .catch((err) => console.log(err));
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <>
      <div {...getRootProps({ className: classes.dropzone })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <>
            {/* <p>Drop the file here ...</p> */}
            <Typography>วางไฟล์ได้ที่นี่...</Typography>
          </>
        ) : (
          <>
            <UploadFileOutlinedIcon sx={{ fontSize: 50, color: "#1976d2" }} />
            {/* <p>Drag 'n' drop a file here, or click to select a file</p> */}
            <Typography>
              คุณสามารถลากและวางไฟล์เรซูเม่ได้ที่นี่, หรือคลิ๊กเพื่อเลือกไฟล์
            </Typography>
          </>
        )}
      </div>
    </>
  );
};

export default UploadFile;
