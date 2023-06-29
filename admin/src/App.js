import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/nav/Topbar";
import "./app.scss";
import Home from "./pages/home/Home";
import NewMedia from "./pages/new/NewMedia"
import EditMedia from "./pages/edit/EditMedia";
import MediaList from "./pages/list/MediaList";
import UserList from "./pages/list/UserList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/newmedia">
            <NewMedia />
          </Route>
          <Route path="/editmedia">
            <EditMedia />
          </Route>
          <Route path="/products">
            <MediaList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
