import Footer from "./Footer";
import Nav from "./Nav";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout;