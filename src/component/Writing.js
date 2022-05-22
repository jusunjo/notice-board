import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { insert } from "../modules/write";

const StyledWriting = styled.div`
    width: 60%;
    height: 80vh;
    margin: 60px auto;
`;

const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

const NoticeBoard = styled.div`
    font-size: 2em;

    padding-bottom: 5px;
`;

const CancelButton = styled.button``;

const WriteForm = styled.div`
    margin: auto;
`;

const WriteTitle = styled.input`
    margin: 10px 10px 10px 0;
    width: 100%;
`;

const WriteWriter = styled.input`
    margin: 10px 10px 10px 0;
    width: 100%;
`;

const WriteContent = styled.textarea`
    margin: 10px 10px 10px 0;
    width: 100%;
    height: 20vh;
`;

const Writing = () => {
    const [form, setForm] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChange = (e) => {
        let today = new Date();

        setForm({
            ...form,
            [e.target.name]: e.target.value,
            date: today.toLocaleDateString(),
        });
    };

    const HandleWriteButton = () => {
        dispatch(insert(form));
        navigate("/");
    };

    return (
        <StyledWriting>
            <InfoBox>
                <NoticeBoard>게시글 쓰기</NoticeBoard>
                <CancelButton>
                    <Link to="/">취소</Link>
                </CancelButton>
            </InfoBox>
            <WriteForm>
                <div>제목</div>
                <WriteTitle name="title" onChange={onChange} />
                <div>작성자</div>
                <WriteWriter name="writer" onChange={onChange} />
                <div>내용</div>
                <WriteContent type="text" name="content" onChange={onChange} />
            </WriteForm>
            <button onClick={HandleWriteButton}>완료</button>
        </StyledWriting>
    );
};

export default Writing;
