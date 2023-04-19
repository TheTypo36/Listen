import styled from "styled-components";
import GoogleAuth from "./GoogleAuth";
import SignUp from "./SignUp";
const SignIn = () => {
  return (
    <>
      <Logo>
        <img src="/C:Users/Administrator/Desktop/Listen/listen/assets/images/listen-logo.png" />
      </Logo>
      <SignInMethods>
        <div>
          <GoogleAuth />
        </div>
        <SignInContainer>
          <form action="" method="">
            <p>Email address </p>
            <input type="Em ail" name="Email" placeholder="Email address" />
            <p>Password</p>
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">LOG IN</button>
          </form>
          <CreateOpt>
            <p>Don't Have Listen Account</p>
            <a href={<SignUp />}>SIGN UP FOR SPOTIFY</a>
          </CreateOpt>
        </SignInContainer>
      </SignInMethods>
    </>
  );
};
const Logo = styled.div`
  img {
    display: block;
    height: 20%;
  }
`;
const SignInMethods = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-color: #ffff;
  button {
    background-color: #1ed760;
  }
`;
const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    padding: 5px;
  }
  p {
    font-color: black;
  }
`;
const CreateOpt = styled.div``;
export default SignIn;
