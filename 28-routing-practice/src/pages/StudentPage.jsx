import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const BlueText = styled.span`
  color: blue;
`;

const RedText = styled.span`
  color: red;
`;

export default function StudentPage() {
  const { studentName } = useParams();
  console.log(studentName);

  const [realName, setRealName] = useSearchParams();
  console.log(realName.get("name"));

  const navigate = useNavigate();
  return (
    <>
      <p>
        학생 이름은 <BlueText>{studentName}</BlueText> 입니다.
      </p>
      {realName.get("name") && (
        <p>
          실제 학생 이름은 <RedText>{realName.get("name")}</RedText>입니다.
        </p>
      )}
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </>
  );
}