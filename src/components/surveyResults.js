import React, {Component} from "react"
import "../App.css"
import {scaleLinear, max, select, axis} from "d3"

class SurveyResults extends Component{
  constructor(){
    super()
    this.state = {
      data: [5,10,1,3],
      size: [500, 500],
      surveyData: [],
      typeArr:[],
      resHash: {}
    }
    this.d3Node = React.createRef()

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
    let resHash = {}
    const stuff = await this.state.surveyData.map(res => {
      if (!resHash[res.question_id]){
        console.log("up dog")
        let quesHash = {
          id: res.question_id,
          answer_type: res.answer_type,
          prompt: res.prompt,
          answer_array: res.answer_array,
          response_string: [res.response_string]
        }
        resHash[res.question_id] = quesHash;
      }

      else if (resHash[res.question_id]) {
        resHash[res.question_id].response_string.push(res.response_string)
      }


      // if (this.state.typeArr.length < res.question_id) {
      //   switch (res.answer_type) {
      //     case "boolean":
      //       this.state.typeArr.push("boolean")
      //       console.log(this.state.typeArr);
      //       break;
      //     case "range":
      //       this.state.typeArr.push("range")
      //       console.log(this.state.typeArr);
      //       break;
      //     case "multiple_choice":
      //       this.state.typeArr.push("multiple_choice")
      //       console.log(this.state.typeArr);
      //       break;
      //     case "string":
      //       this.state.typeArr.push("string")
      //       console.log(this.state.typeArr);
      //       break;
      //     default:
      //       console.log("borked")
      //   }
      // }

    })
    this.state.resHash = resHash
    console.log(this.state.resHash)
  }

  drawBar(qId) {
   const node = this.node
   const dataMax = max(this.state.data)
   const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.state.size[1]])

    const xAxis =

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
     .call(xAxis)
  }


  render(){
    return (
      <svg ref={node => this.node = node} width={500} height={500}>
      </svg>
    )
  }

}


export default SurveyResults
