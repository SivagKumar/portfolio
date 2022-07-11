import { useState, useEffect } from "react";
import { makeStyles, Tabs, Tab, Typography, Box, Link, useTheme, useMediaQuery } from "@material-ui/core";
import { Language, LinkedIn } from "@material-ui/icons";
import IconBtn from "../../components/IconBtn";
import { useTranslation } from "react-i18next";

const StyledTabs = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles({ isMobile });
    const [value, setValue] = useState(0);
    const [experienceLists, setExperienceList] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const handleChange = (event, newValue) => {
            setValue(newValue);
    };

    useEffect(() => {
        const fetchExperiences = async () => {
            const response = await fetch('https://react-portfolio-30258-default-rtdb.firebaseio.com/experience.json');
            if (!response.ok) {
                throw new Error("Something went wrong!")
            }

            const responseData = await response.json();

            const loadedExperiences = [];
            for (const key in responseData) {
                loadedExperiences.push({
                    id: key,
                    company: responseData[key].company,
                    links: responseData[key].links
                });
            }
            setExperienceList(loadedExperiences);
            setIsFetching(false);
            console.log(loadedExperiences)
        };

        fetchExperiences().catch((error) => {
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
        <div className={classes.root}>
            <Tabs
                orientation={isMobile ? "horizontal" : "vertical"}
                value={value}
                onChange={handleChange}
                className={classes.tabs}
                classes={{ indicator: classes.indicator }}
                centered
            >
                {experienceLists.map((elem) => (
                    <Tab label={elem.company} key={elem.id} />
                ))}
            </Tabs>
            {experienceLists.map((elem) => (
                <TabPanel value={value} index={elem.id} key={elem.id}>
                    <Box mb={4}>
                        <Typography variant="h5">
                            {t(`experience_${elem.id}_job`)} @{" "}
                            <Link
                                href={elem.links.website || elem.links.linkedIn}
                                color="primary"
                            >
                                {elem.company}
                            </Link>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" fontSize="14">
                            {t(`experience_${elem.id}_duration`)}
                        </Typography>
                    </Box>
                    <Box mb={4}>
                        <Typography variant="body1" color="textPrimary">
                            {t(`experience_${elem.id}_overview`)}
                        </Typography>
                    </Box>
                    <Box>
                        {elem.links.website && (
                            <IconBtn icon={Language} fontSize={28} m={1} href={elem.links.website} />
                        )}
                        {elem.links.linkedIn && (
                            <IconBtn icon={LinkedIn} fontSize={28} m={1} href={elem.links.linkedIn} />
                        )}
                    </Box>
                </TabPanel>
            ))}
        </div>
    );
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div
            role="tabpanel"
            hidden={value != index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value == index && (
                <Box p={3} minHeight={isMobile ? 0 : "350px"}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.main,
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: (props) => (props.isMobile ? "column" : "row"),
    },
    tabs: {
        borderRight: (props) => (props.isMobile ? "none" : `1px solid ${theme.palette.secondary.main}`),
        borderBottom: (props) => (!props.isMobile ? "none" : `1px solid ${theme.palette.secondary.main}`),
        width: (props) => (props.isMobile ? "inherit" : "200px"),
        maxWidth: (props) => (props.isMobile ? "inherit" : "200px"),
        minWidth: (props) => (props.isMobile ? "inherit" : "200px"),
    },
    indicator: {
        backgroundColor: "red",
    },
}));

export default StyledTabs;
