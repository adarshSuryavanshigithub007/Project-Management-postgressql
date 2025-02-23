import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonComponents from './ButtonComponents';

const FormComponent = ({ elements, submitButtonText, onSubmit, }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <Form onSubmit={handleSubmit}>
            {elements()}
            
            {/* <Button >{submitButtonText}</Button> */}
            <ButtonComponents submitButtonText ={submitButtonText} color="primary"/>
        </Form>
    );
};

export default FormComponent;