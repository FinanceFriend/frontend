import Link from "next/link";
import "./DashboardLandComponent.css";
import { LinearProgress } from "@mui/material";

function DashboardLandComponent({ land }) {
  return (
    <Link href="/lessons" passHref>
      <div className="landContainer">
        <div style={{position: 'relative'}}>
        <img className="landImage" src={land.landImage} alt="logo" />
          <img className="landImageFreind" src={land.friendImage} alt="logo" />
        </div>
        <div className="landNameContainer">
          <p class="landName">{land.name}</p>
          <LinearProgress className="landProgress" color="success"
            variant="determinate"
            value={land.progress}
          ></LinearProgress>
        </div>
      </div>
    </Link>
  );
}

export default DashboardLandComponent;
