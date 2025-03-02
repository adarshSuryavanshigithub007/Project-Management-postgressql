import React from "react";
import { Link } from "react-router-dom";
import ButtonComponents from "./ButtonComponents";

const AuthFormComponent = ({ 
  elements = () => null, // Default to an empty function to prevent errors
  submitButtonText, 
  onSubmit, 
  authLink, 
  authLinkName, 
  authName 
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px", borderRadius: "10px" }}>
        <h3 className="text-center mb-4">{authName}</h3>

        <form onSubmit={handleSubmit}>
          {elements()} {/* No need for extra checks, thanks to default prop */}
          
          <div className="d-flex justify-content-center">
            <ButtonComponents submitButtonText={submitButtonText} color="primary" />
          </div>
        </form>

        <p className="text-center mt-3">
          <Link to={authLink} className="text-decoration-none">{authLinkName}</Link>
        </p>
      </div>
    </div>
  );
};

export default AuthFormComponent;
