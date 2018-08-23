import React, {Component} from "react"
import "../App.css"
import * as d3 from "d3"

class SurveyResults extends Component{
  constructor(){
    super()
    this.state = {
      data: [5,10,1,3],
      chartSize: {
        height:500,
        width:500
      },
      surveyData: [],
      resHash: {},
    }
    this.drawBar = this.drawBar.bind(this)
  }
  d3Node = React.createRef()

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
        this.drawBar(3)  // temporarily hardcoding the third question in, later this will be replaced by a switch function to select the appropriate chart functions based on question type
      })
    })
  }

  async typeProcess(){
    let resHash = {}
    const stuff = await this.state.surveyData.map(res => {
      if (!resHash[res.question_id]){
        let quesHash = {
          id: res.question_id,
          answer_type: res.answer_type,
          prompt: res.prompt,
          answer_array: res.answer_array,
          response_array: [res.response_string]
        }
        resHash[res.question_id] = quesHash;
      }

      else if (resHash[res.question_id]) {
        resHash[res.question_id].response_array.push(res.response_string)
      }

    })
    this.state.resHash = resHash
    console.log(this.state.resHash)
  }


  drawBar(qId) {
    const currentQ = this.state.resHash[qId]
    console.log(currentQ)

    let resCountArr = Array(currentQ.answer_array.length).fill(0)
    currentQ.response_array.map(r => {
      let choiceNumb = currentQ.answer_array.indexOf(r)
      resCountArr[choiceNumb] += 1
    })
    console.log(resCountArr)

    const x = d3.scaleBand().rangeRoundBands([0, this.state.chartSize.width], 0.5)
    const y = d3.scaleLinear().range([this.state.chartSize.height], 0)
    const xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .ticks(currentQ.answer_array.length)
    const yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(Math.max(... resCountArr) + 1)

    d3.select(this.d3Node)

  }


  render(){
    return (
      <svg ref={this.d3Node}>
      </svg>
    )
  }

}


export default SurveyResults
