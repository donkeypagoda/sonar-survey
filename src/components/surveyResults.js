import React, {Component} from "react"
import "../App.css"
import {scaleLinear, max, select} from "d3"

class SurveyResults extends Component{
  constructor(){
    super()
    this.state = {
      data: [5,10,1,3],
      size: [500, 500],
      surveyData: []
    }
    this.drawBar = this.drawBar.bind(this)
  }
  async getResults(){
    let survey_id = window.location.href.slice(window.location.href.lastIndexOf("/") + 1)
    const res = await fetch(`http://localhost:5000/results/${survey_id}`)
    const results = await res.json()
    this.setState({
      surveyData: results
    })
    console.log(this.state.surveyData)
  }
  componentDidMount(){
    this.getResults().then(res => {
      this.drawBar()
    })
  }
  // componentDidUpdate(){
  //   this.getResults()
  //   this.drawBar()
  // }

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
