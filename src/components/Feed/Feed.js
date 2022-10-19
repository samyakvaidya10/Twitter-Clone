import React from "react";
import data from "./data";
import "./Feed.css"
export default function Feed(){


    //var data= data;
    //console.log(data.results[0].picture.thumbnail)

    return(
        <div className="data-feed d-flex">
            <div className="profile-pic">
                <img src={data.results[0].picture.thumbnail}></img>
            </div>
            <div className="tweet container-fluid">
                <div className="data-name">
                    <b>{`${data.results[0].name.first} ${data.results[0].name.last} `}</b>
                    {`${data.results[0].name.first}${data.results[0].name.last}@${data.results[0].location.street.number} `}
                </div>
                <div className="containt">Hello there!!!</div>
                <div className="dash-board d-flex justify-content-between"><i className="bi bi-chat"></i><i className="bi bi-arrow-down-up"></i><i className="bi bi-heart"></i><i className="bi bi-upload"></i></div>
            </div>
        </div>
    )
}