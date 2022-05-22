import React from "react";
import styled from "styled-components";

const StyledNav = styled.div`
    /* background-color: gray; */
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 0.5px solid gray;
`;

const Nav = () => {
    return (
        <StyledNav>
            <div>상의</div>
            <div>하의</div>
            <div>속옷</div>
            <div>신발</div>
        </StyledNav>
    );
};

export default Nav;
