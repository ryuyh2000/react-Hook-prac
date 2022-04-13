import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = styled.footer`
  position: absolute;
  transform: translateX(-50%);
  bottom: 30px;
  left: 50%;
  background-color: #ecd1d163;
  width: 100%;
  text-align: center;
`;

const Links = styled(Link)`
  margin: 10px;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <Footer style={{}}>
      <Links to="/">1</Links>
      <Links to="/2">2</Links>
    </Footer>
  );
};

export default NavBar;
