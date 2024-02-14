import React from "react";
import Button from '@mui/material/Button';

function TimeRange(){
    return(
        <>
        <div className="timeContainer">
            <Button variant="outlined">12 Months</Button>
            <Button variant="outlined">6 Months</Button>
            <Button variant="outlined">7 Days</Button>
            <Button variant="outlined">24 Hours</Button>
        </div>
        </>
    )
}

export default TimeRange;