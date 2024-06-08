import { BrowserRouter } from "react-router-dom";
import { NavigationRoutes } from "./routes/NavigationRoutes";
import Navigation from "./components/Navigation";

import { MainLayout } from "../src/layouts/Layaouts";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Navigation />
        <NavigationRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
