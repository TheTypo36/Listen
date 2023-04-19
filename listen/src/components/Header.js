import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderContainer>
      <navMenu></navMenu>
      <Logo>
        <img src="/assets/images/profilePic.jpg" alt="profilePic" />
      </Logo>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 70px;
  background-color: #4a1a1a;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.a`
  padding: 0;
  width: 40px;
  img {
    border-radius: 50%;
    width: 100%;
  }
`;

export default Header;
