import React, { useEffect } from "react";
import data from "./data";
import "./Feed.css"
import Tweet from "./Tweet";
export default function Feed(){


    //var data= data;
    //console.log(feedData[0].picture.thumbnail)
    const [feedData,setFeedData]=React.useState(data.results);


    React.useEffect(()=>{
        async function getUser(){
            const res=await fetch("https://randomuser.me/api/?results=10")
            const data=await res.json()
            setFeedData(data.results);
        }
        getUser();
    },[])
    
    const toShowOnFeed=[]
     
    for(let i=0;i<feedData.length;i++){
        toShowOnFeed.push(
            <Tweet 
                    key={i}
                    profileImg={feedData[i].picture.thumbnail}
                    firstName={feedData[i].name.first}
                    lastName={feedData[i].name.last}
                    location={feedData[i].location.street.number}
                     />
        )
    }

    return(
            <>
                {toShowOnFeed}
            </>
    )
}






// <div className="profile-pic">
//                 <img src={feedData[0].picture.thumbnail}></img>
//             </div>
//             <div className="tweet container-fluid">
//                 <div className="data-name">
//                     <b>{`${feedData[0].name.first} ${feedData[0].name.last} `}</b>
//                     {`${feedData[0].name.first}${feedData[0].name.last}@${feedData[0].location.street.number} `}
//                 </div>
//                 <div className="containt">Hello there!!!</div>
//                 <div className="dash-board d-flex justify-content-between"><i className="bi bi-chat"></i><i className="bi bi-arrow-down-up"></i><i className="bi bi-heart"></i><i className="bi bi-upload"></i></div>
//             </div>









