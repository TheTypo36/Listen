import styled from "styled-components";
const SignUp = () => {
  return (
    <>
      <Logo>
        <img src="../../assets/images/listen-logo.png" />
      </Logo>
      <SignUpContainer>
        <form>
          <p>What's your email?</p>
          <input type="email" name="name" placeholder="Enter your email." />
          <p>Create a Password</p>
          <input
            type="password"
            name="password"
            placeholder="Enter your passsword."
          />
          <p>Confirm you password</p>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter your password again."
          />
          <p>What should we call you?</p>
          <input
            type="text"
            name="username"
            placeholder="Enter the profile name."
          />
        </form>
      </SignUpContainer>
    </>
  );
};
const Logo = styled.div``;
const SignUpContainer = styled.div``;
export default SignUp;
