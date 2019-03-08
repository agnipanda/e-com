import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div className="ui secondary blue inverted menu">
              <a className="active item">
                Home
              </a>
              <div className="right menu">
                <div className="item">
                  <div className="ui input small">
                    <input type="text" placeholder="username or email"/>
                  </div>
                </div>
                <div className="item">
                  <div className="ui input small">
                    <input type="text" placeholder="password"/>
                  </div>
                </div>
                <a className="ui item">
                  Login
                </a>
              </div>
            </div>
        );
    }
}

export default Header;
