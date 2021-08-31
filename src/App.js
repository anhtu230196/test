import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authSuccess } from "./redux/actions/userAction";
import PostDetail from "./pages/PostDetail";
import PrivateRoute from "./HOC/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("authentication");
    if (token) {
      dispatch(authSuccess(JSON.parse(token)));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={Signin} />
          <PrivateRoute path="/:id" component={PostDetail} />
          <PrivateRoute path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
