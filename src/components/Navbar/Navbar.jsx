import Link from "next/link";
import Head from "next/head";
import "./Navbar.css"
function Navbar() {
  return (
    <>
      <nav>
        <div id="logo">
          <img src="/favicon.ico" alt="Icon" />
          <h3>FinanceFriends</h3>
        </div>

        <div>
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
              <Link href="/" legacyBehavior>
                <a>LOG OUT</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
