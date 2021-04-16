import { Col,Row } from 'reactstrap';
import InstanceDetails from './components/InstanceDetails';
import InstanceList from './components/InstanceList';
import MyNavbar from './components/Navbar';
import Sidebar from './components/Sidebar';


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Chart from './components/Charts';


function App() {



  return (

    <div className="App" >
      <Router>  
          <MyNavbar/>
            <Row>
              <Col xs="2" style={{marginLeft:"0"}}>
                  <Sidebar/>
              </Col>
              <Col xs="10" style={{marginLeft:"-2rem"}}>
                <Switch>
                  <Route  path="/instance_details/:instanceId" ><InstanceDetails/></Route>
                  <Route  path="/instance_chart/:instanceId" ><Chart/></Route>
                  <Route  exact path="/"><InstanceList/></Route>
                </Switch>
                
              </Col>
            </Row>
        </Router>
    
        
    </div>
  );
}

export default App;  
