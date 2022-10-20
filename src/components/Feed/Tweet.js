import React from "react";

export default function(props){
    return(
        <div className="data-feed d-flex">
             <div  className="profile-pic">
                 <img src={props.profileImg}></img>
             </div>
             <div className="tweet container-fluid">
                 <div className="data-name">
                     <b>{`${props.firstName} ${props.lastName} `}</b>
                     {`${props.firstName}${props.lastName}@${props.location} `}
                 </div>
                 <div className="containt">Hello there!!!</div>
                 <div className="dash-board d-flex justify-content-between"><i className="bi bi-chat"></i><i className="bi bi-arrow-down-up"></i><i className="bi bi-heart"></i><i className="bi bi-upload"></i></div>
             </div>
        </div>
    )
}





// <div className="data-feed d-flex">
//              <div  className="profile-pic">
//                  <img src={feedData[0].picture.thumbnail}></img>
//              </div>
//              <div className="tweet container-fluid">
//                  <div className="data-name">
//                      <b>{`${feedData[0].name.first} ${feedData[0].name.last} `}</b>
//                      {`${feedData[0].name.first}${feedData[0].name.last}@${feedData[0].location.street.number} `}
//                  </div>
//                  <div className="containt">Hello there!!!</div>
//                  <div className="dash-board d-flex justify-content-between"><i className="bi bi-chat"></i><i className="bi bi-arrow-down-up"></i><i className="bi bi-heart"></i><i className="bi bi-upload"></i></div>
//              </div>
//         </div>




