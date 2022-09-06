import Loading from './components/Loading';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (<Router>

    <Switch>
      {/*<Route path="/home">*/}
      {/*  <Menu/>*/}
      {/*  <Home/>*/}
      {/*  <Footer/>*/}
      {/*</Route>*/}
      <Route exact path="/">

        <div className="App">
          <header className="App-header">
            <Loading/>
          </header>
        </div>
        {/*<Login/>*/}
      </Route>
    </Switch>

  </Router>
  );
}

export default App;
