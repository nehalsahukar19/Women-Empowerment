import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import slide1 from "../../images/guidance/Courses-after-12th.jpg";

export default function After12th() {
    return (
        <div className="container1">
            <h1 className="heading" style={{ marginTop:'4rem' }}>
                Courses After 12th Standard
            </h1>
            <img src={slide1}></img>
            
        </div>
        
    );
}