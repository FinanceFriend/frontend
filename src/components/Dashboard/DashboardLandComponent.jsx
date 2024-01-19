import Link from "next/link";
import "./DashboardLandComponent.css";
import { LinearProgress } from "@mui/material";

function DashboardLandComponent({ land, user }) {
  return (
    <Link href={`/lessons/${land.id}`} passHref>
      <div className="landContainer">
        <div style={{ position: "relative" }}>
          <img className="landImage" src={land.landImage} alt="logo" />
          <img className="landImageFreind" src={land.friendImage} alt="logo" />
        </div>
        <div className="nameContainer">
          <p className="name">{land.name}</p>
          <LinearProgress
            className="landProgress"
            color="success"
            variant="determinate"
            value={user?.stats.completionPercentages[land.id]}
          ></LinearProgress>
        </div>
      </div>
    </Link>
  );
}

export default DashboardLandComponent;
