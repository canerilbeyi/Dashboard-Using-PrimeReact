import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Sidebar from "./Sidebar";
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
