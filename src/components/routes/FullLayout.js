import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";

const FullLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default FullLayout;
