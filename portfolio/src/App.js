import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Home from './components/Home';
import About from './components/About';


class App extends React.Component {
 render() {
    return (
      <div>
        <Nav/>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/Experience" exact component={Experience} />
          <Route path="/About" exact component={About} />

        </Switch>


        <Footer/>
      </div>
    );
  }
}

export default App;
