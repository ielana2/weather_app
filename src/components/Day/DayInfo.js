import React from "react";
import styled from "styled-components";

const Div=styled.div`
    border:0.5px solid;
    border-radius:10px;
    float:left;
    display: inline-block;
    margin: 20px 5px;
    width:220px;
    height:170px;
    background-color:#4F996D;
    color:white;
`;

const DateP=styled.p`
    display:block;
    font-weight:bold;
    margin: 2px 0px 2px 5px;
`;

const Temperature=styled.p`
    display:block;
    text-align:left;
    font-size:12px;
    margin:10px;
    float:left;
`;

const Span=styled.span`
    font-size:20px;
`;

const Img=styled.img`
    width:50px;
    height:50px;
    display:block;
    margin:0;
    float:right;
`;

const Weather=styled.p`
    display:block;
    font-size:12px;
    margin:0;
    text-align:right;
    margin-top:10px;
`;

const Parameters=styled.p`
    display:block;
    font-size:12px;
    margin:5px;
`;

const ParametersDiv=styled.div`
    float:left;
    display:block;
    margin-top:0px;
    width:220px;
    text-align:left;
`;

function DayInfo(props){
    //console.log(props.value.precipitation.precipitationIcon);
    //console.log(props.value.date);
    const date=new Date(props.value.date);
    const dateNumber=date.getDate();
    const day=date.toString().slice(0, 3);
    const month=date.toString().slice(4, 7);
    //console.log(date);
    const path=`icons/${props.value.precipitation.precipitationIcon}.png`;
    //console.log(path);
    return(
        <Div>
                <DateP>{day}, {month} {dateNumber}</DateP>
                <Temperature><Span>{props.value.temperature.temp}&#176;C</Span><br />Feels like {props.value.temperature.feelsLike}&#176;C</Temperature>
                <Img src={path} alt={props.value.precipitation.precipitationIcon}/> {/*icon*/}
                <Weather>{props.value.precipitation.prec[0].toUpperCase() + props.value.precipitation.prec.slice(1)}</Weather>
                <ParametersDiv>
                    <Parameters>Humidity {props.value.humidity}%</Parameters>
                    <Parameters>Pressure {props.value.pressure}hPa</Parameters>
                    <Parameters>Wind {props.value.wind.windSpeed}m/s {props.value.wind.windDir}</Parameters>
                </ParametersDiv>
            </Div>
    );
}

export default DayInfo;