import styled from "styled-components";
import stackLogo from "../../assets/stack-logo.svg";

const StackFootBlock = styled.footer`
  display: flex;
  height: 321px;
  justify-content: center;
  align-items: center;
  background-color: #232629;
`;

const RealFootBlock = styled.div`
  width: 1264px;
  height: 265px;
  margin-bottom: 18px;
  display: flex;

  li {
    font-size: 12.5px;
    color: #8e979f;
    text-shadow: 0 0 0 #8e979f;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
      color: #a1a5ac;
    }
  }

  .bold {
    font-size: 12.5px;
    color: #b4b9bd;
    font-weight: 800;
    margin-bottom: 18px;
    cursor: pointer;
    &:hover {
      color: #b4b9bd;
    }
  }

  .stack-logo {
    img {
      width: 31px;
      cursor: pointer;
    }
  }

  .stack-overflow {
    width: 119px;
    height: 73px;
    margin: 10px 0 0 33px;
  }

  .produsts {
    width: 72px;
    height: 123px;
    margin: 10px 0 0 95px;
  }

  .company {
    width: 101px;
    height: 248px;
    margin: 10px 0 0 96px;
  }

  .stack-exchange-network {
    width: 187px;
    height: 239px;
    margin: 10px 0 0 94px;

    .api {
      margin-top: 26px;
    }
  }

  .small-txt {
    color: #8e979f;
    text-shadow: 0 0 0 #8e979f;
    font-size: 11px;
    margin: 16px 0 0 99px;
    width: 270px;
    height: 249px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .top-txt {
      width: 255px;
      height: 13px;
      cursor: pointer;

      span:not(:first-of-type) {
        margin-left: 11px;
      }

      &:hover {
        color: #a1a5ac;
      }
    }

    .bottom-txt {
      width: 270px;
      height: 42px;

      span {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

const StackFoot = () => {
  return (
    <StackFootBlock>
      <RealFootBlock>
        {/* 로고 누르면 메인 페이지로 이동하도록 라우터 설정해 줘야 함 */}
        <div className="stack-logo">
          <img src={stackLogo} alt="logo" />
        </div>

        <ul className="stack-overflow">
          <li className="bold">STACK OVERFLOW</li>
          <li>Questions</li>
          <li>Help</li>
        </ul>

        <ul className="produsts">
          <li className="bold">PRODUCTS</li>
          <li>Teams</li>
          <li>Advertising</li>
          <li>Collectives</li>
          <li>Talent</li>
        </ul>

        <ul className="company">
          <li className="bold">COMPANY</li>
          <li>About</li>
          <li>Press</li>
          <li>Work Here</li>
          <li>Legal</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Contact Us</li>
          <li>Cookie Setting</li>
          <li>Cookie Policy</li>
        </ul>

        <ul className="stack-exchange-network">
          <li className="bold">STACK EXCHANGE NETWORK</li>
          <li>Technology</li>
          <li>Culture & recreation</li>
          <li>Life & arts</li>
          <li>Science</li>
          <li>Professional</li>
          <li>Business</li>
          <li className="api">API</li>
          <li>Data</li>
        </ul>

        <div className="small-txt">
          <div className="top-txt">
            <span>Blog</span>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Instagram</span>
          </div>

          <div className="bottom-txt">
            <p>
              Site design / logo © 2023 Stack Exchange Inc; user contributions licensed under <span>CC BY-SA</span>. rev 2023.4.12.43383
            </p>
          </div>
        </div>
      </RealFootBlock>
    </StackFootBlock>
  );
};

export default StackFoot;
