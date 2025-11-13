import { Outlet } from "react-router-dom";
import "./App.css";
import MainPageTemplate from "./components/templates/MainPageTemplate";

function App() {
  return (
    <MainPageTemplate>
      <Outlet />
    </MainPageTemplate>
  );
}

export default App;
