import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";
import "./Navbar.css";
import { useRouter } from 'next/router';


function Navbar() {
  const { logout } = useAuth(); 
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/'); 
  };
  return (
    <>
      <nav>
      
        <div id="logo" style={{cursor: "pointer"}}> 
          <Link href="/dashboard" passHref legacyBehavior><img src="/favicon.ico" alt="Icon" /></Link>
          <Link href="/dashboard" passHref legacyBehavior><h3>FinanceFriends</h3></Link>          
        </div>
       
        <div id="color">
          <ul id="navbar">
            <li>
              <Link href="/dashboard" legacyBehavior>
              <a>DASHBOARD</a>
              </Link>
            </li>
            <li>
              <Link href="/leaderboard" legacyBehavior>
                <a>LEADERBOARD</a>
              </Link>
            </li>
            <li>
              <Link href="/profile" legacyBehavior>
                <a>PROFILE</a>
              </Link>
            </li>
            <li id="logout">
              <div onClick={handleLogout} style={{cursor: "pointer"}}>
                <a>LOG OUT</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
