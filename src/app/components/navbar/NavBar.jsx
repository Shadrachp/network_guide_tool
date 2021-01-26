import React, { Component } from 'react';
import '../../stylesheets/navbar.css'

class NavBar extends Component {

  render() {
    return (
      <div className="nav">
        <ul className="nav-container">
          <li>
            <div>
              Subnet Calculator
            </div>
          </li>
          <li>
            <div>
             Check Address Class
            </div>
          </li>
          <li>
            <div>
             Check Address Type
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
