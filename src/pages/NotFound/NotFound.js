import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

const NotFound = () => {
    const classes = useStyles();
    return <Typography variant="h1" className={classes.centered}> Page Not Found! </Typography>
};

const useStyles = makeStyles((theme) => ({
    centered: {
        margin: "20rem",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));
export default NotFound;

