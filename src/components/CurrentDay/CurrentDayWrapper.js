import React from "react";
import TimeBlock from "./TimeBlock";
import styled from "styled-components";

const Ul=styled.ul`
    text-align:center;
    padding:0px;
    margin: 0 30px;
`;

function CurrentDayWrapper(props){

    let timeWeather=[];

    function TimeForecast(key, time, temp, precipitationIcon){
        this.key=key;
        this.time=time;
        this.temperature=temp;
        this.icon=precipitationIcon;
    };

    if (props.weatherArray){
        //console.log(props.weatherArray[0]);
        //console.log(props.weatherArray[1]);


        for (let i=0; i<props.weatherArray.length/2; i++){
            let currentDay=props.weatherArray[i];
            timeWeather[i]=new TimeForecast(i, currentDay.dt*1000, currentDay.temp, currentDay.weather[0].icon);
        }
        //console.log(timeWeather);

        const timeInfo = timeWeather.map(timeWeather =>
            <TimeBlock key={timeWeather.key.toString()} value={timeWeather} />
          );
        return(
            <Ul>
                {timeInfo}
            </Ul>
        )
    }
    else{
        return(<div></div>)
    }
}

export default CurrentDayWrapper;