import "./style.css";
import DashboardLandComponent from "../../components/DashboardLandComponent.jsx";

const landData = [
  {
    id: "1",
    friendImage: "friends/mathematics.png",
    landImage: "/lands/land1.png",
    name: "Numberland",
    progress: "50",
  },
  {
    id: "2",
    friendImage: "friends/saving.png",
    landImage: "/lands/land2.png",
    name: "Savings Treehouse",
    progress: "0",
  },
  {
    id: "3",
    friendImage: "friends/taxes.png",
    landImage: "/lands/land1.png",
    name: "TaxTown",
    progress: "100",
  },
  {
    id: "4",
    friendImage: "friends/investing.png",
    landImage: "/lands/land2.png",
    name: "Investmen Woods",
    progress: "80",
  },
  {
    id: "5",
    friendImage: "friends/loans.png",
    landImage: "/lands/land1.png",
    name: "Loan Lake",
    progress: "60",
  },
  {
    id: "6",
    friendImage: "friends/investing.png",
    landImage: "/lands/land2.png",
    name: "Imagination Jungle",
    progress: "20",
  },
  
];

function HomePage() {
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

export default HomePage;
