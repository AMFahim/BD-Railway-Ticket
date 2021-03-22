import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import SignIn from './Component/SignIn/SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';


 function App() {
  return (
    <div className="margin">
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="*"> 
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    


    </div>
  );
}

export default App;
