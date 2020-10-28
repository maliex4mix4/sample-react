import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="hero has-bg-image">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8 box-txt">
                        <h3>{this.props.data ? this.props.data.title : "Loading .."}</h3>
                        <p>
                        {this.props.data ? this.props.data.paragraph : "Loading .."}
                        </p>

                        <div className="down">
                            <a>
                                <i className="fa fa-android txt-green" aria-hidden="true"></i>
                                Play Store
                            </a>
                            <a>
                                <i className="fa fa-apple txt-white" aria-hidden="true"></i>
                                Apple Store
                            </a>
                        </div>
                        <h4 className="txt-uniq">Download Now on</h4>
                    </div>
                    <div className="col-sm-4 box-img text-center">
                        <img src="images/intro-screen.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </header>
    );
  }
}

export default Header;
