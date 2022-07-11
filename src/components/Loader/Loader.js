import React from "react";
import LoaderContainer from "../../containers/LoaderContainer";
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
const Loader = () => {

    return (
        <LoaderContainer>
            <HourglassEmptyIcon style={{ fontSize: 100 }}/>
        </LoaderContainer>
    );
};

export default Loader;
