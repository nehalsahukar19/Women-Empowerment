import React from "react";
import "./After10th.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import slide1 from "../../images/guidance/Courses-after-10th.png";

export default function After10th() {
    return (
        <div className="container1">
            <h1 className="heading" style={{ marginTop:'4rem' }}>
                Courses After 10th Standard
            </h1>
            <img src={slide1}></img>
            <div className="course">
                <div className="science">Science</div>
                <div className="science">Science stream offers you a perfect mix of practical concepts and scientific theories that ultimately builds analytical problem-solving skills. Understanding the various concepts of Physics, Chemistry, and Biology; will help you have a better idea about a bunch of natural and artificial processes around us. With the advancement of technology, many unique fields have sprung from science, such as Nanotechnology, Biotechnology, Bioinformatics, Mechatronics, and many more. Along with these, the traditional ones like Medicine, Engineering, Pharmaceuticals, Computer Science, and Forensic Science are also prevalent among the students.</div>
            </div>

            <div className="course">
                <div className="science">Commerce</div>
                <div className="science">If you want to dive deep into the world of business, economics, marketing, and statistics, then, commerce is the field for you. It will take you on a journey driven into the whole supply and demand phenomenon of the market. Commerce stream subjects are a mix of mandatory and elective ones through which you will be able to acquire a unique skill set.</div>
            </div>

            <div className="course">
                <div className="science">Arts</div>
                <div className="science">Arts stream offers numerous career options and opportunities to students. It is a very traditional stream. This is one of the main reasons why this stream still has got takers in India! This stream is made up of parts like humanities, visual arts, performing arts, literary arts etc. In this article, you will be reading details about arts stream schooling (11th and 12th) such as- education boards available in India, important subjects to study, professional courses available after 12th, career paths and prospects.</div>
            </div>
        </div>
        
    );
}