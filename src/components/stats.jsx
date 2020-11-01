import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import ChrData from '../data/stat.json';

const data = {
  labels: ['present', '2025'],
  datasets: [
    {
      label: 'Total Deaths From AMR worldwide',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [700000, 10000000]
    }
  ]
};

const summary = {
  paragraphs: [
    'Anti Microbial resistance causes over 700, 000 deaths globally. This is projected to reach at least 10 million by 2050',
    'Infectious disease is the leading cause of death in Nigeria (66%).'
  ]
}

export class Stats extends Component {
  
  render() {
    return (
        <div id="stats">
        <div className="container p-3 pt-5">
          <div className="row">
            <div className="col-xs-12 col-md-6"> 
              <HorizontalBar
                data={data}
              />
            </div>
            <div className="col-xs-12 col-md-6">
              {summary 
              ? summary.paragraphs.map((p) => (
                  <p>{p}</p>
                ))
                : "Loading"}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stats
