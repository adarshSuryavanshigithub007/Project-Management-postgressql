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
  const { error, userInfo } = useSelector(state => state.userLogin);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  console.log(error, userInfo)

  const handleSubmit = async () => {
  dispatch({ type: USER_LOGIN_REQUEST });
  dispatch({ type: 'LOADING_START' });

  try {
    const authResponse = await AuthService(`/login`, formData);
    console.log(authResponse);

    if (authResponse.success === true) {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: authResponse.data,
      });

      setToken({ token: authResponse.data.token });
      toast.success(authResponse.message);
      navigate('/dashboard');
      setErrors({});
    } else {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: authResponse.response?.data?.message,
      });

      setErrors({
        error: authResponse.message,
        password: authResponse.response?.data?.error?.password,
        username: authResponse.response?.data?.error?.username,
      });

      toast.error(authResponse.response?.data?.message);
    }
  } catch (error) {
    console.error('Unexpected error:', error);

    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error?.response?.data?.message,
    });

    toast.error(error?.response?.data?.message);
  } finally {
    dispatch({ type: 'LOADING_END' });
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
