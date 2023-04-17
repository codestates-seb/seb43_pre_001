import styled from "styled-components";
import SignupWith from "./SignupMaterial/SignupWith";
import SignupForm from "./SignupMaterial/SignupForm";

const StackSignupBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const RealSignupBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 776px;
  height: 558px;
`;

const LeftTxt = styled.div`
  width: 411px;
  height: 285px;
  color: #000;
  text-shadow: 0 0 0 #000;

  h3 {
    font-size: 25px;
    margin-bottom: 32px;
  }
  span {
    font-size: 15px;
  }
  i {
    text-shadow: none;
  }

  .ques {
    width: 234px;
    height: 21px;
    display: flex;
    align-items: center;

    .i-speech-icon {
      font-size: 18px;
      margin-right: 10px;
    }
  }

  .updown {
    width: 372px;
    height: 24px;
    display: flex;
    align-items: center;
    margin-top: 24px;

    .i-updown-icon {
      font-size: 25px;
      margin-right: 10px;
    }
  }

  .tags {
    width: 301px;
    height: 26px;
    display: flex;
    align-items: center;
    margin-top: 23px;

    .i-tags-icon {
      font-size: 25px;
      margin-right: 9px;
    }
  }

  .prize {
    width: 219px;
    height: 22px;
    display: flex;
    align-items: center;
    margin-top: 24px;

    .i-prize-icon {
      font-size: 25px;
      margin-right: 10px;
    }
  }

  .mini-txt {
    width: 385px;
    height: 32px;
    margin-top: 27px;
    font-weight: 400;

    span {
      font-size: 12.5px;
      color: #7d848c;
      text-shadow: 0 0 0 #7d848c;
    }

    .blue-txt {
      color: #0074cc;
      text-shadow: 0 0 0 #0074cc;
      cursor: pointer;

      &:hover {
        color: #4baafb;
        text-shadow: 0 0 0 #4baafb;
      }
    }
  }
`;

const RightSignup = styled.div`
  width: 317px;
  height: 558px;
`;

const StackSignup = () => {
  return (
    <StackSignupBlock>
      <RealSignupBlock>
        <LeftTxt>
          <h3>Join the Stack Overflow community</h3>

          <div className="ques">
            <i className="i-speech-icon" />
            <span>Get unstuck — ask a question</span>
          </div>

          <div className="updown">
            <i className="i-updown-icon" />
            <span>Unlock new privileges like voting and commenting</span>
          </div>

          <div className="tags">
            <i className="i-tags-icon" />
            <span>Save your favorite tags, filters, and jobs</span>
          </div>

          <div className="prize">
            <i className="i-prize-icon" />
            <span>Earn reputation and badges</span>
          </div>

          <div className="mini-txt">
            <span>Collaborate and share knowledge with a private group for FREE.</span>
            <br />
            <span className="blue-txt">Get Stack Overflow for Teams free for up to 50 users.</span>
          </div>
        </LeftTxt>

        <RightSignup>
          {/* Signup Google, Signup Github, Signup Facebook 버튼 구역 */}
          <SignupWith />
          {/* Signup Form 구역 */}
          <SignupForm />
        </RightSignup>
      </RealSignupBlock>
    </StackSignupBlock>
  );
};

export default StackSignup;
