import React from "react";
import { useSelector } from "react-redux";
import Header from "./../header";
import Routing from "./../routing";

const App = () => {
    const state = useSelector(state => state);
    console.log(state);
    return (
        <div className="container">
            <div className="wrapper">
                <Header />
                <main className="main">
                    <Routing />
                </main>
            </div>
        </div>
    );
};

export default App;
