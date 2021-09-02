import "./App.css";
// import AuthExample from "./contoh/AuthExample";
import ProvideAuth from "./Authentication/ProvideAuth";
import PageLogin from "./container/page/PageLogin";
import PageRegister from "./container/page/PageRegister";
import ForgotPassword from "./container/page/PageForgotPassword";
import PageReset from "./container/page/PageReset";
import Chat from "./container/page/Chat.js";
import LandingPage from "./container/page/LandingPage";
import DetailResep from "./container/page/DetailResep";
import DetailVideoResep from "./container/page/DetailVideoResep";
import AddRecipe from "./container/page/AddRecipe";
import Profil from "./container/page/Profil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Authentication/PrivateRoute";

function App() {
  return (
    // <AuthExample />
    <ProvideAuth>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login">
              <PageLogin />
            </Route>
            <Route path="/register">
              <PageRegister />
            </Route>
            <Route path="/forgotpassword">
              <ForgotPassword />
            </Route>
            <Route path="/resetpassword">
              <PageReset />
            </Route>
            <PrivateRoute path="/chat">
              <Chat />
            </PrivateRoute>
            <PrivateRoute path="/detailresep">
              <DetailResep />
            </PrivateRoute>
            <PrivateRoute path="/detailvideo">
              <DetailVideoResep />
            </PrivateRoute>
            <PrivateRoute path="/addrecipe">
              <AddRecipe />
            </PrivateRoute>
            <PrivateRoute path="/profil">
              <Profil />
            </PrivateRoute>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
