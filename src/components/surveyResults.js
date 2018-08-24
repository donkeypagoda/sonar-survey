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
    // console.log(this.state.surveyData)
  }

  componentDidMount(){
    this.getResults().then(res => {
      this.resProcess().then(resHash => {
        this.state.resHash = resHash
        console.log(resHash)
        for(const a in resHash){
          switch (resHash[a].answer_type){
            case "boolean":
            console.log(resHash[a].id);
            break;
            case "range":
            console.log(resHash[a].id);
            break;
            case "multiple_choice":
              this.drawBar(resHash[a].id);
              break;
            case "string":
              console.log(resHash[a].id);
              break;
            default:
              console.log('borked');
          }

        }
      })
    })
  }

  async resProcess(){
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
    return resHash
  }


  drawBar(qId) {
    const currentQ = this.state.resHash[qId]

    let resCountArr = Array(currentQ.answer_array.length).fill(0)
    currentQ.response_array.map(r => {
      let choiceNumb = currentQ.answer_array.indexOf(r)
      resCountArr[choiceNumb] += 1
    })

    const chart = d3.select (this.d3Node.current);
    const barHeight = 20;
    const chartWidth = 200;

    const xScale = d3
      .scaleLinear()
      .domain ([0, d3.max (resCountArr)])
      .range ([0, chartWidth]);
    const bar = chart
      .selectAll ('g')
      .data (resCountArr)
      .enter ()
      .append ('g')
      .attr ('transform', (value, i) => `translate(0,${i * barHeight})`);
    bar
      .append ('rect')
      .attr ('width', value => xScale (value))
      .attr ('height', barHeight - 1)
      .attr ('style', 'fill: steelblue;')
    bar
      .append ('text')
      .attr ('x', value => xScale (value) - 5)
      .attr ('y', barHeight / 2)
      .attr ('dy', '.35em')
      .attr ('style', 'fill: white; font: 14px sans-serif; text-anchor: end;')
      .text ((d, i) => currentQ.answer_array[i])

  }


  render(){
    return (
      <svg ref={this.d3Node} />
    )
  }

}


export default SurveyResults
