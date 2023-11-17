import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
