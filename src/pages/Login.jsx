import React from "react";
import * as St from "../components/style";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function Login() {
  // id input state 관리
  const [userId, idOnChangeHandler] = useInput("");

  // pw input state 관리
  const [password, pwOnChangeHandler] = useInput("");

  // useNavigate 사용
  const navigate = useNavigate();
  // 회원가입 클릭시 Join page로 이동
  const navigateClickHandler = () => {
    navigate("/join");
  };

  // 서버로 부터 데이터 받아보기
  const loginButtonHandler = async () => {
    const response = await api.post("/login");
    console.log("response 데이터 확인 =>", response);
  };

  return (
    <St.PageLayout>
      <h1 style={{ fontSize: 40 }}>로그인</h1>
      <St.LoginForm
        onSubmit={(event) => {
          event.preventDefault();
          loginButtonHandler();
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
        <St.LoginJoinButton>로그인</St.LoginJoinButton>
        <St.LoginJoinButton onClick={navigateClickHandler}>
          회원가입
        </St.LoginJoinButton>
      </St.LoginForm>
    </St.PageLayout>
  );
}

export default Login;
