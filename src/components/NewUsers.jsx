import React from "react";
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
        text: 'My chart'
    },
    series: [{
        data: [1, 2, 3]
    }]
}


function NewUsers(){
    return(
        <>
           <div className="newUser">
            <h1>New User</h1>
            <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
           </div>
        </>
    )
}

export default NewUsers;