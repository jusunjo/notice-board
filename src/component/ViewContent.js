import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledViewContent = styled.div`
    border: 1px solid black;
    margin: 50px auto;
    width: 60%;
    height: 514px;
`;

const Flex = styled.div`
    display: flex;
    border-bottom: 0.5px solid gray;
`;

const Title = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    /* margin-bottom: 15px; */
    width: 75%;
`;

const TitleName = styled.div`
    background-color: #e0e0e0;
    padding: 10px 30px;
    margin-right: 15px;
    width: 35px;
    height: 20px;
`;

const Writer = styled.div`
    height: 40px;
    width: 30%;
    display: flex;
    align-items: center;
`;

const WriterName = styled.div`
    background-color: #e0e0e0;
    padding: 10px 30px;
    margin-right: 15px;
    width: 45px;
    height: 20px;
`;

const Content = styled.div`
    /* border: 1px solid black; */
    height: 400px;
    margin: 15px 0px 0px 15px;
`;

const Back = styled.button`
    margin-left: 3%;
    margin-top: 2%;
    margin-right: 10px;
`;

const Modify = styled.button``;

const ViewContent = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState("");
    const data = useSelector((it) => it.write.writeList);
    const queryParam = window.location.pathname;
    const queryParamId = parseInt(queryParam.charAt(queryParam.length - 1));
    const urlData = data.filter((it) => {
        return it.id === queryParamId;
    });

    const aaa = urlData[0];

    console.log((aaa.content = 3));

    const navigate = useNavigate();

    const moveHome = () => {
        navigate("/");
    };

    const toggleIsEdit = () => {
        setIsEdit(!isEdit);
    };

    const getText = (e) => {
        setEditText(e.target.value);
    };

    const a = () => {
        console.log(urlData[0].content === editText);
        console.log(editText);
    };

    console.log(editText);

    return (
        <>
            <StyledViewContent>
                <Flex>
                    <Title>
                        <TitleName>제목</TitleName>
                        {urlData[0].title}
                    </Title>
                    <Writer>
                        <WriterName>작성자</WriterName>

                        {urlData[0].writer}
                    </Writer>
                </Flex>
                <Content>{!isEdit ? urlData[0].content : <textarea style={{ width: "97%", height: "300px" }} onChange={getText} />}</Content>
                <Back onClick={moveHome}>뒤로가기</Back>
                {!isEdit ? (
                    <Modify onClick={toggleIsEdit}>수정</Modify>
                ) : (
                    <>
                        <Modify onClick={toggleIsEdit}>수정취소</Modify> <Modify onClick={a}>수정완료</Modify>
                    </>
                )}
            </StyledViewContent>
        </>
    );
};

export default ViewContent;
