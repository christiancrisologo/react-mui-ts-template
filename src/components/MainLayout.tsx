import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

import Layout from "./Layout";
import Social from "./Social";

const useStyles = makeStyles((theme: any) => ({
    footer: {
        left: 0,
        bottom: 0,
        width: "100%",
        marginTop: theme.spacing(50),
        padding: theme.spacing(3),
        color: theme.palette.shade60, // eslint-disable-line
        marginBottom: -theme.spacing(3),
        textAlign: "center",
        borderTop: "1px solid rgba(0,0,0,.2)",
    },
}));

interface MainLayoutProps {
    children: React.ReactNode;
}
interface FooterProps {
    children: JSX.Element[] | JSX.Element | null;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.footer}>{children}</div>;
};
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Layout title="Application">
            {children}
            <Footer>
                <Typography variant="body2">
                    CHRISTIAN R. CRISOLOGO - Full-stack / Senior Frontend
                    Developer
                </Typography>
                <Social />
            </Footer>
        </Layout>
    );
};

export default MainLayout;
