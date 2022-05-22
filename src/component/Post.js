import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPost = styled.div`
    border-bottom: 0.3px solid gray;
    display: flex;
    padding: 15px 0;
`;

const Number = styled.div`
    /* background-color: gray; */
    width: 3%;
    text-align: center;
`;

const Title = styled.div`
    /* background-color: gray; */
    width: 70%;
    text-align: left;
    margin-left: 30px;
`;

const TitleLink = styled(Link)`
    width: 70%;
    text-align: left;
    margin-left: 30px;
    text-decoration-line: none;
    color: black;
`;

const Writer = styled.div`
    /* background-color: gray; */
    width: 12%;
    text-align: center;
    margin-left: 60px;
`;

const Time = styled.div`
    /* background-color: gray; */
    width: 13%;
    text-align: center;
    margin-left: 10px;
`;

//해당 게시글을 눌렀을때 해당 컴포넌트로 들어가서

const Post = ({ board }) => {
    return (
        <StyledPost>
            <Number>{board.id}</Number>
            <TitleLink to={`viewContent/${board.id}`}>
                <Title>{board.title}</Title>
            </TitleLink>
            <Writer>{board.writer}</Writer>
            <Time>{board.date}</Time>
        </StyledPost>
    );
};

export default Post;
