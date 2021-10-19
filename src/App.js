import React, {Component} from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import {Route,NavLink} from "react-router-dom";

class App extends Component {
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
        <Route path="/" exact render={() => <h1>Home page</h1>}/>
        <Route path="/about" exact component={About}/>
        <Route path="/Cars" component={Cars}/>

        {/*<About />*/}
        {/*<Cars />*/}
      </div>
    );
  }
}

export default App
