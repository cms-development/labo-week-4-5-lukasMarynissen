import React, { Component } from 'react';
import { Route,NavLink,BrowserRouter } from "react-router-dom";
import Home from './Home';
import Add from './Add';
import Detail from './Detail';
import Edit from './Edit';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <p>
            Creatures
          </p>
        </header>

        <BrowserRouter>
          <div>
              <div className="nav btn-group" role="group" aria-label="Nav">
                <button type="button" className="btn btn-secondary"><NavLink exact to="/">List</NavLink> </button>
                <button type="button" className="btn btn-secondary"><NavLink exact to="/add">Add New</NavLink></button>
              </div>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/add" component={Add} />
              <Route path="/creature/edit/:id" component={Edit} />
              <Route path="/creature/delete/:id" component={Detail} />
              <Route exact path="/creature/:id" component={Detail} />
            </div>
          </div>
        </BrowserRouter>

        

    </div>
    );
  }
}

export default App;
