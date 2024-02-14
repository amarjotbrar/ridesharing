import React from "react";

function Navbar(){
    return(
        <nav className="NavigationBar">
            <div className="logo"><span class="material-symbols-outlined">no_crash</span></div>
            <div className="buttons">
                <a href="/"><div className="homebutton">HOME</div></a>
            </div>
        </nav>
    )
}

export default Navbar;