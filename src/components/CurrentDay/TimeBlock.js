import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: inline-block;
  background-color: #4f996d;
  margin: 2px;
  border-radius: 20px;
  padding: 5px;
`;

const P = styled.p`
  margin: 1px;
  color: white;
`;

const Img = styled.img`
  margin: 2px;
  width: 50px;
  height: 50px;
`;

function TimeBlock(props) {
  const time = new Date(props.value.time).getHours();
  const path = `icons/${props.value.icon.slice(0, 2) + "d"}.png`;
  return (
    <Div>
      <P>{time}:00</P>
      <Img src={path} alt={props.value.icon.slice(0, 2) + "d"} />
      <P>{props.value.temperature}&#176;C</P>
    </Div>
  );
}

export default TimeBlock;
