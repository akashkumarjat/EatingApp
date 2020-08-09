import React from 'react';
import 'antd/dist/antd.css';
import LandingPage from './Components/LandingPage';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import About_Male from './Components/About_Male';
import About_Female from './Components/About_Female';
import Ideal_weight from './Components/Ideal_weight';
import Your_Metrics from './Components/Your_Metrics';
import Ideal_weight_female from './Components/Ideal_weight_female';
import Your_metrics_female from './Components/Your_metrics_female';

function App() {
  return (
    <>

      <BrowserRouter>
        {/* <IndexNavbar /> */}
        <Switch>
          {/* <Route path="/index" render={props => <Index {...props} />} /> */}
          <Route path="/About_Male" exact component={About_Male} />
          <Route path="/About_Female" exact component={About_Female} />
          <Route path="/Ideal_weight" exact component={Ideal_weight} />
          <Route path="/Your_Metrics" exact component={Your_Metrics} />

          <Route path="/Ideal_weight_female" exact component={Ideal_weight_female} />
          <Route path="/Your_metrics_female" exact component={Your_metrics_female} />

          <LandingPage />

          <Redirect to="/index" />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
