import React, { lazy } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
const MainHome = lazy(() => import("./pages/MainHome"));
const Navbar = lazy(() => import("./components/Navbar"));
const Social = lazy(() => import("./components/Social"));
const Footer = lazy(() => import("./components/Footer"));
const Loader = lazy(() => import("./components/Loader"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Routes = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <Switch>
                <Route exact path="/" >
                    <Loader />
                    <Navbar />
                    {!isMobile && <Social />}
                    <MainHome/>
                    <Footer />
                </Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </>
    );
};

export default Routes;
