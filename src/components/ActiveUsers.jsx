import React from "react";
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
   
    series: [{
        data: [1, 2, 3, 5 , 3 , 7]
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