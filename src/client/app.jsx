import "./app.scss";

import AppRoute from "./app.routes";
import NavbarComponent from "./components/navbar/navbar.component";
import FooterComponent from "./components/footer/footer.component";

const App = () => {
  return (
    <div className="app">
      <NavbarComponent />
      <AppRoute />
      <FooterComponent />
    </div>
  );
};

export default App;
