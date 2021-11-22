import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: left;
  margin: 0;
  padding: 10px 40px;
  background-color: #4f996d;
  font-size: 20px;
  color: white;
  font-style: italic;
`;

function Header() {
  return <H1>Saint-Petersburg</H1>;
}

export default Header;
