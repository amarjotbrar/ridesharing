import React from "react";
import ActiveUsers from "./ActiveUsers";
import NewUsers from "./NewUsers";

function Graphs() {
    return (
        <>
            <div className="graphs">
                <div className="newUserGraph"><NewUsers /></div>
                <div className="activeUserGraph"><ActiveUsers /></div>
            </div>
        </>
    )
}

export default Graphs;