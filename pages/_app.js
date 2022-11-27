// File Description: This page is designed to load all the content/components in all other pages:

// Packages to Import
import NavigationBar from "../components/Navigation_bar";
import Footer from "../components/Footer";
import ConnectDB from "../hooks/connection";
import "../styles/globals.css";

// MyApp Component (Every Component Passed Here Would Appear on All Pages):
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ConnectDB />
      <NavigationBar />
      <Component {...pageProps} /> {/* Renders other pages. */}
      <Footer />
    </>
  );
}

export default MyApp;