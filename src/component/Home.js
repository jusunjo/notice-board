import React from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Post from "./Post";

const StyledHome = styled.div`
    width: 90%;
    height: 80vh;
    margin: 60px auto;
`;

const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NoticeBoard = styled.div`
    font-size: 2em;

    padding-bottom: 5px;
`;
const WriteButton = styled.button`
    margin-right: 15px;
`;

const NoticeBoardBox = styled.div`
    margin: 10px auto;
`;

const TopBox = styled.div`
    /* background-color: red; */
    padding: 15px 10px 15px 0;
    border-top: 2px solid black;
    display: flex;
    border-bottom: 0.5px solid gray;
    /* margin-bottom: 10px; */
`;

const Number = styled.div`
    /* background-color: gray; */
    width: 3%;
    text-align: center;
`;

const Title = styled.div`
    /* background-color: gray; */
    width: 73%;
    text-align: center;
`;

const Writer = styled.div`
    /* background-color: gray; */
    width: 15%;
    text-align: center;
`;

const Time = styled.div`
    /* background-color: gray; */
    width: 11%;
    text-align: center;
`;

const Home = () => {
    const data = useSelector((it) => it.write.writeList);

    return (
        <>
            <StyledHome>
                <InfoBox>
                    <NoticeBoard>자유게시판</NoticeBoard>
                    <Link to="/writing">
                        <WriteButton>글쓰기</WriteButton>
                    </Link>
                </InfoBox>
                <NoticeBoardBox>
                    <TopBox>
                        <Number>No</Number>
                        <Title>제목</Title>
                        <Writer>글쓴이</Writer>
                        <Time>작성시간</Time>
                    </TopBox>
                    {data.map((board) => <Post key={board.id} board={board} />).reverse()}
                </NoticeBoardBox>
            </StyledHome>
        </>
    );
};

export default Home;
