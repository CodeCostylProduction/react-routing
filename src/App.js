import React, {Component} from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import {Route,NavLink, Switch, Redirect} from "react-router-dom";
import CarDetail from "./CarDetail/CarDetail";

class App extends Component {

    state = {
        isLoggedIn: false,
    }

  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                  to="/"
                  exact
                  activeClassName={'wfm-active'}
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                  to="/about"
                  activeStyle={{
                      color: 'blue'
                  }}
              >About</NavLink>
            </li>
            <li>
              <NavLink to={{
                  pathname: '/Cars',
                  search: '?a=2&b=3',
                  hash: 'wfm-hash'
              }}>Cars</NavLink>
            </li>

          </ul>
        </nav>
        <hr/>
        <div style={{textAlign: 'center'}}>
            <h3>Is logged in {this.state.isLoggedIn ? 'True' : 'False'}</h3>
              <button onClick={() => this.setState({isLoggedIn: !this.state.isLoggedIn})}>Sign In</button>
        </div>
        <hr/>
        <Switch>
        <Route path="/" exact render={() => <h1>Home page</h1>}/>
        <Route path="/about" exact component={About}/>
        <Route path="/Cars/:name" component={CarDetail}/>
            {this.state.isLoggedIn ?
                <Route path="/Cars" component={Cars}/>
                : null
            }
        <Redirect to={'/'}/>
        {/*<Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>}/>*/}
        </Switch>
        {/*<About />*/}
        {/*<Cars />*/}
      </div>
    );
  }
}

export default App
