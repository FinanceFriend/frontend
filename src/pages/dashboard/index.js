import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import DashboardLandComponent from "../../components/Dashboard/DashboardLandComponent.jsx";
import LandDataContext from "../../context/LandDataContext";
import { useAuth } from "@/context/AuthProvider";
import "./style.css";

function Dashboard() {
  const landData = useContext(LandDataContext);
  const router = useRouter();
  
  const { currentUser, currentUserStats, refreshProfileStats } = useAuth();

  useEffect(() => {
    if (currentUser === undefined) {
      router.push("/login");
    } else {
      console.log("RESFRESH STATS CALL");
      refreshProfileStats();
    }
  }, [currentUser, router]); 

  return (
    <div>
      <Navbar />
      <div className="dashboardWrapper">
        <div className="dashboardContainer">
          {landData.map((land) => (
            <DashboardLandComponent key={land.id} land={land} userStats={currentUserStats} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
