import React from "react";
import Header from "./../header";
import Routing from "./../routing";

const App = () => {
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
