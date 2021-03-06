import React, { Component } from "react";
import {Link} from 'react-router-dom';

export class Navigation extends Component {
  state = {
    transform: null,
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
      window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    if (window.pageYOffset >= 80) {
      const itemTranslate = 10;

      this.setState({
        transform: itemTranslate
      });
    }else{
      this.setState({
        transform: null,
      });
    }
  };
  render() {
    return (
      <nav id="menu" className={ this.state.transform ? "navbar navbar-default navbar-expand-md navbar-fixed-top active" : "navbar navbar-expand-md navbar-default navbar-fixed-top"}>
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              Microbic Pro
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/" className="page-scroll">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/blog" className="page-scroll">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="page-scroll">
                  Stewardship
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
