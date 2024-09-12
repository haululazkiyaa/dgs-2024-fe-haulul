import Header from "../components/header/Header";
import PropTypes from "prop-types";
import Sidebar from "../components/sidebar/Sidebar";

const AppLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#F1F2F7]">
      <div className="flex flex-col w-full px-16 py-12">
        <Header />
        {children}
      </div>
      <Sidebar />
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
