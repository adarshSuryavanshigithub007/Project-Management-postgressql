import { useState } from "react";
import DynamicForm from "../components/forms/DynamicForm";
import loginJson from "../json/LoginForm.json";

console.log(loginJson);

const Login = () => {
const elements = loginJson[0] || {}; // Fallback to an empty object if JSON is empty
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    // Destructure with safe fallback
    const pageLabel = elements.page_label || "No Label Available";
    const fields = elements.field || []; // Default to an empty array if `field` is undefined
    console.log(fields, elements);
    console.log(formData);
    // Handle input changes and update form data
    const handleInputChange = (fieldName, value) => {
        console.log(value);
        console.log(fieldName);
        setFormData((prevData) => ({
        ...prevData,
        [fieldName]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log("Form Submitted:", formData);
        // Add your API call or submission logic here
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
                                        <DynamicForm key={i} field={field} onChange={handleInputChange} />
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

export default Login;
