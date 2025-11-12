import { Outlet } from "react-router-dom";

import AppHeader from "../components/AppHeader";
import AppNavbar from "../components/AppNavbar";
import AppFooter from "../components/AppFooter";

const AppLayout = ({ products, carts, setToken }) => {
  return (
    <div className="mx-auto" style={{ width: "1020px", height: "640px" }}>
      <div>
        <AppHeader />
      </div>
      <div>
        <AppNavbar products={products} carts={carts} setToken={setToken}/>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <AppFooter />
      </div>
    </div>
  );
};

export default AppLayout;
