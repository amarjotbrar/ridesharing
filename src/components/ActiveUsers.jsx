import React from "react";
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import twelveact from "../data/twelveact";

const options = {
   
    series: [{
        data: twelveact
    }]
}


function ActiveUsers() {
    return (
        <>
            <div className="activeUser">
                <h1>Active user</h1>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        </>
    )

}

export default ActiveUsers;