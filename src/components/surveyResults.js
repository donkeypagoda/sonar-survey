import React, {Component} from "react"
import "../App.css"
import {scaleLinear, max, select} from "d3"

class SurveyResults extends Component{
  constructor(){
    super()
    this.state = {
      data: [5,10,1,3],
      size: [500, 500],
      surveyData: [],
      graphArr:[]
    }
    this.drawBar = this.drawBar.bind(this)
  }

  async getResults(){
    let survey_id = window.location.href.slice(window.location.href.lastIndexOf("/") + 1)
    const res = await fetch(`http://localhost:5000/results/${survey_id}`)
    const results = await res.json()
    this.setState({
      surveyData: results.responses
    })
    console.log(this.state.surveyData)
  }

  componentDidMount(){
    this.getResults().then(res => {
      this.dataProcess().then(stuff =>{
        this.drawBar()

      })
    })
  }

  async dataProcess(){
    const stuff = await this.state.surveyData.map(response => {
      if (this.state.graphArr.length < response.question_id){
        switch (response.answer_type) {
          case "boolean":
            this.state.graphArr.push("boolean")
            console.log("boolean");
            break;
          case "range":
            this.state.graphArr.push("range")
            console.log("range");
            break;
          case "multiple_choice":
            this.state.graphArr.push("multiple_choice")
            console.log("multiple_choice");
            break;
          case "string":
            this.state.graphArr.push("string")
            console.log("string");
            break;
          default:
            console.log("borked")
        }
      }
    })
  }
  // multChoice(){
  //   const node = this.node;
  //   const multMax = max(this.)
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
