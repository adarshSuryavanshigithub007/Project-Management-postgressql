import registerJSON from "../json/AssignTaskDetails.json";
import DynamicForm from "../components/forms/DynamicForm";
import { useState } from "react";

const Register = () => {
const [formData, setFormData] = useState({
    name: "",
    full_name: "",
    user_name: "",
    phone_number:"",
    email: "",
    password: "",
});

// Initialize state directly
const elements = registerJSON[0] || {}; // Fallback to an empty object if JSON is empty

// Destructure with safe fallback
const pageLabel = elements.page_label || "No Label Available";
const fields = elements.field || []; // Default to an empty array if `field` is undefined
console.log("----------",fields);
// Handle input changes and update form data
const handleInputChange = (fieldName, value) => {
    console.log(value);
    console.log(fieldName);
    setFormData((prevData) => ({
    ...prevData,
    [fieldName]: value,
    }));
};
console.log(formData);
const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData);
    console.log("Form Submitted:", formData);
};
return (
    <div>
    <div className="container m-3">
        <div className="row  d-flex justify-content-center align-items-center">
        <div className="col-md-6">
            <div className="card">
            <h5 className="card-header bg-success text-white">{pageLabel}</h5>
            <div className="card-body">
                
                <form onSubmit={handleSubmit}>
                {fields.map((field, i) => (
                    <DynamicForm
                    key={i}
                    field={field}
                    onChange={handleInputChange}
                    />
                    
                ))}
                <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default Register;
