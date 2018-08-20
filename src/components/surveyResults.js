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
      typeArr:[]
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
      this.typeProcess().then(stuff => {
        this.drawBar()

      })
    })
  }

  async typeProcess(){
    const stuff = await this.state.surveyData.map(res => {
      if (this.state.typeArr.length < res.question_id) {
        switch (res.answer_type) {
          case "boolean":
            this.state.typeArr.push("boolean")
            console.log(this.state.typeArr);
            break;
          case "range":
            this.state.typeArr.push("range")
            console.log(this.state.typeArr);
            break;
          case "multiple_choice":
            this.state.typeArr.push("multiple_choice")
            console.log(this.state.typeArr);
            break;
          case "string":
            this.state.typeArr.push("string")
            console.log(this.state.typeArr);
            break;
          default:
            console.log("borked")
        }
      }

    })
  }

  async renderAll(){
    const charts = await this.state.typeArr.forEach(e => {
      // and here is maybe the another switch case to break out these choices... this is messy architecture, not sure how to fix
    })
  }

  async boolProcess(qId){
    let bool = await this.state.surveyData.map(data => {
        if (data.question_id === qId) {
          // logic in here for an individual question, need to abstract a way to store for all... maybe this should be done on the backend
        }
    })

  }

  async rangeProcess(){

  }


  async multiProcess(){

  }

  async stringProcess(){

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
