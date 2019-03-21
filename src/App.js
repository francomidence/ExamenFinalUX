import React, { Component } from "react";
import "./App.css";
import SampleComponent from "./components/SampleComponent";
import { Provider as ReduxProvider } from "react-redux";
import  {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import { Link } from 'react-router-dom';
import configureStore from "./modules/store";
import ComponentHome from "./components/ComponentHome"
import ComponentWeather from "./components/ComponentWeather"

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <Router>
  <div className="App-header">
          <Route exact path="/" component={ComponentHome}/>
          <Route path="/ComponentHome" component={ComponentHome}/>
          <Route path="/ComponentWeather" component={ComponentWeather}/>
          <Route path="/SampleComponent" component={SampleComponent}/>
          <ul>
              <li><Link to="/ComponentHome">Home</Link></li>
              <li><Link to="/ComponentWeather">Weather</Link></li>
              <li><Link to="/SampleComponent">Weather List</Link></li>
          </ul>
      </div>
</Router>
);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          {routing}
        </div>
      </ReduxProvider>
    );
  }
}

export default App;