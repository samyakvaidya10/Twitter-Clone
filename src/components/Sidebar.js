import React from "react";
export default function Sidebar(){
    return(
        <div className="side-bar">
            <img id="logo" src="https://img.icons8.com/fluency-systems-regular/48/000000/twitter.png"/>
            <div></div>
            <a className="btn btn-light rounded-pill" href="#" role="button"><i className="bi bi-house-heart-fill"></i> Home</a>
            <div></div>
            <a className="btn btn-light rounded-pill" href="#" role="button"><i className="bi bi-hash"></i> Explore</a>
            <div></div>
            <a className="btn btn-light rounded-pill" href="#" role="button"><i className="bi bi-people"></i> Communities</a>
            <div></div>
            <a className="btn btn-light rounded-pill" href="#" role="button"><i className="bi bi-bell"></i> Notifications</a>
            <div></div>
            <a className="btn btn-light rounded-pill" href="#" role="button"><i className="bi bi-envelope"></i> Messages</a>
            <div></div>
            <a className="btn btn-light rounded-pill" href="#" role="button"><i className="bi bi-bookmark"></i> Bookmarks</a>
            <div></div>
            <a className="btn btn-light rounded-pill" href="#" role="button"><i className="bi bi-person"></i> Profile</a>
            <div></div>
            <a className="btn btn-light rounded-pill" href="#" role="button"><i className="bi bi-dash-circle"></i> More</a>
            <div></div>
            <a id="sidebar-tweet-btn" className="btn btn-primary rounded-pill " href="#" role="button">Tweet</a>
        </div>
    )
}