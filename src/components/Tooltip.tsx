import { Tooltip as TooltipBase, Typography } from "@material-ui/core";
import React from "react";

const Tooltip = ({ children, html, title }: any) => {
    return (
        <TooltipBase
            title={
                <React.Fragment>
                    <Typography variant="caption" color="inherit">
                        {title}
                    </Typography>
                    {html}
                </React.Fragment>
            }
            arrow
        >
            {children}
        </TooltipBase>
    );
};

export default Tooltip;
