import React from "react";

const TextArea = ({ field, onChange }) => {
  return (
    <div className="mb-3">
      <textarea
        type={field.field_type}
        label={field.field_label}
        placeholder={field.field_placeholder}
        required={field.field_required}
        onChange={onChange}
        className="form-control"
        id="floatingTextarea2"
        style={{ height: "100px" }}
      ></textarea>
    </div>
  );
};

export default TextArea;
