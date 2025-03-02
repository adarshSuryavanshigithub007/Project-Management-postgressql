import React, { useState } from "react";
import AuthFormComponent from "../components/AuthFormComponent";
import { AuthService } from "../services/AuthService";
import { toast } from "react-toastify";
import { setToken } from "../utils/commonUtils/TokenService";
import { useNavigate } from "react-router-dom";

const Login = () => {
 const navigate =  useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    try {
      // API call to login
      AuthService(`/login`, formData).then((response) => {
        if (response.success === true) {
          setToken({ token: response.data.token }); // Pass as an object
          navigate('/dashboard')
          toast.success(response.message);
          setErrors({});
        } else {
          setErrors({
            error: response.message,
            password: response.response.data.error?.password,
            username: response.response.data.error?.username,
          });
          toast.error(response.response.data.message);
          console.log(response.response.data.message);
          console.log(response.response.data.message);
          console.log(response.response.data.error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <>
      <AuthFormComponent
        onSubmit={handleSubmit}
        submitButtonText="Login"
        authLink="/auth/forgotPassword"
        authLinkName="Forgot Password?"
        authName="Login"
        elements={() => (
          <>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter username"
                onChange={handleChange}
                value={formData.username}
              />
            </div>
            {errors.username && (
              <div className="text-danger">{errors.username}</div>
            )}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            {errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}
          </>
        )}
      />
    </>
  );
};

export default Login;
