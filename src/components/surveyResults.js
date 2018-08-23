import React, {Component} from "react"
import "../App.css"
import * as d3 from "d3"

class SurveyResults extends Component{
  constructor(){
    super()
    this.state = {
      data: [5,10,1,3],
      size: [500, 500],
      surveyData: [],
      resHash: {}
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

    })
    this.state.resHash = resHash
    console.log(this.state.resHash)
  }


  drawBar(qId) {
    const currentQ = this.state.resHash[qId]
    console.log(currentQ)
    // let resCount = Array(this.state.resHash)
    //
    // const x = d3.scaleBand().rangeRoundBands([0, this.state.resHash[qId].answer_array.length], 0.5)
    // const xAxis = d3.
    // d3.select(this.d3Node)

  }


  render(){
    return (
      <svg ref={this.d3Node} width={500} height={500}>
      </svg>
    )
  }

}


export default SurveyResults
