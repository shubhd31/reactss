import * as React from "react";
import { memo } from "react";
import "./UserProfileCard.css";

function UserProfileCard(props: {
  user: {
    avatar: string;
    first_name:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal;
    last_name:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal;
    email: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
  };
}): JSX.Element {
  return (
    <>
      <div className="userProfileCard">
        <img src={props.user.avatar} alt="user_avatar" />
        <p className="cardUserName p-0 m-0">
          {props.user.first_name} {props.user.last_name}
          <span className="userDot">&#729;</span>
        </p>
        <p className="cardUserEmail m-0">{props.user.email}</p>
        <p className="cardUserPlan m-0">Your Plan: Standard</p>
        <button>Active User</button>
        <label className="cardUserPlanUsage p-0 mb-0">Plan Uses</label>
        <div className="totalPlanUsage">
          <div className="currentPlanUsage"></div>
        </div>
        <div className="clicksNumWrapper">
          <div className="clicksReviewed">
            <div className="clicksNum1">2,450</div>
            <div className="clicksNumText1">Clicks reviewed</div>
          </div>
          <div className="clicksVerticleLine"></div>
          <div className="monthlyClicks">
            <div className="clicksNum2">5000</div>
            <div className="clicksNumText2">Monthly clicks</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(UserProfileCard);
