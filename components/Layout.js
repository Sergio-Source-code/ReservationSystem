import NavigationBar from "./Navigation_bar";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default Layout;