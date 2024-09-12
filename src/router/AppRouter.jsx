import { Route, Routes } from "react-router-dom";

import AppLayout from "../layout/AppLayout";
import Finance from "../pages/Finance";

const AppRouter = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Finance />} />
      </Routes>
    </AppLayout>
  );
};

export default AppRouter;
