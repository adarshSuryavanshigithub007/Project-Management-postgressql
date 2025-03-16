import React, { useState } from "react";
import AuthFormComponent from "../components/AuthFormComponent";
import { AuthService } from "../services/AuthService";
import { toast } from "react-toastify";
import { setToken } from "../utils/commonUtils/TokenService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/loader/Loader";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../utils/Constant";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, error, userInfo } = useSelector(state => state.userLogin);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  console.log(loading, error, userInfo)

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    dispatch({ type: USER_LOGIN_REQUEST });

    AuthService(`/login`, formData)
      .then((response) => {
        if (response.success === true) {
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: response.data
          });
          navigate('/dashboard')
          setToken({ token: response.data.token });
          toast.success(response.message);
          setErrors({});
        } else {
          dispatch({
            type: USER_LOGIN_FAIL,
            payload: response.response.data.message
          });
          setErrors({
            error: response.message,
            password: response.response.data.error?.password,
            username: response.response.data.error?.username,
          });
          toast.error(response.response.data.message);
          console.log(response.response.data.message);
          console.log(response.response.data.error);
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: error?.response?.data?.message || "Login failed. Please try again."
        });
        toast.error("Login failed. Please try again.");
      });
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
      {loading && <Loader />}
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
