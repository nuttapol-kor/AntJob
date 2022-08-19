import React, { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Typography, CircularProgress } from "@mui/material";
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

const UploadFile = ({ setData }) => {
  const classes = useStyles();
  const url = "http://127.0.0.1:8000/resume/extraction";
  const [loading, setLoading] = useState(false);
  const onDrop = useCallback((acceptedFiles) => {
    setLoading(true);
    acceptedFiles.forEach(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      await axios
        .post(url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  const dropArea = () => {
    if (!loading) {
      if (isDragActive) {
        return (
          <>
            <Typography>วางไฟล์ได้ที่นี่...</Typography>
          </>
        );
      } else {
        return (
          <>
            <UploadFileOutlinedIcon sx={{ fontSize: 50, color: "#1976d2" }} />
            <Typography>
              คุณสามารถลากและวางไฟล์เรซูเม่ได้ที่นี่, หรือคลิ๊กเพื่อเลือกไฟล์
            </Typography>
          </>
        );
      }
    } else {
      return (
        <>
          <CircularProgress />
          <Typography>กำลังประมวลผล...</Typography>
        </>
      );
    }
  };

  return (
    <>
      <div {...getRootProps({ className: classes.dropzone })}>
        <input {...getInputProps()} />
        {dropArea()}
      </div>
    </>
  );
};

export default UploadFile;
