import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    height: 50px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid gray;
`;
const Header = () => {
    return <StyledHeader>게시판을 만들어보자</StyledHeader>;
};

export default Header;
