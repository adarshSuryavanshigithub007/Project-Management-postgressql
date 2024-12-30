import React, { useState } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const FileUploadContainer = styled(Box)(({ theme }) => ({
  border: `2px dashed ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
  transition: "all 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const FileUpload = ({ field, onChange }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Set file name for display
      onChange(field.field_id, file); // Pass file to the parent form
    }
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {field.field_label}
      </Typography>
      <FileUploadContainer>
        <input
          id={`file-input-${field.field_id}`}
          style={{ display: "none" }}
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor={`file-input-${field.field_id}`}>
          <Button
            variant="contained"
            component="span"
            startIcon={<CloudUploadIcon />}
            sx={{ mb: 2 }}
          >
            Choose File
          </Button>
        </label>
        {fileName ? (
          <Typography variant="body1" sx={{ mt: 1 }}>
            Selected File: <strong>{fileName}</strong>
          </Typography>
        ) : (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            click "Choose File" to upload.
          </Typography>
        )}
      </FileUploadContainer>
    </Box>
  );
};

export default FileUpload;
