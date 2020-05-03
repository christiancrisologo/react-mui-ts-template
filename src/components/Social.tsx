import { Box, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";

import TooltipIconButton from "./TooltipIconButton";

const Social: React.FC = function () {
    const clickHandler = (url: string) => {
        window.open(url, "_blank");
    };
    return (
        <Box flexDirection="row">
            <Typography variant="caption">Follow me on :</Typography>
            <TooltipIconButton
                title="Linkden"
                onClick={() =>
                    clickHandler("https://www.linkedin.com/in/cyianite/")
                }
            >
                <LinkedInIcon />
            </TooltipIconButton>
            <TooltipIconButton
                title="Github"
                onClick={() =>
                    clickHandler("https://github.com/christiancrisologo")
                }
            >
                <GitHubIcon />
            </TooltipIconButton>
        </Box>
    );
};

export default Social;
