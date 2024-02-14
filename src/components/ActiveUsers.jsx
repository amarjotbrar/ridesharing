import React, { useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import TimeRange from "./TimeRange";
import { getHourlyRides, getHourlyUsers, getMonthlyUsers, getWeeklyUsers } from "../data/data";

function ActiveUsers() {
    const [timeRange, setTimeRange] = useState(6); // Default time range is 6 months
    const [chartData, setChartData] = useState(getMonthlyUsers(6)[1]); // Initial chart data is for 6 months

    const updateChartData = (months) => {
        console.log("Updating chart data for", months, "months");
        if (months === 6 || months == 12) {
            const [labels, data] = getMonthlyUsers(months);
            setChartData(data);
        } else if (months === 7) {
            setChartData(getWeeklyUsers()); // Set chart data for 7 days
        } else if (months === 24) {
            setChartData(getHourlyUsers()); // Set chart data for 24 hours
        }
    };
    

    const handleTimeRangeChange = (months) => {
        setTimeRange(months);
        updateChartData(months);
    };

    const options = {
        title: {
            text: 'New Users'
          },
        series: [{ data: chartData }]
    };

    return (
        <div className="activeUser">
            {/* <h1>Active user</h1> */}
            <TimeRange onTimeRangeChange={handleTimeRangeChange} />
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}

export default ActiveUsers;