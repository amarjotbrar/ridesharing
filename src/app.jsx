import react from "react";
import Navbar  from "./components/Navbar";
import TimeRange from "./components/TimeRange";
import Graphs from "./components/Graphs";
import Footer from "./components/Footer";

function app(){
    return(
        <>
        <Navbar />
        <div className="headings">
            <h1>Welcome to the Analytics Dashboard,</h1>
            <h3>Analyse your customers and business growth....</h3>
        </div>

        <Graphs />
        <Footer />
        </>
    )
}

export default app;