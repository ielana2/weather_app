import React from "react";
import DayInfo from "./DayInfo";

function DayWrapper(props){
    let weekWeather=[];

    function DayForecast(key, date, temp, feelsLike, humidity, pressure, windDir, windSpeed, prec, precipitationIcon){
        this.key=key;
        this.date=date;
        this.temperature={
            'temp':temp,
            'feelsLike':feelsLike
        };
        this.humidity=humidity;
        this.pressure=pressure;
        this.wind={
            'windDir':windDir,
            'windSpeed':windSpeed
        };
        this.precipitation={
            'prec':prec,
            'precipitationIcon':precipitationIcon
        };
    };

    if (props.weatherArray){
        for (let i=0; i<props.weatherArray.length-1; i++){
            let currentDay=props.weatherArray[i];
            let windDirection;
            if(currentDay.wind_deg===0)
                windDirection="N";
            else if (currentDay.wind_deg>0 && currentDay.wind_deg<90)
                windDirection="NE";
            else if (currentDay.wind_deg===90)
                windDirection="E";
            else if (currentDay.wind_deg>90 && currentDay.wind_deg<180)
                windDirection="SE";
            else if (currentDay.wind_deg===180)
                windDirection="S";
            else if (currentDay.wind_deg>180 && currentDay.wind_deg<270)
                windDirection="SW";
            else if (currentDay.wind_deg===270)
                windDirection="W";
            else
                windDirection="NW";
            weekWeather[i]=new DayForecast(i, currentDay.dt*1000, currentDay.temp.day, currentDay.feels_like.day, currentDay.humidity, currentDay.pressure, windDirection, currentDay.wind_speed, currentDay.weather[0].description, currentDay.weather[0].icon);
        }

        const dayInfo = weekWeather.map(weekWeather =>
          <DayInfo key={weekWeather.key.toString()} value={weekWeather} />
        );
        return (
          <ul>
            {dayInfo}
          </ul>
        );
    } else{
        return(
            <div />
        );
    };
};

export default DayWrapper;