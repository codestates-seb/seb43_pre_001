import styled from "styled-components";
import stackLogo from "../../assets/stack-logo.svg";
import LoginWith from "./LoginMaterial/LoginWith";
import LoginForm from "./LoginMaterial/LoginForm";

const StackLoginBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const RealLoginBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 288px;
  height: 502px;

  .logo-img {
    width: 31px;
  }
`;

const BelowTxt = styled.div`
  width: 192px;
  height: 15px;
  color: #000;
  font-size: 12.8px;
  text-shadow: 0 0 0 #000;
  margin-top: 41px;

  .blue-txt {
    color: #0074cc;
    text-shadow: 0 0 0 #0074cc;
    cursor: pointer;

    &:hover {
      color: #4baafb;
    }
  }
`;

const StackLogin = () => {
  return (
    <StackLoginBlock>
      <RealLoginBlock>
        <div className="logo-img">
          <img src={stackLogo} alt="logo" />
        </div>
        {/* Login Google, Login Github, Login Facebook 버튼 구역 */}
        <LoginWith />

        {/* Login Form 구역 */}
        <LoginForm />

        <BelowTxt>
          {/* Sign up 글자 부분에 라우터를 사용해서 signup페이지로 이동 시켜야 함 */}
          <span>
            Don't have an account? <span className="blue-txt">Sign up</span>
          </span>
        </BelowTxt>
      </RealLoginBlock>
    </StackLoginBlock>
  );
};

export default StackLogin;
