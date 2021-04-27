import './App.css';
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="app">
      <MainPage />
    </div>
    /*<Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/mainPage">
              <MainPage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>*/
  );
}

export default App;
