import "assets/scss/style.scss";
import CheckOut from "pages/CheckOut";
import DetailsPage from "pages/DetailsPage";
import LandingPage from "pages/LandingPage";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/properties/:id" component={DetailsPage} />
        <Route path="/checkout" component={CheckOut} />
      </Router>
    </div>
  );
}

export default App;
