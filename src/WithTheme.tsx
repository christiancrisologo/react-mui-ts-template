import {
    colors,
    createMuiTheme,
    CssBaseline,
    MuiThemeProvider,
} from "@material-ui/core";
// default MUI colors
import { colors as muiColors } from "@material-ui/core";
import React from "react";

// global colors with application primary and secondary colors setup
export const commonColors: any = {
    ...muiColors,
    tint5: "rgba(255, 255, 255, 0.95)",
    tint10: "rgba(255, 255, 255, 0.9)",
    tint20: "rgba(255, 255, 255, 0.8)",
    tint30: "rgba(255, 255, 255, 0.7)",
    tint40: "rgba(255, 255, 255, 0.6)",
    tint50: "rgba(255, 255, 255, 0.5)",
    tint60: "rgba(255, 255, 255, 0.4)",
    tint70: "rgba(255, 255, 255, 0.3)",
    tint80: "rgba(255, 255, 255, 0.2)",
    tint90: "rgba(255, 255, 255, 0.1)",
    tint100: "rgba(255, 255, 255, 0)",
    shade2: "rgba(0, 0, 0, 0.02)",
    shade5: "rgba(0, 0, 0, 0.05)",
    shade10: "rgba(0, 0, 0, 0.1)",
    shade20: "rgba(0, 0, 0, 0.2)",
    shade30: "rgba(0, 0, 0, 0.3)",
    shade40: "rgba(0, 0, 0, 0.4)",
    shade50: "rgba(0, 0, 0, 0.5)",
    shade60: "rgba(0, 0, 0, 0.6)",
    shade70: "rgba(0, 0, 0, 0.7)",
    shade80: "rgba(0, 0, 0, 0.8)",
    shade90: "rgba(0, 0, 0, 0.9)",
    shade100: "rgba(0, 0, 0, 1)",
    errorColor: "#F5222D",
    warningColor: "#FAAD14",
    successColor: "#4CAF50",
    infoColor: "#2979FF",
    textPrimaryColor: "rgba(0, 0, 0, 0.9)",
    textSecondaryColor: "rgba(0, 0, 0, 0.6)",
    textDisabledColor: "rgba(0, 0, 0, 0.3)",
    primaryColors: colors.orange,
    secondaryColors: colors.yellow,
};

const fontFamily = [
    "Raleway",
    "'Baloo Paaji 2'",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
];

export const defaultTheme = {
    palette: {
        ...commonColors,
        background: {
            default: commonColors.blueGrey[50],
        },
        primary: {
            ...colors.cyan,
            light: colors.orange[200],
            main: colors.orange[700],
            dark: colors.orange[900],
            darker: colors.orange[900],
        },
        secondary: {
            ...colors.yellow,
            light: colors.yellow[200],
            main: colors.yellow[500],
            dark: colors.yellow[700],
            darker: colors.yellow[900],
        },
        errorColors: colors.cyan,
        warningColors: colors.orange,
        successColors: colors.green,
        infoColors: colors.blue,
    },

    typography: {
        useNextVariants: true,
        fontFamily: fontFamily.join(","),
    },
};

interface Props {
    children: JSX.Element | null;
    theme?: any;
}

const WithTheme = ({ children, theme = defaultTheme }: Props) => {
    return (
        <MuiThemeProvider theme={createMuiTheme(theme)}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};

export default WithTheme;
