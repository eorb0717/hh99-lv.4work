import React from "react";
import * as St from "../components/style";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function Join() {
  // id input state 관리
  const [userId, idOnChangeHandler] = useInput("");
  // pw input state 관리
  const [password, pwOnChangeHandler] = useInput("");
  // useNavigate 사용
  const navigate = useNavigate();
  // 로그인하기 클릭시 Login page로 이동
  const navigateClickHandler = () => {
    navigate("/login");
  };
  // 아이디,비밀번호 입력값 data에 담기
  const userData = {
    id: userId,
    pw: password,
  };
  // 서버에 userData request
  const joinButtonHandler = async () => {
    try {
      const { response } = await api.post("/register", userData);
      console.log("response 데이터 값 확인해보기 =>", response);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  return (
    <St.PageLayout>
      <h1 style={{ fontSize: 40 }}>회원가입</h1>
      <St.LoginForm
        onSubmit={(event) => {
          event.preventDefault();
          joinButtonHandler();
        }}
      >
        <label>
          <div style={{ fontSize: 20 }}>아이디</div>
        </label>
        <St.LoginInput
          type="text"
          name="id"
          value={userId}
          onChange={idOnChangeHandler}
        />
        <label>
          <div style={{ fontSize: 20 }}>비밀번호</div>
        </label>
        <St.LoginInput
          type="text"
          name="pw"
          value={password}
          onChange={pwOnChangeHandler}
        />
        <St.LoginJoinButton>회원가입</St.LoginJoinButton>
        <St.LoginJoinButton onClick={navigateClickHandler}>
          로그인하기
        </St.LoginJoinButton>
      </St.LoginForm>
    </St.PageLayout>
  );
}

export default Join;
