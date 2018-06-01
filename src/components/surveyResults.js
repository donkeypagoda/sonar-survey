import React, {Component} from "react"
import "../App.css"
import {scaleLinear, max, select} from "d3"

class SurveyResults extends Component{
  constructor(){
    super()
    this.state = {
      data: [5,10,1,3],
      size: [500, 500]
      // [
      //   { label: "Tacos", count: 15 },
      //   { label: "Burgers", count: 12 },
      //   { label: "Milkshakes", count: 7 },
      //   { label: "Beersh", count: 5 },
      //   { label: "Tater Tots", count: 10 },
      // ]
    }
    this.drawBar = this.drawBar.bind(this)
  }
  componentDidMount(){
    this.drawBar()
  }
  componentDidUpdate(){
    this.drawBar()
  }

  drawBar() {
   const node = this.node
   const dataMax = max(this.state.data)
   const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.state.size[1]])

select(node)
   .selectAll('rect')
   .data(this.state.data)
   .enter()
   .append('rect')

select(node)
   .selectAll('rect')
   .data(this.state.data)
   .exit()
   .remove()

select(node)
   .selectAll('rect')
   .data(this.state.data)
   .style('fill', '#fe9922')
   .attr('x', (d,i) => i * 25)
   .attr('y', d => this.state.size[1] - yScale(d))
   .attr('height', d => yScale(d))
   .attr('width', 25)
}


  render(){
    return (
      <svg ref={node => this.node = node} width={500} height={500}>
      </svg>
    )
  }

}


export default SurveyResults
