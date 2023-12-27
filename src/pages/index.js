import Image from "next/image";

const styles = {
  homePageTitle: {
    color: '#FFF',
    fontFamily: "Londrina Solid",
    fontSize: "6rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  homepageTitleContainer:{
    WebkitTextStroke: '5px var(--purple)',
    background: 'url(/bg/bg-homepage.png)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

function HomePage() {
  return (
    <div>
      <div style={styles.homepageTitleContainer}>
        <Image src="/icons/logo.png" alt="logo" width={500} height={500} />
        <div>
          <h1 style={styles.homePageTitle}>FinanceFriends</h1>
          <div>
            <button>Register</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
