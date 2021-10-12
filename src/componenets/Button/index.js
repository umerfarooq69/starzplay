import React from "react";
import { StyledButton } from "../../styledComponents";

const Button = (props) => {
    const { children } = props
    // Use it like any other component.
    return <StyledButton> {children} </StyledButton>;
}

export default Button