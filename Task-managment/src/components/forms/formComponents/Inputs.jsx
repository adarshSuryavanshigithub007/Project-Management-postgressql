import { TextField } from "@mui/material";

/* eslint-disable react/prop-types */
const Inputs = ({ field, onChange }) => {
  console.log(field.field_type);
  return (
    <div>
      <div className="mb-3">
        <TextField
          type={field.field_type}
          label={field.field_label}
          placeholder={field.field_placeholder}
          id="outlined-size-small"
          size="small"
          required={field.field_required}
          onChange={onChange}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </div>
  );
};

export default Inputs;
