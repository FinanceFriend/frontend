import "./style.css";
import DashboardLandComponent from "../../components/Dashboard/DashboardLandComponent.jsx";

import React, { useContext } from 'react';
import LandDataContext from '../../context/LandDataContext';

function Dashboard() {
  const landData = useContext(LandDataContext);

  return (
    <div className="dashboardWrapper">
      <div className="dashboardContainer">
        {landData.map((land) => (
          <DashboardLandComponent key={land.id} land={land} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
