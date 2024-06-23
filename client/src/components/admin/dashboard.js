import React from "react";
import Header from "./header";
const Dashboard=()=>
{
    return (
        <div>
            <div className="wrapper">
                {<Header />}
                <div className="main">
                    <div className="top-heading">
                        <h1>
                        <i className="fa-solid fa-house-chimney"></i>
                            <span>Dashboard</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Dashboard;