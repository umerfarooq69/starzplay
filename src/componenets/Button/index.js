import React from "react";
import styled from "styled-components";

// Styled component named StyledButton
const StyledButton = styled.button
    `background-color: #fd8f58;
        color: #fff;
        padding: 10px 70px;
        box-shadow: 0 0 0 0 !important;
        border: 0px;`
    ;

const Button = (props) => {
    const { children } = props
    // Use it like any other component.
    return <StyledButton> {children} </StyledButton>;
}

export default Button