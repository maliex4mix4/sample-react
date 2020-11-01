import React, { Component } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const data = {
  Down: 1000,
  Hosp: 67,
  Comm: 49
}

export class Reach extends Component {
  render() {
    return (
      <div id="reach" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Our Reach</h2>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 container bg-white shadow">
               
              <CountUp end={data.Down} redraw={true}>
                  {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                      </VisibilitySensor>
                  )}
              </CountUp>
                <p>Downloads</p>
            </div>
            <div className="col-sm-12 col-md-4 container bg-white shadow">
                <CountUp end={data.Hosp} redraw={true}>
                  {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                      </VisibilitySensor>
                  )}
                </CountUp>
                <p>Hospitals Served</p>
            </div>

            <div className="col-sm-12 col-md-4 container bg-white shadow">
                <CountUp end={data.Comm} redraw={true}>
                  {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                      </VisibilitySensor>
                  )}
                </CountUp>
                <p>Community Phamarcies</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reach;
