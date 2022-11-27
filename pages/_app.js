// File Description: This page is designed to load all the content/components in all other pages:

// Packages to Import
import Layout from "../components/Layout";
import NavigationBar from "../components/Navigation_bar";
import "../styles/globals.css";

// MyApp Component (Every Component Passed Here Would Appear on All Pages):
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;