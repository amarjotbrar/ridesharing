import React, { useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import TimeRange from "./TimeRange";
import { getHourlyRides, getMonthlyRides, getWeeklyRides } from "../data/data";

function NewUsers() {
    const [timeRange, setTimeRange] = useState(6); // Default time range is 6 months
    const [chartData, setChartData] = useState(getMonthlyRides(6)[1]); // Initial chart data is for 6 months

    const updateChartData = (months) => {
        console.log("Updating chart data for", months, "months");
        if (months === 6 || months == 12) {
            const [labels, data] = getMonthlyRides(months);
            setChartData(data);
        } else if (months === 7) {
            console.log("Setting chart data for 7 days");
            setChartData(getWeeklyRides()); // Set chart data for 7 days
        } else if (months === 24) {
            console.log("Setting chart data for 24 hours");
            setChartData(getHourlyRides()); // Set chart data for 24 hours
        }
    };
    

    const handleTimeRangeChange = (months) => {
        setTimeRange(months);
        updateChartData(months);
    };

    const options = {
        title: {
            text: 'Rides'
          },
        series: [{ data: chartData }],
        
    };

    return (
        <div className="newUser">
            <div className="newdiv"><TimeRange onTimeRangeChange={handleTimeRangeChange} /></div>
            <div className="newGraph">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
            </div>
        </div>
    );
}

export default NewUsers;