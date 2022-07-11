import {useEffect, useState} from "react";
import {Box, makeStyles, Paper, Typography} from "@material-ui/core";
import ProgressBar from "./ProgressBar";

function LinearProgressWithLabel({ title, value }) {
    const classes = useStyles();
    return (
        <div className={classes.skillWrapper}>
            <Typography variant="body2" display="inline" component="span" className={classes.skillTitle}>
                {title}
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
                <Box width="100%" mr={1}>
                    <ProgressBar value={value} />
                </Box>
            </Box>
        </div>
    );
}

const Skills = () => {
    const classes = useStyles();
    const [skills, setSkills] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchSkills = async () => {
            const response = await fetch('https://react-portfolio-30258-default-rtdb.firebaseio.com/skills.json');
            if (!response.ok) {
                throw new Error("Something went wrong!")
            }

            const responseData = await response.json();

            const loadedSkills = [];
            for (const key in responseData) {
                loadedSkills.push({
                    id: key,
                    title: responseData[key].title,
                    value: responseData[key].value
                });
            }
            setSkills(loadedSkills);
            setIsFetching(false);
        };

        fetchSkills().catch((error) => {
            setIsFetching(false);
            setHttpError(error.message);
        });

    }, []);

    if (isFetching) {
        return (<section><p>loading...</p></section>)
    }

    if (httpError) {
        return (<section><p>{httpError}</p></section>)
    }

    return (
        <div className={classes.container}>
            {skills.map((elem) => (
                <Paper elevation={10} key={elem.id} className={classes.paper}>
                    <Typography align="center" >{elem.title}</Typography>
                </Paper>
            ))}
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: "600px",
        display: "flex",
        flexWrap:"wrap"
    },
    skillWrapper: {
        width: "100%",
    },
    skillTitle: {
        whiteSpace: "nowrap",
        marginRight: theme.spacing(1),
    },
    paper:{
        marginRight:"10px",
        marginBottom:"10px",
        minWidth:"50px",
        padding:"10px"
    }
}));

export default Skills;
