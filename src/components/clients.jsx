import React, { Component } from 'react'


export class Clients extends Component {
  render() {
    return (
        <div id="clients">
        <div className="container text-center">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Our Partners</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.clients.map((c) => (
                <div className="col-sm-12 col-md-2">
                  <img src={c.img} alt="..." className="client-img" />
                </div>
              ))
              : "loading"
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Clients
