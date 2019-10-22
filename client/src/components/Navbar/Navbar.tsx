import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import NewForm from '../Admin/NewForm/NewForm';
import Home from '../Home/Home';
import Results from '../Admin/Results/Results';
import './Navbar.scss';
import AddResponse from '../Users/AddResponse/AddResponse';
import ListForms from '../Users/ListForms/ListForms';


interface Props {
  id?: number | null;
}

function Navbar () {

  return (
    <div>
      <header>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">Admin</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">User</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/admin" component={Results} exact />
          <Route path="/admin/create" component={NewForm} exact />
          <Route path="/users" component={ListForms} exact />
          <Route path="/users/form/:id" component={AddResponse} />
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default Navbar;
