import React from "react";
import FileUpload from "./formComponents/FileUpload";
import Inputs from "./formComponents/Inputs";
import MultiSelect from "./formComponents/MultiSelect";
import Selects from "./formComponents/Select";
import TextArea from "./formComponents/TextArea";

const DynamicForm = ({ field, onChange }) => {
  const handleChange = (event) => {
    const { value } = event.target;

    // Validate input
    if (field.function && typeof field.function === "function") {
      const isValid = field.function(value);
      console.log("Validation result:", isValid);
    }

    // Handle file inputs separately
    if (field.field_type === "file") {
      const file = event.target.files[0];
      onChange(field.field_id, file); // Pass file object
      return;
    }

    onChange(field.field_id, value); // Pass updated value
  };

  switch (field.field_type) {
    case "text":
    case "TextArea":
    case "date":
      return <Inputs field={field} onChange={handleChange} />;
    case "file":
      return <FileUpload field={field} onChange={onChange} />;
    case "select":
      return <Selects field={field} onChange={handleChange} />;
    case "multiselect":
      return <MultiSelect field={field} onChange={handleChange} />;
    case "Textarea":
      return <TextArea field={field} onChange={handleChange} />;
    default:
      return null;
  }
};

export default DynamicForm;
