import React, { Component } from 'react'

export class Stats extends Component {
  render() {
    return (
        <div id="stats">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> 
              Chart
            </div>
            <div className="col-xs-12 col-md-6">
              {this.props.data
              ? this.props.data.map((p) => (
                  <p>
                    {p}
                  </p>                  
                ))
              : "loading"}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stats
