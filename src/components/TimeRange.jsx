import React from "react";
import Button from '@mui/material/Button';

function TimeRange(){
    return(
        <>
        <div className="timeContainer">
            <Button id="twelvebutton" variant="outlined">12 Months</Button>
            <Button id="sixbutton" variant="outlined">6 Months</Button>
            <Button id="sevenbutton" variant="outlined">7 Days</Button>
            <Button id="hoursbutton" variant="outlined">24 Hours</Button>
        </div>
        </>
    )
}

export default TimeRange;