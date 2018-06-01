import React, {Component} from "react"
import "../App.css"
import {scaleLinear} from "d3"

class SurveyResults extends Component{
  constructor(){
    super()
    this.state = {
      data: [
        { label: "Tacos", count: 15 },
        { label: "Burgers", count: 12 },
        { label: "Milkshakes", count: 7 },
        { label: "Beersh", count: 5 },
        { label: "Tater Tots", count: 10 },
      ]
    }
    // this.drawPie = this.drawPie.bind(this)
  }
  // componentDidMount(){
  //   this.drawPie()
  // }
  // componentDidUpdate(){
  //   this.drawPie()
  // }
  //
  // drawPie(){
  //   const width = 360
  //   const height = 360
  //   const radius = Math.min(width, height) / 2
  //   const color = d3.scaleOrdinal().range(['#A60F2B', '#648C85', '#B3F2C9', '#528C18', '#C3F25C'])
  //   const svg = d3.select('#chart')
  //   .append('svg')
  //   .attr('width', width)
  //   .attr('height', height)
  //   .append('g')
  //   .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')')
  //   const arc = d3.arc()
  //   .innerRadius(0)
  //   .outerRadius(radius)
  //   const pie = d3.pie()
  //   .value(d => d.count )
  //   .sort(null)
  //   const path = svg.selectAll('path')
  //   .data(pie(this.state.data))
  //   .enter()
  //   .append('path')
  //   .attr('d', arc)
  //   .attr('fill', function(d, i) {
  //     return color(d.data.label);
  //   })
  // }


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
