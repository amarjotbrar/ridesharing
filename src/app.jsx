import Navbar  from "./components/Navbar";
import Graphs from "./components/Graphs";
import Footer from "./components/Footer";

function app(){
    return(
        <>
        <Navbar /> {/*navigation bar*/}

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