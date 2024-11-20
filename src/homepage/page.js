import React from "react";

// Navigation Bar Component
function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
        <li style={styles.navItem}><a href="/about" style={styles.navLink}>About</a></li>
        <li style={styles.navItem}><a href="/services" style={styles.navLink}>Services</a></li>
        <li style={styles.navItem}><a href="/contact" style={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  );
}

// Main Home Page Layout
function HomePage() {
  return (
    <div style={styles.container}>
      <Navbar />
      <header style={styles.header}>
        <h1>Welcome to the Home Page</h1>
        <p>Explore our site and learn more about what we offer!</p>
      </header>
      <section style={styles.mainContent}>
        <h2>Our Services</h2>
        <p>We provide excellent services that cater to your needs. Learn more by exploring the pages on our website.</p>
      </section>
      <footer style={styles.footer}>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  navbar: {
    backgroundColor: '#333',
    padding: '10px 0',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
  header: {
    backgroundColor: '#f8f8f8',
    padding: '50px 0',
  },
  mainContent: {
    padding: '20px',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px 0',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  }
};

export default HomePage;
