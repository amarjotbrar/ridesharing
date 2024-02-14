import React, { useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import TimeRange from "./TimeRange";
import twelvenew from "../data/twelvenew"; 
import sixnew from "../data/sixnew";     
import sevennew from "../data/sevennew";   
import twentyfournew from "../data/twentyfournew";

function NewUsers() {
    const [timeRange, setTimeRange] = useState(6); // Default time range is 6 months
    const [chartData, setChartData] = useState(sixnew); // Initial chart data is for 6 months

    const updateChartData = (months) => {
        console.log("Updating chart data for", months, "months");
        if (months === 6) {
            console.log("Setting chart data for 6 months");
            setChartData(sixnew); // Set chart data for 6 months
        } else if (months === 12) {
            console.log("Setting chart data for 12 months");
            setChartData(twelvenew); // Set chart data for 12 months
        } else if (months === 7) {
            console.log("Setting chart data for 7 days");
            setChartData(sevennew); // Set chart data for 7 days
        } else if (months === 24) {
            console.log("Setting chart data for 24 hours");
            setChartData(twentyfournew); // Set chart data for 24 hours
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

export default NewUsers;