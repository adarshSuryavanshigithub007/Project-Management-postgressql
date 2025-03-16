import React from 'react';
import './style.css'

const Loader = () => {



    return (
        <div className="loader-overlay">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;
