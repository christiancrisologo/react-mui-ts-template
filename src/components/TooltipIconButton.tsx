import React from "react";

import Tooltip from "./Tooltip";

interface TooltipIconButtonProps {
    children: any;
    title: string;
    tooltipProps?: any;
    onClick:
        | ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void)
        | undefined;
}
const TooltipIconButton: React.FC<TooltipIconButtonProps> = ({
    children,
    title,
    tooltipProps,
    onClick,
}) => {
    return (
        <Tooltip title={title} {...tooltipProps} onClick={onClick}>
            {children}
        </Tooltip>
    );
};

export default TooltipIconButton;
