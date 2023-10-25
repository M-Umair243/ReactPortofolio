import React from 'react';
import Card from "./Card";
import "./Resume.css";
import ResumeApi from "./ResumeApi";

function Resume() {
    return (
        <>
            <section className='Resume' id='resume'>
                <div className="container top">
                    <div className="heading text-center">
                        <h4>7+ YEARS OF EXPRUCENCE</h4>
                        <h1>My Resume</h1>
                    </div>

                    <div className="content-section mtop d-flex">
                        <div className="left">
                            <div className="heading">
                                <h4>2007-2010</h4>
                                <h1>Education Quality</h1>
                            </div>

                            <div className="content">
                                {ResumeApi.map((val, id)=>{
                                    if(val.category==="Education"){
                                        return <Card key={id} title={val.title} year={val.Year} rate={val.rate} desc={val.desc}/>
                                    }
                                })}
                                 
                            </div>
                        </div>
                        <div className="left">
                            <div className="heading">
                                <h4>2007-2010</h4>
                                <h1>Job Experience</h1>
                            </div>

                            <div className="content">
                                {ResumeApi.map((val, id)=>{
                                    if(val.category==="experience"){
                                        return <Card key={id} title={val.title} year={val.Year} rate={val.rate} desc={val.desc}/>
                                    }
                                })}
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume;
