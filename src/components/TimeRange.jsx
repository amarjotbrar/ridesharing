import React, { useState } from "react";
import Button from '@mui/material/Button';

function TimeRange({ onTimeRangeChange }) {
    const [active ,setactive] = useState("6");

    const handleClick = (months) => {
        onTimeRangeChange(months);
        setactive(months.toString());
    };


    return (
        <div className="timeContainer">
            <Button id="12"   variant="outlined" onClick={() => handleClick(12)}>12 Months</Button>
            <Button id="6"  variant='outlined' onClick={() => handleClick(6)}>6 Months</Button>
            <Button id="7" variant="outlined" onClick={() => handleClick(7)}>7 Days</Button>
            <Button id="24" variant="outlined" onClick={() => handleClick(24)}>24 Hours</Button>
        </div>
    );
}

export default TimeRange;