import "./app.scss";

import AppRoute from "./app.routes";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <AppRoute />
      <Footer />
    </div>
  );
};

export default App;
