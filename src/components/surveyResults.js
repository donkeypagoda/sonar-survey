import React, {Component} from "react"
import * as d3 from "d3"

class SurveyResults extends Component{
  constructor(){
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    //d3 playground
    const testData = [
      { label: "Tacos", count: 15 },
      { label: "Burgers", count: 12 },
      { label: "Milkshakes", count: 7 },
      { label: "Beersh", count: 5 },
      { label: "Tater Tots", count: 10 },
    ]
    const width = 360
    const height = 360
    const radius = Math.min(width, height) / 2
    const color = d3.scaleOrdinal().range(['#A60F2B', '#648C85', '#B3F2C9', '#528C18', '#C3F25C'])
    const svg = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')')

  }

  render(){
    return (
      <div className="chart">
        <svg width="360" height="360">
          <g transform="translate(180,180)">
            <path d="M0,-180A..." fill="#393b79"></path>
            <path d="M105.801..." fill="#5254a3"></path>
            <path d="M171.190..." fill="#6b6ecf"></path>
            <path d="M-105.80..." fill="#9c9ede"></path>
          </g>
        </svg>
      </div>
    )
  }

}


export default SurveyResults
