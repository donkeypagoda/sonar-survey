import React, {Component} from "react"
import SurveyResults from "./surveyResults"

class LandingPage extends Component {
  constructor(){
    super()
    this.state = {
      randomSurveyResults: null
    }
  }
  surveyPicker(total){
    return Math.floor(Math.random() * Math.floor(total))
  }
  async componentDidMount(){
    const res = await fetch("http://localhost:5000/survey")
    const num = await res.json()
    const length = num.surveys.length
    const survey_id = this.surveyPicker(length)
    const get = await fetch(`http://localhost:5000/results/${survey_id}`)
    const choice = await get.json()
    console.log(choice.responses)
    this.setState({
      randomSurveyResults: choice.resopnses
    })
  }
  //temporary
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
      <div className="landingPage">
        <svg ref={node => this.node = node} width={500} height={500}>
        </svg>
      </div>
    )
  }
}

export default LandingPage
