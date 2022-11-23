// File Description: This page is designed to load all the content/components in all other pages:

// Packages to Import
import '../styles/globals.css'
import NavigationBar from '../components/Navigation_bar'

// MyApp Component (Every Component Passed Here Would Appear on All Pages):
function MyApp({ Component, pageProps }) {
  return (
    <NavigationBar />
  )
}

export default MyApp