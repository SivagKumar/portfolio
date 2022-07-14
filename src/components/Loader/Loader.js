import React from "react";
import LoaderContainer from "../../containers/LoaderContainer";
import CircularStatic from "./loaderAnimation";

const Loader = () => {

    return (
        <LoaderContainer>
            <CircularStatic/>
        </LoaderContainer>
    );
};

export default Loader;
