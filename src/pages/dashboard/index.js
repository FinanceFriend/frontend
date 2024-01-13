import "./style.css";
import DashboardLandComponent from "../../components/Dashboard/DashboardLandComponent.jsx";
import Navbar from "@/components/Navbar/Navbar";
import React, { useContext } from 'react';
import LandDataContext from '../../context/LandDataContext';

function Dashboard() {
  const landData = useContext(LandDataContext);

  return (
    <div>
      <Navbar/>
    <div className="dashboardWrapper">
      <div className="dashboardContainer">
        {landData.map((land) => (
          <DashboardLandComponent key={land.id} land={land} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
