import "./style.css";
import DashboardLandComponent from "../../components/Dashboard/DashboardLandComponent.jsx";
import Navbar from "@/components/Navbar/Navbar";
import React, { useContext, useEffect } from "react";
import LandDataContext from "../../context/LandDataContext";
import { useAuth  } from "@/context/AuthProvider";
import { useRouter } from "next/router";

function Dashboard() {
  const landData = useContext(LandDataContext);
  const { currentUser } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (currentUser === undefined) {
      router.push("/login");
    }
  }, [currentUser, router]);

  return (
    <div>
      <Navbar />
    A-{currentUser?.username}
      <div className="dashboardWrapper">
        <div className="dashboardContainer">
          {landData.map((land) => (
            <DashboardLandComponent key={land.id} land={land} user={currentUser} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
