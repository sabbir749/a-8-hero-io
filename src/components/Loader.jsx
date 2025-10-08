import React from "react";
import { DnaSpinner } from "react-awesome-components";

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <DnaSpinner size={80} color="#632EE3" />
        </div>
    );
};

export default Loader;
